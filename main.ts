window.addEventListener("load", () => {

    function catLog(category:string,text:string) {
        return `[Category='${category}'] ${text}`;
    }

    function catQuestionLog(category:string,questionIndex:number,text:string) {
        return `[Category='${category}'${typeof questionIndex==="number"?`,QuestionIndex=${questionIndex}`:""}] ${text}`;
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
    if (/(&|\?)debug=true/.test(window.location.href)) {
        console.group("Data debug");

        if (typeof categories==="undefined") throw `No categories provided, hence no questions to display!`;

        for (let i=0; i<categories.length;i++) {
            const categoryContainer = categories[i],
                name = categoryContainer.category,
                questions = categoryContainer.questions;
            console.group(name);
            if (questions.length===0) console.warn(catLog(name,"Empty category!"));
            for (let k=i-1; k>0; k--) {
                if (name===categories[k].category) { 
                    console.warn(catLog(name,"Duplicate category name!"));
                    break;
                } 
            };

            for (let j=0; j<categories[i].questions.length; j++) {
                const {prompt,answer} = questions[j];
                if (typeof prompt.equation==="undefined"&&typeof prompt.text==="undefined") console.error(catQuestionLog(name,j,"No prompt to display for this question!"));
                else if (typeof answer.equation==="undefined") console.error(catQuestionLog(name,j,"No answer to display for this question!"));
                else if (typeof answer.correctAnswers==="undefined"||Array.isArray(answer.correctAnswers)&&answer.correctAnswers.length===0) console.error(catQuestionLog(name,j,"No correct answers are provided for this question!"));
                else if (typeof answer.correctAnswers==="string"&&answer.correctAnswers==="") console.error(catQuestionLog(name,j,"The only correct answer, provided for this question, is empty!"));

                const [pBadBrackets,plb,prb] = hasBadBrackets(prompt.equation), [aBadBrackets,alb,arb] = hasBadBrackets(answer.equation);
                if (pBadBrackets!==-1) console.error(catQuestionLog(name,j,`The equation provided for the prompt has ${plb} left-curly-brackets and ${prb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${prompt.equation}`))
                if (aBadBrackets!==-1) console.error(catQuestionLog(name,j,`The equation provided for the answer has ${alb} left-curly-brackets and ${arb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${answer.equation}`))
            }
            console.groupEnd();
        }
        console.groupEnd();
    }

    const _input = <HTMLTextAreaElement>document.getElementById("input"),
    _inputTitle = document.getElementById("input-title"),
    _prompt = document.getElementById("prompt"),
    _promptTitle = document.getElementById("prompt-title");
    if (!(_input instanceof HTMLTextAreaElement)) throw "Couldn't find textarea#input";
    if (_inputTitle===null) throw "Couldn't find #input-title!";
    if (_prompt===null) throw "Couldn't find #prompt!";
    if (_promptTitle===null) throw "Couldn't find #prompt-title!";

    document.body.addEventListener("keypress",(e)=>{
        if (e.key==="Enter") answerQuestion();
        else if (e.key===" " && _input.placeholder!=="Inserire qui la risposta...") _input.value = _input.placeholder;
    });

    _input.addEventListener("input",(e) => {
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


    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _input.value = "";
        _input.placeholder = "Inserire qui la risposta...";
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
    }

    function answerQuestion() {
        const {correctAnswers,equation} = categories[_categoryIndex].questions[_questionIndex].answer,
            userAnswer = _input.value.toLowerCase();
        if (userAnswer==="skip"||userAnswer==="s") {
            pickQuestion();
        }
        else if ((typeof correctAnswers==="string"&&correctAnswers===userAnswer)||Array.isArray(correctAnswers)&&correctAnswers.includes(userAnswer)) {
            pickQuestion();
            _inputTitle.textContent = "Risposta";
        }
        else {
            _input.value = "";
            _input.placeholder = typeof correctAnswers==="string"?correctAnswers:correctAnswers[~~(Math.random() * correctAnswers.length)];
            if (typeof equation==="string") {
                // @ts-ignore
                _inputTitle.innerHTML = MathJax.tex2mml("\\text{Risposta }\\implies"+equation, {});
            }
            else {
                _inputTitle.textContent = "Risposta = "+(typeof correctAnswers==="string" ? correctAnswers : correctAnswers.join(" oppure "));
            }
        }

    }

    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;

        try {
            let {prompt:{equation,text},answer} = cat.questions[_questionIndex];

            _inputTitle.textContent = "Risposta";
            if (typeof equation==="string") {
                try {
                    /** @ts-ignore */
                    _prompt.innerHTML = MathJax.tex2mml(equation + (typeof text==="string" ? "" : " = ？"), {}) 
                     + (text ? "<p>" + text.replaceAll("<","&lt").replaceAll(">","&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
                }
                catch(e) {
                    setTimeout(updateQuestionUI,50);
                }
            }
            else if (typeof text==="string") {
                _prompt.textContent = 
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