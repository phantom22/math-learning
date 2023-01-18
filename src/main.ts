window.addEventListener("load", () => {

    const debug = /(&|\?)debug=true/.test(window.location.href),
          dictionary = /(&|\?)dictionary=true/.test(window.location.href);

    function catLog(categoryName:string,categoryIndex:number,text:string) {
        return `[CategoryName='${categoryName}',CategoryIndex=${categoryIndex}] ${text}`;
    }

    function catQuestionLog(categoryName:string,categoryIndex:number,questionIndex:number,text:string) {
        return `[CategoryName='${categoryName}',CategoryIndex=${categoryIndex}${typeof questionIndex==="number"?`,QuestionIndex=${questionIndex}`:""}] ${text}`;
    }

    function hasBadBrackets(equation=""): [number,number,number] {
        let lb = 0, rb = 0;
        for (let t=0;t<equation.length; t++) { 
            if (equation[t]==='{') lb++;
            else if (equation[t]==='}') rb++;
        }
        let o;
        if (lb===rb) o =-1;
        else if (lb>rb) o = 0;
        else o = 1;

        return [o,lb,rb];
    }

    // Simple debug info, to prevent strange errors
    if (debug) {
        console.group("Data debug");

        if (typeof categories==="undefined") throw `No categories provided, hence no questions to display!`;

        for (let i=0; i<categories.length;i++) {
            const categoryContainer = categories[i],
                name = categoryContainer.category,
                questions = categoryContainer.questions;
            console.group(name);
            if (questions.length===0) console.warn(catLog(name,i,"Empty category!"));
            for (let k=i-1; k>0; k--) {
                if (name===categories[k].category) { 
                    console.warn(catLog(name,i,"Duplicate category name!"));
                    break;
                } 
            };

            for (let j=0; j<categories[i].questions.length; j++) {
                const {prompt,answer} = questions[j];
                if (typeof prompt.equation==="undefined"&&typeof prompt.text==="undefined") console.error(catQuestionLog(name,i,j,"No prompt to display for this question!"));
                else if (typeof answer.equation==="undefined") console.error(catQuestionLog(name,i,j,"No answer to display for this question!"));
                else if (typeof answer.correctAnswers==="undefined"||Array.isArray(answer.correctAnswers)&&answer.correctAnswers.length===0) console.error(catQuestionLog(name,i,j,"No correct answers are provided for this question!"));
                else if (typeof answer.correctAnswers==="string"&&answer.correctAnswers==="") console.error(catQuestionLog(name,i,j,"The only correct answer, provided for this question, is empty!"));

                const [pBadBrackets,plb,prb] = hasBadBrackets(prompt.equation), [aBadBrackets,alb,arb] = hasBadBrackets(answer.equation);
                if (pBadBrackets!==-1) console.error(catQuestionLog(name,i,j,`The equation provided for the prompt has ${plb} left-curly-brackets and ${prb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${prompt.equation}`))
                if (aBadBrackets!==-1) console.error(catQuestionLog(name,i,j,`The equation provided for the answer has ${alb} left-curly-brackets and ${arb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${answer.equation}`))
            }
            console.groupEnd();
        }
        console.groupEnd();
    }

    const _answerInput = <HTMLTextAreaElement>document.getElementById("answer-input"),
    _promptText = document.getElementById("prompt-text"),
    _answerContainer = document.getElementById("answer-container"),
    _answerTitle = document.getElementById("answer-title"),
    _promptTitle = document.getElementById("prompt-title");
    if (!(_answerInput instanceof HTMLTextAreaElement)) throw "Couldn't find textarea#answer-input";
    if (_promptText===null) throw "Couldn't find #prompt-text!";
    if (_answerTitle===null) throw "Couldn't find #answer-title!";
    if (_promptTitle===null) throw "Couldn't find #prompt-title!";
    if (_answerContainer===null) throw "Couldn't find #answer-container!";

    if (dictionary) {
        _answerInput.style.display = "hidden";
    }

    document.body.addEventListener("keypress",(e)=>{
        if (e.key==="Enter"&&!dictionary) answerQuestion();
        else if (e.key==="Enter") pickQuestion();
        else if (e.key===" " && _answerInput.placeholder!=="Inserire qui la risposta...") _answerInput.value = _answerInput.placeholder;
    });

    _answerInput.addEventListener("input",(e) => {
        // @ts-ignore
        let v = e.target.value;
        v = v.toLowerCase()
            .replaceAll(/\s/g,"")
            .replaceAll("v","√")
            .replaceAll(">=","≥")
            .replaceAll("<=","≤")
            .replaceAll("+-","±")
            .replaceAll("-+","∓")
            .replaceAll("composto","∘");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });

    let _categoryIndex = -1,
    _questionIndex = -1,
    _questionQueue = [],
    _queueLength = /*(categories.length-1)*/ 2 * Math.min(categories.map(v=>v.questions.length)),
    _totalQuestionCount = categories.map(v=>v.questions.length).reduce((a,b)=>a+b);

    function chooseQuestion(category:number,questionIndex:number) {
        if (!dictionary) return;
        _categoryIndex = category;
        _questionIndex = questionIndex;
        updateQuestionUI();
        displayAnswer();
    }

    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _answerInput.value = "";
        _answerInput.placeholder = "Inserire qui la risposta...";
        while (categoryGuess===_categoryIndex && categories.length>1) {
            categoryGuess = ~~(Math.random() * categories.length);
        }
        _categoryIndex = categoryGuess;
        let questionGuess, alreadyAsked = true, iterationCounter=0;
        while (alreadyAsked&&iterationCounter<_totalQuestionCount) {
            iterationCounter++;
            alreadyAsked = false;
            questionGuess = ~~(Math.random() * categories[_categoryIndex].questions.length);
            for (let i=0;i<_questionQueue.length;i++) {
                let q = _questionQueue[i];
                if (q[0]===_categoryIndex&&q[1]===questionGuess) {
                    alreadyAsked = true;
                }
            }
        }

        _questionIndex = questionGuess;
        _questionQueue.push([_categoryIndex,_questionIndex]);
        if (iterationCounter===_totalQuestionCount) _questionQueue = [];
        else if (_questionQueue.length>_queueLength) _questionQueue.shift();
        updateQuestionUI();
        if (dictionary) displayAnswer();
    }

    function answerQuestion() {
        const {correctAnswers} = categories[_categoryIndex].questions[_questionIndex].answer,
            userAnswer = _answerInput.value.toLowerCase();
        if (userAnswer==="skip"||userAnswer==="s") {
            pickQuestion();
        }
        else if ((typeof correctAnswers==="string"&&correctAnswers===userAnswer)||Array.isArray(correctAnswers)&&correctAnswers.includes(userAnswer)) {
            pickQuestion();
            _answerTitle.textContent = "Risposta";
        }
        else displayAnswer();

    }

    function displayAnswer() {
        const {correctAnswers,equation} = categories[_categoryIndex].questions[_questionIndex].answer;
        _answerInput.value = "";
        _answerInput.placeholder = typeof correctAnswers==="string"?correctAnswers:correctAnswers[~~(Math.random() * correctAnswers.length)];
        const _target = dictionary ? _answerContainer : _answerTitle;
        try {
            if (typeof equation==="string") {
                // @ts-ignore
                _target.innerHTML = MathJax.tex2mml((!dictionary?"\\text{Risposta }\\implies":"")+equation, {});
            }
            else {
                _target.textContent = "Risposta = "+(typeof correctAnswers==="string" ? correctAnswers : correctAnswers.join(" oppure "));
            }
        }
        catch(e) {
            setTimeout(displayAnswer,50);
        }
    }

    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;

        try {
            let {prompt:{equation,text},answer} = cat.questions[_questionIndex];

            _answerTitle.textContent = "Risposta";
            if (typeof equation==="string") {
                try {
                    /** @ts-ignore */
                    _promptText.innerHTML = MathJax.tex2mml(equation + (typeof text==="string" ? "" : " = ？"), {}) 
                     + (text ? "<p>" + text.replaceAll("<","&lt").replaceAll(">","&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
                }
                catch(e) {
                    setTimeout(updateQuestionUI,50);
                }
            }
            else if (typeof text==="string") {
                _promptText.textContent = 
                        text
                     + (typeof answer==="string"?" = ?" : " =* ?");
            }
            else throw "";
        }
        catch(e) {
            throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
    }

    pickQuestion();

});