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
_input.value = "";
_input.addEventListener("input", (e) => {
    // @ts-ignore
    let v = e.target.value;
    v = v.replaceAll(/\s/g, "");
    v = v.replaceAll(/v|V/g, "√");
    v = v.replaceAll(">=", "≥");
    v = v.replaceAll("<=", "≤");
    //v = v.replaceAll("p","π");
    // @ts-ignore
    e.target.value = v;
});
const categories = [
    {
        category: "Trigonometria",
        questions: [
            { prompt: [
                    "cos(0°)", "cos(360°)", "cos(2π)",
                    "tan(45°)", "tan(π/4)",
                    "sin(90°)", "sin(π/2)",
                ], answer: "1" },
            { prompt: [
                    "sin(0°)", "sin(360°)", "sin(2π)",
                    "tan(0°)", "tan(360°)", "tan(2π)",
                    "cos(90°)", "cos(π/2)",
                    "sin(180°)", "sin(π)",
                    "tan(180°)", "tan(π)",
                    "cos(270°)", "cos(3/2π)",
                ], answer: "0" },
            { prompt: [
                    "cos(30°)", "cos(π/6)",
                    "sin(60°)", "sin(π/3)", "sin(90°-30°)",
                    "sin(120°)", "sin(2/3π)", "sin(90°+30°)",
                ], answer: "√3/2" },
            { prompt: [
                    "sin(30°)", "sin(π/6)",
                    "cos(60°)", "cos(π/3)", "cos(90°-30°)",
                    "sin(150°)", "sin(5/6π)", "sin(180°-30°)",
                ], answer: "1/2" },
            { prompt: [
                    "tan(30°)", "tan(π/6)",
                ], answer: "√3/3" },
            { prompt: [
                    "cos(45°)", "cos(π/4)",
                    "sin(45°)", "sin(π/4)",
                    "sin(135°)", "sin(3/4π)", "sin(90°+45°)",
                ], answer: "√2/2" },
            { prompt: [
                    "tan(60°)", "tan(π/3)", "tan(90°-30°)",
                ], answer: "√3" },
            { prompt: [
                    "tan(90°)", "tan(π/2)",
                    "tan(270°)", "tan(3/2π)",
                ], answer: ["-", "ne"] },
            { prompt: [
                    "cos(120°)", "cos(2/3π)", "cos(90°+30°)",
                ], answer: "-1/2" },
            { prompt: [
                    "tan(120°)", "tan(2/3π)", "tan(90°+30°)",
                ], answer: "-√3" },
            { prompt: [
                    "tan(135°)", "tan(3/4π)", "tan(90°+45°)",
                    "cos(180°)", "cos(π)",
                    "sin(270°)", "sin(3/2π)",
                ], answer: "-1" },
            { prompt: [
                    "cos(135°)", "cos(3/4π)", "cos(90°+45°)",
                ], answer: "-√2/2" },
            { prompt: [
                    "tan(150°)", "tan(5/6π)", "tan(180°-30°)",
                ], answer: "-√3/3" },
            { prompt: [
                    "cos(150°)", "cos(5/6π)", "cos(180°-30°)",
                ], answer: "-√3/2" },
        ]
    },
    {
        category: "Identità trigonometriche (ignorare l'argomento)",
        questions: [
            { prompt: "tan", answer: "sin/cos" },
            { prompt: ["tan^-1", "cot"], answer: ["cos/sin", "1/tan"] },
            { prompt: "sec", answer: "1/cos" },
            { prompt: "cosec", answer: "1/sin" },
            { prompt: "sin^2 + cos^2", answer: "1" },
            { prompt: "1 - cos^2", answer: "sin^2" },
            { prompt: "1 - sin^2", answer: "cos^2" },
            { prompt: "sin^2", answer: "1-cos^2" },
            { prompt: "cos^2", answer: "1-sin^2" },
        ]
    },
    {
        category: "Limiti notevoli",
        questions: [
            { promptPrefix: "per x->0, Lim ",
                prompt: [
                    "sin(x)/x",
                    "ln(1+x)/x",
                    "tan(x)/x",
                    "(e^x-1)/x",
                    "arctan(x)/x",
                    "arcsin(x)/x"
                ], answer: "1" },
            { promptPrefix: "per x->0, Lim ",
                prompt: [
                    "sin(x)",
                    "ln(1+x)",
                    "tan(x)",
                    "(e^x-1)",
                    "arctan(x)",
                    "arcsin(x)"
                ], answer: "x" },
            { prompt: "per x->0+, Lim xln(x)", answer: "0" },
            { prompt: "per x->0, Lim (a^x-1)/x", answer: ["ln(a)", "log(a)"] },
            { prompt: "per x->0, Lim (1-cos(x))/x^2", answer: "1/2" },
            { prompt: [
                    "per x->infinito, Lim (1+1/x)^x",
                    "per x->infinito, Lim (1+x)^-x"
                ], answer: "e" },
            { prompt: "per x->infinito, Lim (1+a/x)^x", answer: "e^a" },
        ]
    },
    {
        category: "Serie note",
        questions: [
            { prompt: "Σq^n, diverge per q", answer: "q≥1" },
            { prompt: "Σq^n, converge per q", answer: "-1<q<1" },
            { prompt: "Σq^n, a cosa converge se -1<q<1", answer: "1/(1-q)" },
            { prompt: "Σq^n, è indeterminata per q", answer: "q≤-1" },
            { prompt: ["Σ1/n^a diverge per a", "Σ1/n(ln(n))^a diverge per a"], answer: "a≤1" },
            { prompt: ["Σ1/n^a converge per a", "Σ1/n(ln(n))^a converge per a"], answer: "a>1" },
        ]
    },
    {
        category: "Punti notevoli",
        questions: [
            { prompt: "a^2 - b^2", answer: ["(a+b)(a-b)", "(a-b)(a+b)"] },
            { prompt: "a^2 + b^2", answer: ["(a+b)^2-2ab"] },
            { prompt: "a^3 - b^3", answer: ["(a-b)(a^2+ab+b^2)", "(a^2+ab+b^2)(a-b)"] },
            { prompt: "a^3 + b^3", answer: ["(a+b)(a^2-ab+b^2)", "(a^2-ab+b^2)(a+b)"] },
        ]
    },
];
let _categoryIndex = -1, _questionIndex = -1;
function pickQuestion() {
    let categoryGuess = ~~(Math.random() * categories.length);
    while (categoryGuess === _categoryIndex && categories.length > 1) {
        categoryGuess = ~~(Math.random() * categories.length);
    }
    _categoryIndex = categoryGuess;
    _questionIndex = ~~(Math.random() * categories[_categoryIndex].questions.length);
    updateQuestionUI();
}
function answerQuestion() {
    const correctAnswer = categories[_categoryIndex].questions[_questionIndex].answer, userAnswer = _input.value.toLowerCase();
    if ((typeof correctAnswer === "string" && correctAnswer === userAnswer) || correctAnswer.includes(userAnswer)) {
        pickQuestion();
        _input.value = "";
        _inputTitle.textContent = "Risposta";
    }
    else {
        _inputTitle.textContent = "Risposta = " + (typeof correctAnswer === "string" ? correctAnswer : correctAnswer.join(" oppure "));
    }
}
function updateQuestionUI() {
    const cat = categories[_categoryIndex];
    _promptTitle.textContent = cat.category;
    let { prompt: _promptText, promptPrefix, answer } = cat.questions[_questionIndex];
    promptPrefix ||= "";
    _prompt.textContent =
        promptPrefix
            + (typeof _promptText === "string" ? _promptText : _promptText[~~(Math.random() * _promptText.length)])
            + (typeof answer === "string" ? " = ?" : " =* ?");
}
pickQuestion();
