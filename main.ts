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
            .replaceAll("*","^")
            .replaceAll("+-","±")
            .replaceAll("-+","∓");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });

    type categoryCollection = {
        [categoryIndex:number]: {
        category:string,
        questions: {
            [questionIndex:number]: {
                prompt?: {equation:string,text?:string};
                answer:{correctAnswers:string | string[],equation?:string};
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
                { prompt:{equation:"\\cos 0^\\circ"}, answer:{correctAnswers:"1"}}, 
                { prompt:{equation:"\\cos 360^\\circ"}, answer:{correctAnswers:"1"}}, 
                { prompt:{equation:"\\cos 2 \\pi "}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\tan 45^\\circ"}, answer:{correctAnswers:"1"}}, 
                { prompt:{equation:"\\tan {\\pi \\over 4} "}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\sin 90^\\circ"}, answer:{correctAnswers:"1"}}, 
                { prompt:{equation:"\\sin {\\pi \\over 2} "}, answer:{correctAnswers:"1"}},

                { prompt:{equation:"\\sin 0^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\sin 360^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\sin 2 \\pi "}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\tan 0^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\tan 360^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\tan 2 \\pi "}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\cos 90^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\cos {\\pi \\over 2} "}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\sin 180^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\sin \\pi "}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\tan 180^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\tan \\pi "}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\cos 270^\\circ"}, answer:{correctAnswers:"0"}}, 
                { prompt:{equation:"\\cos {3 \\over 2} \\pi "}, answer:{correctAnswers:"0"}},

                { prompt:{equation:"\\cos 30^\\circ"}, answer:{correctAnswers:"√3/2"}}, 
                { prompt:{equation:"\\cos {\\pi \\over 6} "}, answer:{correctAnswers:"√3/2"}},
                { prompt:{equation:"\\sin 60^\\circ"}, answer:{correctAnswers:"√3/2"}}, 
                { prompt:{equation:"\\sin {\\pi \\over 3} "}, answer:{correctAnswers:"√3/2"}}, 
                { prompt:{equation:"\\sin (90^\\circ - 30^\\circ)"}, answer:{correctAnswers:"√3/2"}},
                { prompt:{equation:"\\sin 120^\\circ"}, answer:{correctAnswers:"√3/2"}}, 
                { prompt:{equation:"\\sin {2 \\over 3} \\pi "}, answer:{correctAnswers:"√3/2"}}, 
                { prompt:{equation:"\\sin (90^\\circ + 30^\\circ)"}, answer:{correctAnswers:"√3/2"}},

                { prompt:{equation:"\\sin 30^\\circ"}, answer:{correctAnswers:"1/2"}}, 
                { prompt:{equation:"\\sin {\\pi \\over 6} "}, answer:{correctAnswers:"1/2"}},
                { prompt:{equation:"\\cos 60^\\circ"}, answer:{correctAnswers:"1/2"}}, 
                { prompt:{equation:"\\cos {\\pi \\over 3} "}, answer:{correctAnswers:"1/2"}}, 
                { prompt:{equation:"\\cos (90^\\circ - 30^\\circ)"}, answer:{correctAnswers:"1/2"}},
                { prompt:{equation:"\\sin 150^\\circ"}, answer:{correctAnswers:"1/2"}}, 
                { prompt:{equation:"\\sin {5 \\over 6} \\pi "}, answer:{correctAnswers:"1/2"}}, 
                { prompt:{equation:"\\sin (180^\\circ - 30^\\circ)"}, answer:{correctAnswers:"1/2"}},

                { prompt:{equation:"\\tan 30^\\circ"}, answer:{correctAnswers:"√3/3"}}, 
                { prompt:{equation:"\\tan {\\pi \\over 6} "}, answer:{correctAnswers:"√3/3"}},

                { prompt:{equation:"\\cos 45^\\circ"}, answer:{correctAnswers:"√2/2"}}, 
                { prompt:{equation:"\\cos {\\pi \\over 4} "}, answer:{correctAnswers:"√2/2"}},
                { prompt:{equation:"\\sin 45^\\circ"}, answer:{correctAnswers:"√2/2"}}, 
                { prompt:{equation:"\\sin {\\pi \\over 4} "}, answer:{correctAnswers:"√2/2"}},
                { prompt:{equation:"\\sin 135^\\circ"}, answer:{correctAnswers:"√2/2"}}, 
                { prompt:{equation:"\\sin {3 \\over 4} \\pi "}, answer:{correctAnswers:"√2/2"}}, 
                { prompt:{equation:"\\sin (90^\\circ + 45^\\circ)"}, answer:{correctAnswers:"√2/2"}},

                { prompt:{equation:"\\tan 60^\\circ"}, answer:{correctAnswers:"√3"}}, 
                { prompt:{equation:"\\tan {\\pi \\over 3} "}, answer:{correctAnswers:"√3"}}, 
                { prompt:{equation:"\\tan (90^\\circ - 30^\\circ)"}, answer:{correctAnswers:"√3"}},

                { prompt:{equation:"\\tan 90^\\circ"}, answer:{correctAnswers:["-","ne"]}}, 
                { prompt:{equation:"\\tan {\\pi \\over 2} "}, answer:{correctAnswers:["-","ne"]}},
                { prompt:{equation:"\\tan 270^\\circ"}, answer:{correctAnswers:["-","ne"]}}, 
                { prompt:{equation:"\\tan {3 \\over 2} \\pi "}, answer:{correctAnswers:["-","ne"]}},

                { prompt:{equation:"\\cos 120^\\circ"}, answer:{correctAnswers:"-1/2"}}, 
                { prompt:{equation:"\\cos {2 \\over 3} \\pi "}, answer:{correctAnswers:"-1/2"}}, 
                { prompt:{equation:"\\cos (90^\\circ + 30^\\circ)"}, answer:{correctAnswers:"-1/2"}},

                { prompt:{equation:"\\tan 120^\\circ"}, answer:{correctAnswers:"-√3"}}, 
                { prompt:{equation:"\\tan {2 \\over 3} \\pi "}, answer:{correctAnswers:"-√3"}}, 
                { prompt:{equation:"\\tan (90^\\circ + 30^\\circ)"}, answer:{correctAnswers:"-√3"}},

                { prompt:{equation:"\\tan 135^\\circ"}, answer:{correctAnswers:"-1"}}, 
                { prompt:{equation:"\\tan {3 \\over 4} \\pi "}, answer:{correctAnswers:"-1"}}, 
                { prompt:{equation:"\\tan (90^\\circ + 45^\\circ)"}, answer:{correctAnswers:"-1"}},
                { prompt:{equation:"\\cos 180^\\circ"}, answer:{correctAnswers:"-1"}}, 
                { prompt:{equation:"\\cos \\pi "}, answer:{correctAnswers:"-1"}},
                { prompt:{equation:"\\sin 270^\\circ"}, answer:{correctAnswers:"-1"}}, 
                { prompt:{equation:"\\sin {3 \\over 2} \\pi "}, answer:{correctAnswers:"-1"}},

                { prompt:{equation:"\\cos 135^\\circ"}, answer:{correctAnswers:"-√2/2"}}, 
                { prompt:{equation:"\\cos {3 \\over 4} \\pi "}, answer:{correctAnswers:"-√2/2"}}, 
                { prompt:{equation:"\\cos (90^\\circ + 45^\\circ)"}, answer:{correctAnswers:"-√2/2"}},

                { prompt:{equation:"\\tan 150^\\circ"}, answer:{correctAnswers:"-√3/3"}}, 
                { prompt:{equation:"\\tan {5 \\over 6} \\pi "}, answer:{correctAnswers:"-√3/3"}}, 
                { prompt:{equation:"\\tan (180^\\circ - 30^\\circ)"}, answer:{correctAnswers:"-√3/3"}},

                { prompt:{equation:"\\cos 150^\\circ"}, answer:{correctAnswers:"-√3/2"}}, 
                { prompt:{equation:"\\cos {5 \\over 6} \\pi "}, answer:{correctAnswers:"-√3/2"}}, 
                { prompt:{equation:"\\cos (180^\\circ - 30^\\circ)"}, answer:{correctAnswers:"-√3/2"}},
            ]
        },
        {
            category:"Identità trigonometriche (ignorare l'argomento)",
            questions: [
                { prompt:{equation:"\\tan x"}, answer:{correctAnswers:"sin/cos"}},
                { prompt:{equation:"\\tan^{-1} x"}, answer:{correctAnswers:["cos/sin","1/tan"]}},
                { prompt:{equation:"\\cot x"}, answer:{correctAnswers:["cos/sin","1/tan"]}},
                { prompt:{equation:"\\sec x"}, answer:{correctAnswers:"1/cos"}},
                { prompt:{equation:"\\csc x"}, answer:{correctAnswers:"1/sin"}},
                { prompt:{equation:"\\sin^2 x + \\cos^2 x"}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"1 - \\cos^2 x"},answer:{correctAnswers:"sin^2"}},
                { prompt:{equation:"1 - \\sin^2 x"},answer:{correctAnswers:"cos^2"}},
                { prompt:{equation:"\\sin^2 x"}, answer:{correctAnswers:"1-cos^2"}},
                { prompt:{equation:"\\cos^2 x"},answer:{correctAnswers:"1-sin^2"}},
                /*{ prompt:{equation:"\\sin x"}, answer:{correctAnswers:["±√1-cos^2","±√(1-cos^2)"]}},
                { prompt:{equation:"\\cos x"}, answer:{correctAnswers:["±√1-sin^2","±√(1-sin^2)"]}},*/
                { prompt:{equation:"\\cos (a \\pm b)"},answer:{correctAnswers:["cos(a)*cos(b)∓sin(a)*sin(b)","cos(a)cos(b)∓sin(a)sin(b)"]}},
                { prompt:{equation:"\\sin (a \\pm b)"},answer:{correctAnswers:["sin(a)*cos(b)±cos(a)*sin(b)","sin(a)cos(b)±cos(a)sin(b)"]}},
            ]
        },
        {
            category:"Limiti notevoli",
            questions:[
                { prompt:{equation:"\\lim_{x \\rightarrow 0} {\\sin x \\over x}"}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} { \\ln (1+x) \\over x }"}, answer:{correctAnswers:"1"}},

                { prompt:{equation:"\\lim_{x \\rightarrow 0} { \\tan (x) \\over x }"}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} { e^x - 1 \\over x }"}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} { \\arctan x \\over x }"}, answer:{correctAnswers:"1"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} { \\arcsin x \\over x }"}, answer:{correctAnswers:"1"}},

                /*{ prompt:{equation:"\\lim_{x \\rightarrow 0} \\sin x"}, answer:{correctAnswers:"x" }},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} \\ln (1+x)"},answer:{correctAnswers:"x" }},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} \\tan x"}, answer:{correctAnswers:"x" }},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} e^x - 1"}, answer:{correctAnswers:"x" }},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} \\arctan x"}, answer:{correctAnswers:"x"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} \\arcsin x"}, answer:{correctAnswers:"x"}},*/

                { prompt:{equation:"\\lim_{x \\rightarrow 0} { (1 + x)^k - 1 \\over x }"}, answer:{correctAnswers:"k" }},

                { prompt:{equation:"\\lim_{x \\rightarrow 0^+} x \\ln x"}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} {a^x - 1 \\over x}"}, answer:{correctAnswers:["ln(a)","log(a)"]}},
                { prompt:{equation:"\\lim_{x \\rightarrow 0} {1 - \\cos x \\over x^2}"}, answer:{correctAnswers:"1/2"}},

                { prompt:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {1 \\over x})^x"}, answer:{correctAnswers:"e"}},
                { prompt:{equation:"\\lim_{x \\rightarrow \\infty} (1 + x)^{-x}"}, answer:{correctAnswers:"e"}},

                { prompt:{equation:"\\lim_{x \\rightarrow \\infty} (1 + {a \\over x})^x"}, answer:{correctAnswers:"e^a"}},
            ]
        },
        {
            category:"Equivalenze asintotiche",
            questions:[
                    { prompt:{equation:"\\sin x \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
                    { prompt:{equation:"\\tan x \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
                    { prompt:{equation:"e^x - 1 \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
                    { prompt:{equation:"\\cos x - 1 \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:["-x^2/2","-(x^2/2)"]}},
                    { prompt:{equation:"\\cos x \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"1"}},
                    { prompt:{equation:"\\arctan x \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
                    { prompt:{equation:"\\arcsin x \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
                    { prompt:{equation:"\\log (1+x) \\sim \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x"}},
            ]
        },
        {
            category:"Sviluppi con o-piccolo",
            questions:[
                    { prompt:{equation:"\\sin x = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
                    { prompt:{equation:"\\tan x = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
                    { prompt:{equation:"e^x - 1 = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
                    { prompt:{equation:"\\cos x - 1 = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:["-x^2/2+o(x^2)","-(x^2/2)+o(x^2)"]}},
                    { prompt:{equation:"\\cos x = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"1+o(x)"}},
                    { prompt:{equation:"\\arctan x = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
                    { prompt:{equation:"\\arcsin x = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
                    { prompt:{equation:"\\log (1+x) = \\unicode{0xFF1F} \\text{per } x \\rightarrow 0",text:""}, answer:{correctAnswers:"x+o(x)"}},
            ]
        },
        {
            category:"Serie note",
            questions:[
                    { prompt:{equation:"\\sum_{n=0}^{\\infty} q^n",text:"diverge per q"}, answer:{correctAnswers:"q≥1"}},
                    { prompt:{equation:"\\sum_{n=0}^{\\infty} q^n",text:"converge per q"},answer:{correctAnswers:"-1<q<1"}},
                    { prompt:{equation:"\\sum_{n=0}^{\\infty} q^n",text:"se -1<q<1, a cosa converge"}, answer:{correctAnswers:"1/(1-q)"}},
                    { prompt:{equation:"\\sum_{n=0}^{\\infty} q^n",text:"è indeterminata per q"}, answer:{correctAnswers:"q≤-1"}},
                    { prompt:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",text:"diverge per a"}, answer:{correctAnswers:"a≤1"}},
                    { prompt:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n^a}",text:"converge per a"}, answer:{correctAnswers:"a>1"}},
                    { prompt:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",text:"diverge per a"}, answer:{correctAnswers:"a≤1"}},
                    { prompt:{equation:"\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}",text:"converge per a"}, answer:{correctAnswers:"a>1"}},
            ]
        },
        {
            category:"Scomposizioni notevoli",
            questions:[
                { prompt:{equation:"a^2 - b^2"}, answer:{correctAnswers:["(a+b)(a-b)","(a-b)(a+b)"]}},
                { prompt:{equation:"a^2 + b^2"}, answer:{correctAnswers:["(a+b)^2-2ab"]}},
                { prompt:{equation:"a^3 - b^3"}, answer:{correctAnswers:["(a-b)(a^2+ab+b^2)","(a^2+ab+b^2)(a-b)"]}},
                { prompt:{equation:"a^3 + b^3"}, answer:{correctAnswers:["(a+b)(a^2-ab+b^2)","(a^2-ab+b^2)(a+b)"]}},
            ]
        },
        {
            category:"Derivate delle funzioni elementari",
            questions:[
                { prompt:{equation:"{f(x) = c} \\text{, } {f'(x)}"}, answer:{correctAnswers:"0"}},
                { prompt:{equation:"{f(x) = x^a} \\text{, } {f'(x)}"}, answer:{correctAnswers:["ax^(a-1)","a*x^(a-1)"]}},
                { prompt:{equation:"{f(x) = e^x} \\text{, } {f'(x)}"}, answer:{correctAnswers:"e^x"}},
                { prompt:{equation:"{f(x) = \\log x} \\text{, } { f'(x)}"}, answer:{correctAnswers:"1/x"}},
                { prompt:{equation:"{f(x) = \\sin x} \\text{, } { f'(x)}"}, answer:{correctAnswers:["cos(x)","cos","cosx"]}},
                { prompt:{equation:"{f(x) = \\cos x} \\text{, } { f'(x)}"}, answer:{correctAnswers:["-sin(x)","-sin","-sinx"]}},
                { prompt:{equation:"{f(x) = -\\sin x} \\text{, } { f'(x)}"}, answer:{correctAnswers:["-cos(x)","-cos","-cosx"]}},
                { prompt:{equation:"{f(x) = -\\cos x} \\text{, } { f'(x)}"}, answer:{correctAnswers:["sin(x)","sin","sinx"]}},
                { prompt:{equation:"{f(x) = \\arctan x} \\text{, } { f'(x)}"}, answer:{correctAnswers:"1/(1+x^2)"}},
                { prompt:{equation:"{f(x) = \\arcsin x} \\text{, } { f'(x)}"}, answer:{correctAnswers:"1/√(1+x^2)"}},
                { prompt:{equation:"{f(x) = \\arccos x} \\text{, } { f'(x)}"}, answer:{correctAnswers:["-1/√(1+x^2)","-(1/√(1+x^2))"]}},
            ]
        },
        {
            category:"Regole di derivazione",
            questions:[
                // somma
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\pm g)'}"}, answer:{correctAnswers:"f'(x)±g'(x)",equation:"{f'(x) \\pm g'(x)}"}},
                // prodotto
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f g)'}"}, answer:{correctAnswers:["f'(x)g(x)+f(x)g'(x)","f'(x)*g(x)+f(x)*g'(x)"],equation:"f'(x)g(x)+f(x)g'(x)"}},
                // reciproco
                { prompt:{equation:"\\text{Sia } {f(x)} \\text{ una funzione, } {({1 \\over f})'}"}, answer:{correctAnswers:["-g'(x)/(g(x))^2","-g'(x)/g(x)^2","-(g'(x)/(g(x))^2)","-(g'(x)/g(x)^2)"],equation:"-{g'(x) \\over g(x)^2}"}},
                // divisione
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {({f \\over g})'}"}, answer:{correctAnswers:["(f'(x)g(x)-g'(x)f(x))/(g(x))^2","(f'(x)g(x)-g'(x)f(x))/g(x)^2"],equation:"{{f'(x)g(x)-g'(x)f(x)} \\over g(x)^2}"}},
                // composizione
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\circ g)'}"}, answer:{correctAnswers:["f'(g(x))g'(x)","f'(g(x))*g'(x)"],equation:"{f'(g(x)) \\over g'(x)}"}},
                // inversa
                { prompt:{equation:"\\text{Sia } {f(x)} \\text{ una funzione, } {(f^{-1})'}"}, answer:{correctAnswers:["1/f'(f'(x))","1/(f'(f'(x)))"],equation:"{ 1 \\over f' \\circ f'}"}},
            ]
        },
        /*{
            category:"Polinomi di Taylor",
            questions:[
                // somma
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\pm g)'}"}, answer:{correctAnswers:"f'(x)±g'(x)"}},
                // prodotto
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f g)'}"}, answer:{correctAnswers:["f'(x)g(x)+f(x)g'(x)","f'(x)*g(x)+f(x)*g'(x)"]}},
                // reciproco
                { prompt:{equation:"\\text{Sia } {f(x)} \\text{ una funzione, } {({1 \\over f})'}"}, answer:{correctAnswers:["-g'(x)/(g(x))^2","-g'(x)/g(x)^2","-(g'(x)/(g(x))^2)","-(g'(x)/g(x)^2)"]}},
                // divisione
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {({f \\over g})'}"}, answer:{correctAnswers:["(f'(x)g(x)-g'(x)f(x))/(g(x))^2","(f'(x)g(x)-g'(x)f(x))/g(x)^2"]}},
                // composizione
                { prompt:{equation:"\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\circ g)'}"}, answer:{correctAnswers:["f'(g(x))g'(x)","f'(g(x))*g'(x)"]}},
                // inversa
                { prompt:{equation:"\\text{Sia } {f(x)} \\text{ una funzione, } {(f^{-1})'}"}, answer:{correctAnswers:["1/f'(f'(x))","1/(f'(f'(x)))"]}},
            ]
        },*/
    ];



    let _categoryIndex = -1,
    _questionIndex = -1,
    _questionQueue = [],
    _queueLength = 8;


    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _input.value = "";
        _input.placeholder = "Inserire qui la risposta...";
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
            _input.placeholder = typeof correctAnswers==="string"?correctAnswers:correctAnswers[0];
            if (typeof equation==="string") {
                // @ts-ignore
                _inputTitle.innerHTML = MathJax.tex2mml("\\text{Risposta = }" + equation, {});
            }
            else {
                _inputTitle.textContent = "Risposta = " + (typeof correctAnswers==="string" ? correctAnswers : correctAnswers.join(" oppure "));
            }
        }

    }

    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;

        try {
            let {prompt:{equation,text},answer} = cat.questions[_questionIndex];

            _inputTitle.textContent = "Risposta";
            if (equation) {
                try {
                    /** @ts-ignore */
                    _prompt.innerHTML = MathJax.tex2mml(equation + (typeof text==="string" ? "" : " = \\unicode{0xFF1F}"), {}) 
                        + (text ? "<p>" + text.replaceAll("<","&lt").replaceAll(">","&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
                }
                catch(e) {
                    setTimeout(updateQuestionUI,50);
                }
            }
            else if (text) {
                _prompt.textContent = 
                        text
                        + (typeof answer==="string"?" = ?" : " =* ?");
            }
            else throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
        catch(e) {
            throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
    }

    pickQuestion();

});