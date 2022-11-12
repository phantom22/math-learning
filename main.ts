window.addEventListener("load", () => {

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
    });

    _input.addEventListener("input",(e) => {
        // @ts-ignore
        let v = e.target.value;
        v = v.replaceAll(/\s/g,"");
        v = v.replaceAll(/v|V/g,"√");
        v = v.replaceAll(">=","≥");
        v = v.replaceAll("<=","≤");
        v = v.replaceAll("*","^");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });

    type categoryCollection = {
        [categoryIndex:number]: {
        category:string,
        questions: {
            [questionIndex:number]: {
                prompt?: string;
                promptMathJax?:{equation:string,prompt:string};
                answer: string | string[];
                answerMathJax?: string;
            }
            length:number;
        }
        }
        length:number;
    };
    const categories: categoryCollection = [
        {
            category:"Trigonometria",
            questions: [
                { prompt:"cos(0°)", answer:"1"}, { prompt:"cos(360°)", answer:"1"}, { prompt:"cos(2π)", answer:"1"},
                { prompt:"tan(45°)", answer:"1"}, { prompt:"tan(π/4)", answer:"1"},
                { prompt:"sin(90°)", answer:"1"}, { prompt:"sin(π/2)", answer:"1"},

                { prompt:"sin(0°)", answer:"0"}, { prompt:"sin(360°)", answer:"0"}, { prompt:"sin(2π)", answer:"0"},
                { prompt:"tan(0°)", answer:"0"}, { prompt:"tan(360°)", answer:"0"}, { prompt:"tan(2π)", answer:"0"},
                { prompt:"cos(90°)", answer:"0"}, { prompt:"cos(π/2)", answer:"0"},
                { prompt:"sin(180°)", answer:"0"}, { prompt:"sin(π)", answer:"0"},
                { prompt:"tan(180°)", answer:"0"}, { prompt:"tan(π)", answer:"0"},
                { prompt:"cos(270°)", answer:"0"}, { prompt:"cos(3/2π)", answer:"0"},

                { prompt:"cos(30°)", answer:"√3/2"}, { prompt:"cos(π/6)", answer:"√3/2"},
                { prompt:"sin(60°)", answer:"√3/2"}, { prompt:"sin(π/3)", answer:"√3/2"}, { prompt:"sin(90°-30°)", answer:"√3/2"},
                { prompt:"sin(120°)", answer:"√3/2"}, { prompt:"sin(2/3π)", answer:"√3/2"}, { prompt:"sin(90+30°)", answer:"√3/2"},

                { prompt:"sin(30°)", answer:"1/2"}, { prompt:"sin(π/6)", answer:"1/2"},
                { prompt:"cos(60°)", answer:"1/2"}, { prompt:"cos(π/3)", answer:"1/2"}, { prompt:"cos(90°-30°)", answer:"1/2"},
                { prompt:"sin(150°)", answer:"1/2"}, { prompt:"sin(5/6π)", answer:"1/2"}, { prompt:"sin(180°-30°)", answer:"1/2"},

                { prompt:"tan(30°)", answer:"√3/3"}, { prompt:"tan(π/6)", answer:"√3/3"},

                { prompt:"cos(45°)", answer:"√2/2"}, { prompt:"cos(π/4)", answer:"√2/2"},
                { prompt:"sin(45°)", answer:"√2/2"}, { prompt:"sin(π/4)", answer:"√2/2"},
                { prompt:"sin(135°)", answer:"√2/2"}, { prompt:"sin(3/4π)", answer:"√2/2"}, { prompt:"sin(90°+45°)", answer:"√2/2"},

                { prompt:"tan(60°)", answer:"√3"}, { prompt:"tan(π/3)", answer:"√3"}, { prompt:"tan(90°-30°)", answer:"√3"},

                { prompt:"tan(90°)", answer:["-","ne"]}, { prompt:"tan(π/2)", answer:["-","ne"]},
                { prompt:"tan(270°)", answer:["-","ne"]}, { prompt:"tan(3/2π)", answer:["-","ne"]},

                { prompt:"cos(120°)", answer:"-1/2"}, { prompt:"cos(2/3π)", answer:"-1/2"}, { prompt:"cos(90°+30°)", answer:"-1/2"},

                { prompt:"tan(120°)", answer:"-√3"}, { prompt:"tan(2/3π)", answer:"-√3"}, { prompt:"tan(90°+30°)", answer:"-√3"},

                { prompt:"tan(135°)", answer:"-1"}, { prompt:"tan(3/4π)", answer:"-1"}, { prompt:"tan(90°+45°)", answer:"-1"},
                { prompt:"cos(180°)", answer:"-1"}, { prompt:"cos(π)", answer:"-1"},
                { prompt:"sin(270°)", answer:"-1"}, { prompt:"sin(3/2π)", answer:"-1"},

                { prompt:"cos(135°)", answer:"-√2/2"}, { prompt:"cos(3/4π)", answer:"-√2/2"}, { prompt:"cos(90°+45°)", answer:"-√2/2"},

                { prompt:"tan(150°)", answer:"-√3/3"}, { prompt:"tan(5/6π)", answer:"-√3/3"}, { prompt:"tan(180°-30°)", answer:"-√3/3"},

                { prompt:"cos(150°)", answer:"-√3/2"}, { prompt:"cos(5/6π)", answer:"-√3/2"}, { prompt:"cos(180°-30°)", answer:"-√3/2"},
            ]
        },
        {
            category:"Identità trigonometriche (ignorare l'argomento)",
            questions: [
                { prompt:"tan", promptMathJax:{equation:"\\tan x",prompt:"uguale a"}, answer:"sin/cos"},
                { prompt:"tan^-1", promptMathJax:{equation:"\\tan^{-1} x",prompt:"uguale a"}, answer:["cos/sin","1/tan"]},
                { prompt:"cot", promptMathJax:{equation:"\\cot x",prompt:"uguale a"}, answer:["cos/sin","1/tan"]},
                { prompt:"sec", promptMathJax:{equation:"\\sec x",prompt:"uguale a"}, answer:"1/cos"},
                { prompt:"cosec", promptMathJax:{equation:"\\csc x",prompt:"uguale a"}, answer:"1/sin"},
                { prompt:"sin^2 + cos^2", promptMathJax:{equation:"\\sin^2 x + \\cos^2 x",prompt:"uguale a"}, answer:"1"},
                { prompt:"1 - cos^2", promptMathJax:{equation:"1 - \\cos^2 x",prompt:"uguale a"},answer:"sin^2"},
                { prompt:"1 - sin^2", promptMathJax:{equation:"1 - \\sin^2 x",prompt:"uguale a"},answer:"cos^2"},
                { prompt:"sin^2", promptMathJax:{equation:"\\sin^2 x",prompt:"uguale a"}, answer:"1-cos^2"},
                { prompt:"cos^2", promptMathJax:{equation:"\\cos^2 x",prompt:"uguale a"},answer:"1-sin^2"},
            ]
        },
        {
        category:"Limiti notevoli",
            questions:[
                { prompt:"per x->0, Lim sin(x)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {\\sin x \\over x} = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },
                { prompt:"per x->0, Lim ln(1+x)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\ln (1+x) \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },

                { prompt:"per x->0, Lim tan(x)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\tan (x) \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },
                { prompt:"per x->0, Lim (e^x-1)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { e^x - 1 \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },
                { prompt:"per x->0, Lim arctan(x)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\arctan x \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },
                { prompt:"per x->0, Lim arcsin(x)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\arcsin x \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1" },

                { prompt:"per x->0, Lim sin(x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\sin x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"x" },
                { prompt:"per x->0, Lim ln(1+x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\ln (1+x) = \\unicode{0xFF1F}",prompt:"uguale a"},answer:"x" },
                { prompt:"per x->0, Lim tan(x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\tan x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"x" },
                { prompt:"per x->0, Lim (e^x-1)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} e^x - 1 = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"x" },
                { prompt:"per x->0, Lim arctan(x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\arctan x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"x" },
                { prompt:"per x->0, Lim arcsin(x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\arcsin x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"x" },

                { prompt:"per x->0, Lim (1+x)^k/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { (1 + x)^k - 1 \\over x } = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"k" },

                { prompt:"per x->0+, Lim xln(x)", promptMathJax:{equation:"\\lim_{x \\rightarrow 0^+} x \\ln x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"0"},
                { prompt:"per x->0, Lim (a^x-1)/x", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {a^x - 1 \\over x} = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:["ln(a)","log(a)"]},
                { prompt:"per x->0, Lim (1-cos(x))/x^2", promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {1 - \\cos x \\over x^2} = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"1/2"},

                { prompt:"per x->infinito, Lim (1+1/x)^x", promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {1 \\over x})^x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"e" },
                { prompt:"per x->infinito, Lim (1+x)^-x", promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + x)^{-x} = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"e" },

                { prompt:"per x->infinito, Lim (1+a/x)^x", promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {a \\over x})^x = \\unicode{0xFF1F}",prompt:"uguale a"}, answer:"e^a" },
            ]
        },
        {
        category:"Serie note",
            questions:[
                { prompt:"Σq^n, diverge per q", promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"diverge per q"}, answer:"q≥1" },
                { prompt:"Σq^n, converge per q", promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"converge per q"},answer:"-1<q<1" },
                { prompt:"Σq^n, a cosa converge se -1<q<1", promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"se -1<q<1, a cosa converge"}, answer:"1/(1-q)" },
                { prompt:"Σq^n, è indeterminata per q", promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"è indeterminata per q"}, answer:"q≤-1" },
                { prompt:"Σ1/n^a diverge per a", promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",prompt:"diverge per a"}, answer:"a≤1" },
                { prompt:"Σ1/n^a converge per a", promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",prompt:"converge per a"}, answer:"a>1" },
                { prompt:"Σ1/n(ln(n))^a diverge per a", promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",prompt:"diverge per a"}, answer:"a≤1" },
                { prompt:"Σ1/n(ln(n))^a converge per a", promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",prompt:"converge per a"}, answer:"a>1" },
            ]
        },
        {
        category:"Scomposizioni notevoli",
            questions:[
                { prompt:"a^2 - b^2", promptMathJax:{equation:"a^2-b^2",prompt:"si scompone in"}, answer:["(a+b)(a-b)","(a-b)(a+b)"] },
                { prompt:"a^2 + b^2", promptMathJax:{equation:"a^2+b^2",prompt:"si scompone in"}, answer:["(a+b)^2-2ab"] },
                { prompt:"a^3 - b^3", promptMathJax:{equation:"a^3-b^3",prompt:"si scompone in"}, answer:["(a-b)(a^2+ab+b^2)","(a^2+ab+b^2)(a-b)"] },
                { prompt:"a^3 + b^3", promptMathJax:{equation:"a^3+b^3",prompt:"si scompone in"}, answer:["(a+b)(a^2-ab+b^2)","(a^2-ab+b^2)(a+b)"] },
            ]
        },
    ];



    let _categoryIndex = -1,
    _questionIndex = -1,
    _questionQueue = [],
    _queueLength = 8;


    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _input.value = "";
        while (categoryGuess===_categoryIndex && categories.length>1) {
            categoryGuess = ~~(Math.random() * categories.length);
        }
        _categoryIndex = categoryGuess;
        let questionGuess, alreadyAsked = true;
        while (alreadyAsked) {
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
        if (_questionQueue.length>_queueLength) _questionQueue.shift();
        updateQuestionUI();
    }

    function answerQuestion() {
        const correctAnswer = categories[_categoryIndex].questions[_questionIndex].answer,
            userAnswer = _input.value.toLowerCase();
        if (userAnswer==="skip"||userAnswer==="s") {
            pickQuestion();
        }
        else if ((typeof correctAnswer==="string"&&correctAnswer===userAnswer)||Array.isArray(correctAnswer)&&correctAnswer.includes(userAnswer)) {
            pickQuestion();
            _inputTitle.textContent = "Risposta";
        }
        else {
            _inputTitle.textContent = "Risposta = " + (typeof correctAnswer==="string" ? correctAnswer : correctAnswer.join(" oppure "));
        }

    }

    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;

        let {prompt:_promptText,promptMathJax:_promptMathJax,answer} = cat.questions[_questionIndex];

        _inputTitle.textContent = "Risposta";
        if (_promptMathJax) {
            try {
                /** @ts-ignore */
                _prompt.innerHTML = MathJax.tex2mml(_promptMathJax.equation, {}) 
                    + "<p>" + _promptMathJax.prompt.replaceAll("<","&lt").replaceAll(">","&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>";
            }
            catch(e) {
                setTimeout(updateQuestionUI,100);
            }
        }
        else {
            _prompt.textContent = 
                    _promptText
                    + (typeof answer==="string"?" = ?" : " =* ?");
        }
    }

    pickQuestion();

});