const input = document.getElementById("input");
if (!(input instanceof HTMLTextAreaElement))
    throw "Couldn't find textarea#input";
input.value = "";
input.addEventListener("input", (e) => {
    // @ts-ignore
    let v = e.target.value;
    v = v.replaceAll(/\s/g, "");
    v = v.replaceAll(/v|V/g, "√");
    //v = v.replaceAll("p","π");
    // @ts-ignore
    e.target.value = v;
});
const categories = [
    //  ###################
    //  ## TRIGONOMETRIA ##
    //  ###################
    label(labelName("Sia x=0°", "Sia x=360°", "Sia x=2π"), question("cos(x) = ?", "1"), question("sin(x) = ?", "0"), question("tan(x) = ?", "0")),
    label(labelName("Sia x=30°", "Sia x=π/6"), question("cos(x) = ?", "√3/2"), question("sin(x) = ?", "1/2"), question("tan(x) = ?", "√3")),
    label(question("Sia x=45°", "Sia x=π/4"), question("cos(x) = ?", "√2/2"), question("sin(x) = ?", "√2/2"), question("tan(x) = ?", "1")),
    label(labelName("Sia x=60°", "Sia x=π/3", "Sia x=90°-30°"), question("cos(x) = ?", "1/2"), question("sin(x) = ?", "√3/2"), question("tan(x) = ?", "√3")),
    label(labelName("Sia x=90°", "Sia x=π/2"), question("cos(x) = ?", "0"), question("sin(x) = ?", "1"), question("tan(x) = ?", "-")),
    label(labelName("Sia x=120°", "Sia x=2/3π", "Sia x=90°+30°"), question("cos(x) = ?", "-1/2"), question("sin(x) = ?", "√3/2"), question("tan(x) = ?", "-√3")),
    label(labelName("Sia x=135°", "Sia x=3/4π", "Sia x=90°+45°"), question("cos(x) = ?", "-√2/2"), question("sin(x) = ?", "√2/2"), question("tan(x) = ?", "-1")),
    label(labelName("Sia x=150°", "Sia x=5/6π", "Sia x=180°-30°"), question("cos(x) = ?", "-√3/2"), question("sin(x) = ?", "1/2"), question("tan(x) = ?", "-√3/3")),
    label(labelName("Sia x=180°", "Sia x=π"), question("cos(x) = ?", "-1"), question("sin(x) = ?", "0"), question("tan(x) = ?", "0")),
    label(labelName("Sia x=270°", "Sia x=3π"), question("cos(x) = ?", "0"), question("sin(x) = ?", "-1"), question("tan(x) = ?", "-")),
    //  #####################
    //  ## LIMITI NOTEVOLI ##
    //  #####################
    label(labelName("A quanto tende il seguente limite per x->0"), question("sin(x)/x = ?", "1"), question("(1-cos(x))/x^2 = ?", "1/2"), question("ln(1+x)/x = ?", "1"), question("tan(x)/x = ?", "1"), question("(a^x-1)/x = ?", "ln(a)"), question("(e^x-1)/x = ?", "1"), question("arctan(x)/x = ?", "1"), question("arcsin(x)/x = ?", "1")),
    label(labelName("A quanto tende il seguente limite per x->infinito"), question("(1+1/x)^x = ?", "e"), question("(1+a/x)^x = ?", "e^a"), question("(1+x)^-x = ?", "e")),
    label(labelName("A quanto tende il seguente limite per x->0+"), question("xln(x) = ?", "0")),
    //  ###############################
    //  ## IDENTITA' TRIGONOMETRICHE ##
    //  ###############################
    label(labelName("Identità trigonometriche; omettere l'argomento delle funzioni"), question("tan = ?", "sin/cos"), question("tan^-1 = ?", "sin/cos"), question("sec = ?", "1/cos"), question("cosec = ?", "1/sin"), question("cot = ?", "1/tan"), question("sin^2 + cos^2 = ?", "1"), question("1 - cos^2 = ?", "sin^2"), question("1 - sin^2 = ?", "cos^2"), question("sin^2 = ?", "1-cos^2"), question("cos^2 = ?", "1-sin^2"))
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
