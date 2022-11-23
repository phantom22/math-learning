window.addEventListener("load", () => {
    const _input = document.getElementById("input"), _inputTitle = document.getElementById("input-title"), _prompt = document.getElementById("prompt"), _promptTitle = document.getElementById("prompt-title");
    if (!(_input instanceof HTMLTextAreaElement))
        throw "Couldn't find textarea#input";
    if (_inputTitle === null)
        throw "Couldn't find #input-title!";
    if (_prompt === null)
        throw "Couldn't find #prompt!";
    if (_promptTitle === null)
        throw "Couldn't find #prompt-title!";
    document.body.addEventListener("keypress", (e) => {
        if (e.key === "Enter")
            answerQuestion();
    });
    _input.addEventListener("input", (e) => {
        // @ts-ignore
        let v = e.target.value;
        v = v.replaceAll(/\s/g, "");
        v = v.replaceAll(/v|V/g, "√");
        v = v.replaceAll(">=", "≥");
        v = v.replaceAll("<=", "≤");
        v = v.replaceAll("*", "^");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });
    const categories = [
        {
            category: "Trigonometria",
            questions: [
                { prompt: { equation: "\\cos 0^\\circ" }, answer: "1" },
                { prompt: { equation: "\\cos 360^\\circ" }, answer: "1" },
                { prompt: { equation: "\\cos 2 \\pi " }, answer: "1" },
                { prompt: { equation: "\\tan 45^\\circ" }, answer: "1" },
                { prompt: { equation: "\\tan {\\pi \\over 4} " }, answer: "1" },
                { prompt: { equation: "\\sin 90^\\circ" }, answer: "1" },
                { prompt: { equation: "\\sin {\\pi \\over 2} " }, answer: "1" },
                { prompt: { equation: "\\sin 0^\\circ" }, answer: "0" },
                { prompt: { equation: "\\sin 360^\\circ" }, answer: "0" },
                { prompt: { equation: "\\sin 2 \\pi " }, answer: "0" },
                { prompt: { equation: "\\tan 0^\\circ" }, answer: "0" },
                { prompt: { equation: "\\tan 360^\\circ" }, answer: "0" },
                { prompt: { equation: "\\tan 2 \\pi " }, answer: "0" },
                { prompt: { equation: "\\cos 90^\\circ" }, answer: "0" },
                { prompt: { equation: "\\cos {\\pi \\over 2} " }, answer: "0" },
                { prompt: { equation: "\\sin 180^\\circ" }, answer: "0" },
                { prompt: { equation: "\\sin \\pi " }, answer: "0" },
                { prompt: { equation: "\\tan 180^\\circ" }, answer: "0" },
                { prompt: { equation: "\\tan \\pi " }, answer: "0" },
                { prompt: { equation: "\\cos 270^\\circ" }, answer: "0" },
                { prompt: { equation: "\\cos {3 \\over 2} \\pi " }, answer: "0" },
                { prompt: { equation: "\\cos 30^\\circ" }, answer: "√3/2" },
                { prompt: { equation: "\\cos {\\pi \\over 6} " }, answer: "√3/2" },
                { prompt: { equation: "\\sin 60^\\circ" }, answer: "√3/2" },
                { prompt: { equation: "\\sin {\\pi \\over 3} " }, answer: "√3/2" },
                { prompt: { equation: "\\sin (90^\\circ - 30^\\circ)" }, answer: "√3/2" },
                { prompt: { equation: "\\sin 120^\\circ" }, answer: "√3/2" },
                { prompt: { equation: "\\sin {2 \\over 3} \\pi " }, answer: "√3/2" },
                { prompt: { equation: "\\sin (90^\\circ + 30^\\circ)" }, answer: "√3/2" },
                { prompt: { equation: "\\sin 30^\\circ" }, answer: "1/2" },
                { prompt: { equation: "\\sin {\\pi \\over 6} " }, answer: "1/2" },
                { prompt: { equation: "\\cos 60^\\circ" }, answer: "1/2" },
                { prompt: { equation: "\\cos {\\pi \\over 3} " }, answer: "1/2" },
                { prompt: { equation: "\\cos (90^\\circ - 30^\\circ)" }, answer: "1/2" },
                { prompt: { equation: "\\sin 150^\\circ" }, answer: "1/2" },
                { prompt: { equation: "\\sin {5 \\over 6} \\pi " }, answer: "1/2" },
                { prompt: { equation: "\\sin (180^\\circ - 30^\\circ)" }, answer: "1/2" },
                { prompt: { equation: "\\tan 30^\\circ" }, answer: "√3/3" },
                { prompt: { equation: "\\tan {\\pi \\over 6} " }, answer: "√3/3" },
                { prompt: { equation: "\\cos 45^\\circ" }, answer: "√2/2" },
                { prompt: { equation: "\\cos {\\pi \\over 4} " }, answer: "√2/2" },
                { prompt: { equation: "\\sin 45^\\circ" }, answer: "√2/2" },
                { prompt: { equation: "\\sin {\\pi \\over 4} " }, answer: "√2/2" },
                { prompt: { equation: "\\sin 135^\\circ" }, answer: "√2/2" },
                { prompt: { equation: "\\sin {3 \\over 4} \\pi " }, answer: "√2/2" },
                { prompt: { equation: "\\sin (90^\\circ + 45^\\circ)" }, answer: "√2/2" },
                { prompt: { equation: "\\tan 60^\\circ" }, answer: "√3" },
                { prompt: { equation: "\\tan {\\pi \\over 3} " }, answer: "√3" },
                { prompt: { equation: "\\tan (90^\\circ - 30^\\circ)" }, answer: "√3" },
                { prompt: { equation: "\\tan 90^\\circ" }, answer: ["-", "ne"] },
                { prompt: { equation: "\\tan {\\pi \\over 2} " }, answer: ["-", "ne"] },
                { prompt: { equation: "\\tan 270^\\circ" }, answer: ["-", "ne"] },
                { prompt: { equation: "\\tan {3 \\over 2} \\pi " }, answer: ["-", "ne"] },
                { prompt: { equation: "\\cos 120^\\circ" }, answer: "-1/2" },
                { prompt: { equation: "\\cos {2 \\over 3} \\pi " }, answer: "-1/2" },
                { prompt: { equation: "\\cos (90^\\circ + 30^\\circ)" }, answer: "-1/2" },
                { prompt: { equation: "\\tan 120^\\circ" }, answer: "-√3" },
                { prompt: { equation: "\\tan {2 \\over 3} \\pi " }, answer: "-√3" },
                { prompt: { equation: "\\tan (90^\\circ + 30^\\circ)" }, answer: "-√3" },
                { prompt: { equation: "\\tan 135^\\circ" }, answer: "-1" },
                { prompt: { equation: "\\tan {3 \\over 4} \\pi " }, answer: "-1" },
                { prompt: { equation: "\\tan (90^\\circ + 45^\\circ)" }, answer: "-1" },
                { prompt: { equation: "\\cos 180^\\circ" }, answer: "-1" },
                { prompt: { equation: "\\cos \\pi " }, answer: "-1" },
                { prompt: { equation: "\\sin 270^\\circ" }, answer: "-1" },
                { prompt: { equation: "\\sin {3 \\over 2} \\pi " }, answer: "-1" },
                { prompt: { equation: "\\cos 135^\\circ" }, answer: "-√2/2" },
                { prompt: { equation: "\\cos {3 \\over 4} \\pi " }, answer: "-√2/2" },
                { prompt: { equation: "\\cos (90^\\circ + 45^\\circ)" }, answer: "-√2/2" },
                { prompt: { equation: "\\tan 150^\\circ" }, answer: "-√3/3" },
                { prompt: { equation: "\\tan {5 \\over 6} \\pi " }, answer: "-√3/3" },
                { prompt: { equation: "\\tan (180^\\circ - 30^\\circ)" }, answer: "-√3/3" },
                { prompt: { equation: "\\cos 150^\\circ" }, answer: "-√3/2" },
                { prompt: { equation: "\\cos {5 \\over 6} \\pi " }, answer: "-√3/2" },
                { prompt: { equation: "\\cos (180^\\circ - 30^\\circ)" }, answer: "-√3/2" },
            ]
        },
        {
            category: "Identità trigonometriche (ignorare l'argomento)",
            questions: [
                { prompt: { equation: "\\tan x" }, answer: "sin/cos" },
                { prompt: { equation: "\\tan^{-1} x" }, answer: ["cos/sin", "1/tan"] },
                { prompt: { equation: "\\cot x" }, answer: ["cos/sin", "1/tan"] },
                { prompt: { equation: "\\sec x" }, answer: "1/cos" },
                { prompt: { equation: "\\csc x" }, answer: "1/sin" },
                { prompt: { equation: "\\sin^2 x + \\cos^2 x" }, answer: "1" },
                { prompt: { equation: "1 - \\cos^2 x" }, answer: "sin^2" },
                { prompt: { equation: "1 - \\sin^2 x" }, answer: "cos^2" },
                { prompt: { equation: "\\sin^2 x" }, answer: "1-cos^2" },
                { prompt: { equation: "\\cos^2 x" }, answer: "1-sin^2" },
            ]
        },
        {
            category: "Limiti notevoli",
            questions: [
                { prompt: { equation: "\\lim_{x \\rightarrow 0} {\\sin x \\over x}" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { \\ln (1+x) \\over x }" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { \\tan (x) \\over x }" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { e^x - 1 \\over x }" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { \\arctan x \\over x }" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { \\arcsin x \\over x }" }, answer: "1" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} \\sin x" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} \\ln (1+x)" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} \\tan x" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} e^x - 1" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} \\arctan x" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} \\arcsin x" }, answer: "x" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} { (1 + x)^k - 1 \\over x }" }, answer: "k" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0^+} x \\ln x" }, answer: "0" },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} {a^x - 1 \\over x}" }, answer: ["ln(a)", "log(a)"] },
                { prompt: { equation: "\\lim_{x \\rightarrow 0} {1 - \\cos x \\over x^2}" }, answer: "1/2" },
                { prompt: { equation: "\\lim_{x \\rightarrow \\infty} (1 + {1 \\over x})^x" }, answer: "e" },
                { prompt: { equation: "\\lim_{x \\rightarrow \\infty} (1 + x)^{-x}" }, answer: "e" },
                { prompt: { equation: "\\lim_{x \\rightarrow \\infty} (1 + {a \\over x})^x" }, answer: "e^a" },
            ]
        },
        {
            category: "Serie note",
            questions: [
                { prompt: { equation: "\\sum_{n=0}^{\\infty} q^n", text: "diverge per q" }, answer: "q≥1" },
                { prompt: { equation: "\\sum_{n=0}^{\\infty} q^n", text: "converge per q" }, answer: "-1<q<1" },
                { prompt: { equation: "\\sum_{n=0}^{\\infty} q^n", text: "se -1<q<1, a cosa converge" }, answer: "1/(1-q)" },
                { prompt: { equation: "\\sum_{n=0}^{\\infty} q^n", text: "è indeterminata per q" }, answer: "q≤-1" },
                { prompt: { equation: "\\sum_{n=1}^{\\infty} {1 \\over n^a}", text: "diverge per a" }, answer: "a≤1" },
                { prompt: { equation: "\\sum_{n=1}^{\\infty} {1 \\over n^a}", text: "converge per a" }, answer: "a>1" },
                { prompt: { equation: "\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}", text: "diverge per a" }, answer: "a≤1" },
                { prompt: { equation: "\\sum_{n=1}^{\\infty} {1 \\over n (\\ln n)^a}", text: "converge per a" }, answer: "a>1" },
            ]
        },
        {
            category: "Scomposizioni notevoli",
            questions: [
                { prompt: { equation: "a^2 - b^2" }, answer: ["(a+b)(a-b)", "(a-b)(a+b)"] },
                { prompt: { equation: "a^2 + b^2" }, answer: ["(a+b)^2-2ab"] },
                { prompt: { equation: "a^3 - b^3" }, answer: ["(a-b)(a^2+ab+b^2)", "(a^2+ab+b^2)(a-b)"] },
                { prompt: { equation: "a^3 + b^3" }, answer: ["(a+b)(a^2-ab+b^2)", "(a^2-ab+b^2)(a+b)"] },
            ]
        },
    ];
    let _categoryIndex = -1, _questionIndex = -1, _questionQueue = [], _queueLength = 8;
    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _input.value = "";
        while (categoryGuess === _categoryIndex && categories.length > 1) {
            categoryGuess = ~~(Math.random() * categories.length);
        }
        _categoryIndex = categoryGuess;
        let questionGuess, alreadyAsked = true;
        while (alreadyAsked) {
            alreadyAsked = false;
            questionGuess = ~~(Math.random() * categories[_categoryIndex].questions.length);
            for (let i = 0; i < _questionQueue.length; i++) {
                let q = _questionQueue[i];
                if (q[0] === _categoryIndex && q[1] === questionGuess) {
                    alreadyAsked = true;
                }
            }
        }
        _questionIndex = questionGuess;
        _questionQueue.push([_categoryIndex, _questionIndex]);
        if (_questionQueue.length > _queueLength)
            _questionQueue.shift();
        updateQuestionUI();
    }
    function answerQuestion() {
        const correctAnswer = categories[_categoryIndex].questions[_questionIndex].answer, userAnswer = _input.value.toLowerCase();
        if (userAnswer === "skip" || userAnswer === "s") {
            pickQuestion();
        }
        else if ((typeof correctAnswer === "string" && correctAnswer === userAnswer) || Array.isArray(correctAnswer) && correctAnswer.includes(userAnswer)) {
            pickQuestion();
            _inputTitle.textContent = "Risposta";
        }
        else {
            _inputTitle.textContent = "Risposta = " + (typeof correctAnswer === "string" ? correctAnswer : correctAnswer.join(" oppure "));
        }
    }
    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;
        try {
            let { prompt: { equation, text }, answer } = cat.questions[_questionIndex];
            _inputTitle.textContent = "Risposta";
            if (equation) {
                try {
                    /** @ts-ignore */
                    _prompt.innerHTML = MathJax.tex2mml(equation + (typeof text === "string" ? "" : " = \\unicode{0xFF1F}"), {})
                        + (text ? "<p>" + text.replaceAll("<", "&lt").replaceAll(">", "&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
                }
                catch (e) {
                    setTimeout(updateQuestionUI, 50);
                }
            }
            else if (text) {
                _prompt.textContent =
                    text
                        + (typeof answer === "string" ? " = ?" : " =* ?");
            }
            else
                throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
        catch (e) {
            throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
    }
    pickQuestion();
});
