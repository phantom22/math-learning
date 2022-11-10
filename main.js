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
    //  #######################
    //  ## TRIGONOMETRIA 0-9 ##
    //  #######################
    label(labelName("Sia x=0°", "Sia x=360°", "Sia x=2π"), question("cos(x) = ?", "1"), question("sin(x) = ?", "0"), question("tan(x) = ?", "0")),
    label(labelName("Sia x=30°", "Sia x=π/6"), question("cos(x) = ?", "√3/2"), question("sin(x) = ?", "1/2"), question("tan(x) = ?", "√3")),
    label(question("Sia x=45°", "Sia x=π/4"), question("cos(x) = ?", "√2/2"), question("sin(x) = ?", "√2/2"), question("tan(x) = ?", "1")),
    label(labelName("Sia x=60°", "Sia x=π/3", "Sia x=90°-30°"), question("cos(x) = ?", "1/2"), question("sin(x) = ?", "√3/2"), question("tan(x) = ?", "√3")),
    label(labelName("Sia x=90°", "Sia x=π/2"), question("cos(x) = ?", "0"), question("sin(x) = ?", "1"), question("tan(x) = ?", "-")),
    label(labelName("Sia x=120°", "Sia x=2/3π", "Sia x=90°+30°"), question("cos(x) = ?", "-1/2"), question("sin(x) = ?", "√3/2"), question("tan(x) = ?", "-√3")),
    label(labelName("Sia x=135°", "Sia x=3/4π", "Sia x=90°+45°"), question("cos(x) = ?", "-√2/2"), question("sin(x) = ?", "√2/2"), question("tan(x) = ?", "-1")),
    label(labelName("Sia x=150°", "Sia x=5/6π", "Sia x=180°-30°"), question("cos(x) = ?", "-√3/2"), question("sin(x) = ?", "1/2"), question("tan(x) = ?", "-√3/3")),
    label(labelName("Sia x=180°", "Sia x=π"), question("cos(x) = ?", "-1"), question("sin(x) = ?", "0"), question("tan(x) = ?", "0")),
    label(labelName("Sia x=270°", "Sia x=3/4π"), question("cos(x) = ?", "0"), question("sin(x) = ?", "-1"), question("tan(x) = ?", "-")),
    //  ###########################
    //  ## LIMITI NOTEVOLI 10-11 ##
    //  ###########################
    label(labelName("A quanto tende il seguente limite per x->0"), question("sin(x)/x = ?", "1"), question("sin(x) = ?", "x"), question("(1-cos(x))/x^2 = ?", "1/2"), question("ln(1+x)/x = ?", "1"), question("ln(1+x) = ?", "x"), question("tan(x)/x = ?", "1"), question("tan(x) = ?", "x"), question("(a^x-1)/x = ?", "ln(a)"), question("(e^x-1)/x = ?", "1"), question("(e^x-1) = ?", "x"), question("arctan(x)/x = ?", "1"), question("arctan(x) = ?", "x"), question("arcsin(x)/x = ?", "1"), question("arcsin(x) = ?", "x"), question("(x->0+) xln(x) = ?", "0")),
    label(labelName("A quanto tende il seguente limite per x->infinito"), question("(1+1/x)^x = ?", "e"), question("(1+a/x)^x = ?", "e^a"), question("(1+x)^-x = ?", "e")),
    //  ##################################
    //  ## IDENTITA' TRIGONOMETRICHE 12 ##
    //  ##################################
    label(labelName("Identità trigonometriche"), question("tan = ?", "sin/cos"), question("tan^-1 = ?", "cos/sin"), question("sec = ?", "1/cos"), question("cosec = ?", "1/sin"), question("cot = ?", "1/tan"), question("sin^2 + cos^2 = ?", "1"), question("1 - cos^2 = ?", "sin^2"), question("1 - sin^2 = ?", "cos^2"), question("sin^2 = ?", "1-cos^2"), question("cos^2 = ?", "1-sin^2")),
    // ###################
    // ## SERIE NOTE 13 ##
    // ###################
    label(labelName("Serie note"), question("Σq^a, diverge per a = ?", "a≥1"), question("Σq^a, converge per a = ?", "-1<a<1"), question("Σq^a, a cosa converge se -1<a<1", "1/(1-q)"), question("Σq^a, è indeterminata per a = ?", "a≤-1"), question("Σ1/n^a diverge per a = ?", "a≤1"), question("Σ1/n^a converge per a = ?", "a>1"), question("Σ1/n(ln(n))^a diverge per a = ?", "a≤1"), question("Σ1/n(ln(n))^a converge per a = ?", "a>1"))
];
// after textarea is evaluated the input is nicely formatted
function question(query, answer) {
    return [query, answer];
}
function labelName(name, ...nameVariants) {
    return [name, ...nameVariants];
}
function label(names, ...questions) {
    return [names, ...questions];
}
//alert("Indicare la 'radice quadrata' con 'v'\nIndicare 'Non Esiste' con '-'")
let _c = -1, _n = -1, _q = -1;
function pickQuestion() {
    function section(v) {
        let o = -1;
        if (v <= 9)
            o = 0;
        else if (v <= 11)
            o = 1;
        else if (v === 12)
            o = 2;
        else if (v === 13)
            o = 3;
        return o;
    }
    let cat = ~~(Math.random() * categories.length), _sec = ((v) => {
        let o = -1;
        if (v <= 9)
            o = 0;
        else if (v <= 12)
            o = 1;
        else if (v === 13)
            o = 2;
        else if (v === 14)
            o = 3;
        return o;
    })(_c);
    while (section(cat) === section(_c)) {
        cat = ~~(Math.random() * categories.length);
    }
    _c = cat;
    _n = ~~(Math.random() * categories[_c][0].length);
    _q = ~~(Math.random() * categories[_c].length - 1) + 1;
    updateQuestionUI();
}
function answerQuestion() {
    const correctAnswer = categories[_c][_q][1], userAnswer = _input.value;
    console.log({ userAnswer, correctAnswer });
    if (correctAnswer === userAnswer) {
        pickQuestion();
        _input.value = "";
        _inputTitle.textContent = "Risposta";
    }
    else {
        _inputTitle.textContent = "Risposta = " + correctAnswer;
    }
}
function updateQuestionUI() {
    const cat = categories[_c];
    _promptTitle.textContent = cat[0][_n];
    _prompt.textContent = cat[_q][0];
}
pickQuestion();
