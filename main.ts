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
                promptMathJax?:{equation:string,prompt?:string};
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
                { promptMathJax:{equation:"\\cos 0^\\circ = \\unicode{0xFF1F}"}, answer:"1"}, 
                { promptMathJax:{equation:"\\cos 360^\\circ = \\unicode{0xFF1F}"}, answer:"1"}, 
                { promptMathJax:{equation:"\\cos 2 \\pi  = \\unicode{0xFF1F}"}, answer:"1"},
                { promptMathJax:{equation:"\\tan 45^\\circ = \\unicode{0xFF1F}"}, answer:"1"}, 
                { promptMathJax:{equation:"\\tan {\\pi \\over 4}  = \\unicode{0xFF1F}"}, answer:"1"},
                { promptMathJax:{equation:"\\sin 90^\\circ = \\unicode{0xFF1F}"}, answer:"1"}, 
                { promptMathJax:{equation:"\\sin {\\pi \\over 2}  = \\unicode{0xFF1F}"}, answer:"1"},

                { promptMathJax:{equation:"\\sin 0^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\sin 360^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\sin 2 \\pi  = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\tan 0^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\tan 360^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\tan 2 \\pi  = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\cos 90^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\cos {\\pi \\over 2}  = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\sin 180^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\sin \\pi  = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\tan 180^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\tan \\pi  = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\cos 270^\\circ = \\unicode{0xFF1F}"}, answer:"0"}, 
                { promptMathJax:{equation:"\\cos {3 \\over 2} \\pi  = \\unicode{0xFF1F}"}, answer:"0"},

                { promptMathJax:{equation:"\\cos 30^\\circ = \\unicode{0xFF1F}"}, answer:"√3/2"}, 
                { promptMathJax:{equation:"\\cos {\\pi \\over 6}  = \\unicode{0xFF1F}"}, answer:"√3/2"},
                { promptMathJax:{equation:"\\sin 60^\\circ = \\unicode{0xFF1F}"}, answer:"√3/2"}, 
                { promptMathJax:{equation:"\\sin {\\pi \\over 3}  = \\unicode{0xFF1F}"}, answer:"√3/2"}, 
                { promptMathJax:{equation:"\\sin (90^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"√3/2"},
                { promptMathJax:{equation:"\\sin 120^\\circ = \\unicode{0xFF1F}"}, answer:"√3/2"}, 
                { promptMathJax:{equation:"\\sin {2 \\over 3} \\pi  = \\unicode{0xFF1F}"}, answer:"√3/2"}, 
                { promptMathJax:{equation:"\\sin (90^\\circ + 30^\\circ) = \\unicode{0xFF1F}"}, answer:"√3/2"},

                { promptMathJax:{equation:"\\sin 30^\\circ = \\unicode{0xFF1F}"}, answer:"1/2"}, 
                { promptMathJax:{equation:"\\sin {\\pi \\over 6}  = \\unicode{0xFF1F}"}, answer:"1/2"},
                { promptMathJax:{equation:"\\cos 60^\\circ = \\unicode{0xFF1F}"}, answer:"1/2"}, 
                { promptMathJax:{equation:"\\cos {\\pi \\over 3}  = \\unicode{0xFF1F}"}, answer:"1/2"}, 
                { promptMathJax:{equation:"\\cos (90^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"1/2"},
                { promptMathJax:{equation:"\\sin 150^\\circ = \\unicode{0xFF1F}"}, answer:"1/2"}, 
                { promptMathJax:{equation:"\\sin {5 \\over 6} \\pi  = \\unicode{0xFF1F}"}, answer:"1/2"}, 
                { promptMathJax:{equation:"\\sin (180^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"1/2"},

                { promptMathJax:{equation:"\\tan 30^\\circ = \\unicode{0xFF1F}"}, answer:"√3/3"}, 
                { promptMathJax:{equation:"\\tan {\\pi \\over 6}  = \\unicode{0xFF1F}"}, answer:"√3/3"},

                { promptMathJax:{equation:"\\cos 45^\\circ = \\unicode{0xFF1F}"}, answer:"√2/2"}, 
                { promptMathJax:{equation:"\\cos {\\pi \\over 4}  = \\unicode{0xFF1F}"}, answer:"√2/2"},
                { promptMathJax:{equation:"\\sin 45^\\circ = \\unicode{0xFF1F}"}, answer:"√2/2"}, 
                { promptMathJax:{equation:"\\sin {\\pi \\over 4}  = \\unicode{0xFF1F}"}, answer:"√2/2"},
                { promptMathJax:{equation:"\\sin 135^\\circ = \\unicode{0xFF1F}"}, answer:"√2/2"}, 
                { promptMathJax:{equation:"\\sin {3 \\over 4} \\pi  = \\unicode{0xFF1F}"}, answer:"√2/2"}, 
                { promptMathJax:{equation:"\\sin (90^\\circ + 45^\\circ) = \\unicode{0xFF1F}"}, answer:"√2/2"},

                { promptMathJax:{equation:"\\tan 60^\\circ = \\unicode{0xFF1F}"}, answer:"√3"}, 
                { promptMathJax:{equation:"\\tan {\\pi \\over 3}  = \\unicode{0xFF1F}"}, answer:"√3"}, 
                { promptMathJax:{equation:"\\tan (90^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"√3"},

                { promptMathJax:{equation:"\\tan 90^\\circ = \\unicode{0xFF1F}"}, answer:["-","ne"]}, 
                { promptMathJax:{equation:"\\tan {\\pi \\over 2}  = \\unicode{0xFF1F}"}, answer:["-","ne"]},
                { promptMathJax:{equation:"\\tan 270^\\circ = \\unicode{0xFF1F}"}, answer:["-","ne"]}, 
                { promptMathJax:{equation:"\\tan {3 \\over 2} \\pi  = \\unicode{0xFF1F}"}, answer:["-","ne"]},

                { promptMathJax:{equation:"\\cos 120^\\circ = \\unicode{0xFF1F}"}, answer:"-1/2"}, 
                { promptMathJax:{equation:"\\cos {2 \\over 3} \\pi  = \\unicode{0xFF1F}"}, answer:"-1/2"}, 
                { promptMathJax:{equation:"\\cos (90^\\circ + 30^\\circ) = \\unicode{0xFF1F}"}, answer:"-1/2"},

                { promptMathJax:{equation:"\\tan 120^\\circ = \\unicode{0xFF1F}"}, answer:"-√3"}, 
                { promptMathJax:{equation:"\\tan {2 \\over 3} \\pi  = \\unicode{0xFF1F}"}, answer:"-√3"}, 
                { promptMathJax:{equation:"\\tan (90^\\circ + 30^\\circ) = \\unicode{0xFF1F}"}, answer:"-√3"},

                { promptMathJax:{equation:"\\tan 135^\\circ = \\unicode{0xFF1F}"}, answer:"-1"}, 
                { promptMathJax:{equation:"\\tan {3 \\over 4} \\pi  = \\unicode{0xFF1F}"}, answer:"-1"}, 
                { promptMathJax:{equation:"\\tan (90^\\circ + 45^\\circ) = \\unicode{0xFF1F}"}, answer:"-1"},
                { promptMathJax:{equation:"\\cos 180^\\circ = \\unicode{0xFF1F}"}, answer:"-1"}, 
                { promptMathJax:{equation:"\\cos \\pi  = \\unicode{0xFF1F}"}, answer:"-1"},
                { promptMathJax:{equation:"\\sin 270^\\circ = \\unicode{0xFF1F}"}, answer:"-1"}, 
                { promptMathJax:{equation:"\\sin {3 \\over 2} \\pi  = \\unicode{0xFF1F}"}, answer:"-1"},

                { promptMathJax:{equation:"\\cos 135^\\circ = \\unicode{0xFF1F}"}, answer:"-√2/2"}, 
                { promptMathJax:{equation:"\\cos {3 \\over 4} \\pi  = \\unicode{0xFF1F}"}, answer:"-√2/2"}, 
                { promptMathJax:{equation:"\\cos (90^\\circ + 45^\\circ) = \\unicode{0xFF1F}"}, answer:"-√2/2"},

                { promptMathJax:{equation:"\\tan 150^\\circ = \\unicode{0xFF1F}"}, answer:"-√3/3"}, 
                { promptMathJax:{equation:"\\tan {5 \\over 6} \\pi  = \\unicode{0xFF1F}"}, answer:"-√3/3"}, 
                { promptMathJax:{equation:"\\tan (180^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"-√3/3"},

                { promptMathJax:{equation:"\\cos 150^\\circ = \\unicode{0xFF1F}"}, answer:"-√3/2"}, 
                { promptMathJax:{equation:"\\cos {5 \\over 6} \\pi  = \\unicode{0xFF1F}"}, answer:"-√3/2"}, 
                { promptMathJax:{equation:"\\cos (180^\\circ - 30^\\circ) = \\unicode{0xFF1F}"}, answer:"-√3/2"},
            ]
        },
        {
            category:"Identità trigonometriche (ignorare l'argomento)",
            questions: [
                { promptMathJax:{equation:"\\tan x = \\unicode{0xFF1F}"}, answer:"sin/cos"},
                { promptMathJax:{equation:"\\tan^{-1} x = \\unicode{0xFF1F}"}, answer:["cos/sin","1/tan"]},
                { promptMathJax:{equation:"\\cot x = \\unicode{0xFF1F}"}, answer:["cos/sin","1/tan"]},
                { promptMathJax:{equation:"\\sec x = \\unicode{0xFF1F}"}, answer:"1/cos"},
                { promptMathJax:{equation:"\\csc x = \\unicode{0xFF1F}"}, answer:"1/sin"},
                { promptMathJax:{equation:"\\sin^2 x + \\cos^2 x = \\unicode{0xFF1F}"}, answer:"1"},
                { promptMathJax:{equation:"1 - \\cos^2 x = \\unicode{0xFF1F}"},answer:"sin^2"},
                { promptMathJax:{equation:"1 - \\sin^2 x = \\unicode{0xFF1F}"},answer:"cos^2"},
                { promptMathJax:{equation:"\\sin^2 x = \\unicode{0xFF1F}"}, answer:"1-cos^2"},
                { promptMathJax:{equation:"\\cos^2 x = \\unicode{0xFF1F}"},answer:"1-sin^2"},
            ]
        },
        {
        category:"Limiti notevoli",
            questions:[
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {\\sin x \\over x} = \\unicode{0xFF1F}"}, answer:"1" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\ln (1+x) \\over x } = \\unicode{0xFF1F}"}, answer:"1" },

                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\tan (x) \\over x } = \\unicode{0xFF1F}"}, answer:"1" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { e^x - 1 \\over x } = \\unicode{0xFF1F}"}, answer:"1" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\arctan x \\over x } = \\unicode{0xFF1F}"}, answer:"1" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { \\arcsin x \\over x } = \\unicode{0xFF1F}"}, answer:"1" },

                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\sin x = \\unicode{0xFF1F}"}, answer:"x" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\ln (1+x) = \\unicode{0xFF1F}"},answer:"x" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\tan x = \\unicode{0xFF1F}"}, answer:"x" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} e^x - 1 = \\unicode{0xFF1F}"}, answer:"x" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\arctan x = \\unicode{0xFF1F}"}, answer:"x" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} \\arcsin x = \\unicode{0xFF1F}"}, answer:"x" },

                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} { (1 + x)^k - 1 \\over x } = \\unicode{0xFF1F}"}, answer:"k" },

                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0^+} x \\ln x = \\unicode{0xFF1F}"}, answer:"0"},
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {a^x - 1 \\over x} = \\unicode{0xFF1F}"}, answer:["ln(a)","log(a)"]},
                { promptMathJax:{equation:"\\lim_{x \\rightarrow 0} {1 - \\cos x \\over x^2} = \\unicode{0xFF1F}"}, answer:"1/2"},

                { promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {1 \\over x})^x = \\unicode{0xFF1F}"}, answer:"e" },
                { promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + x)^{-x} = \\unicode{0xFF1F}"}, answer:"e" },

                { promptMathJax:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {a \\over x})^x = \\unicode{0xFF1F}"}, answer:"e^a" },
            ]
        },
        {
        category:"Serie note",
            questions:[
                { promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"diverge per q"}, answer:"q≥1" },
                { promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"converge per q"},answer:"-1<q<1" },
                { promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"se -1<q<1, a cosa converge"}, answer:"1/(1-q)" },
                { promptMathJax:{equation:"\\sum_{n=0}^{\\infty} q^n",prompt:"è indeterminata per q"}, answer:"q≤-1" },
                { promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",prompt:"diverge per a"}, answer:"a≤1" },
                { promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",prompt:"converge per a"}, answer:"a>1" },
                { promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",prompt:"diverge per a"}, answer:"a≤1" },
                { promptMathJax:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",prompt:"converge per a"}, answer:"a>1" },
            ]
        },
        {
        category:"Scomposizioni notevoli",
            questions:[
                { promptMathJax:{equation:"a^2 - b^2 = \\unicode{0xFF1F}"}, answer:["(a+b)(a-b)","(a-b)(a+b)"] },
                { promptMathJax:{equation:"a^2 + b^2 = \\unicode{0xFF1F}"}, answer:["(a+b)^2-2ab"] },
                { promptMathJax:{equation:"a^3 - b^3 = \\unicode{0xFF1F}"}, answer:["(a-b)(a^2+ab+b^2)","(a^2+ab+b^2)(a-b)"] },
                { promptMathJax:{equation:"a^3 + b^3 = \\unicode{0xFF1F}"}, answer:["(a+b)(a^2-ab+b^2)","(a^2-ab+b^2)(a+b)"] },
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
                    + (_promptMathJax.prompt ? "<p>" + _promptMathJax.prompt.replaceAll("<","&lt").replaceAll(">","&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
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