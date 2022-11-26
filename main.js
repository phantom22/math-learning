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
        else if (e.key === " " && _input.placeholder !== "Inserire qui la risposta...")
            _input.value = _input.placeholder;
    });
    _input.addEventListener("input", (e) => {
        // @ts-ignore
        let v = e.target.value;
        v = v.toLowerCase()
            .replaceAll(/\s/g, "")
            .replaceAll("v", "√")
            .replaceAll(">=", "≥")
            .replaceAll("<=", "≤")
            .replaceAll("+-", "±")
            .replaceAll("-+", "∓");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });
    // https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols
    const categories = [
        {
            category: "Trigonometria",
            questions: [
                { prompt: { equation: "{\\cos 0^\\circ}" }, answer: { correctAnswers: "1", equation: "{\\cos 0^\\circ=1}" } },
                { prompt: { equation: "{\\cos 360^\\circ}" }, answer: { correctAnswers: "1", equation: "{\\cos 360^\\circ=1}" } },
                { prompt: { equation: "{\\cos 2 \\pi}" }, answer: { correctAnswers: "1", equation: "{\\cos 2 \\pi=1}" } },
                { prompt: { equation: "{\\tan 45^\\circ}" }, answer: { correctAnswers: "1", equation: "{\\tan 45^\\circ=1}" } },
                { prompt: { equation: "{\\tan \\frac{\\pi}{4}}" }, answer: { correctAnswers: "1", equation: "{\\tan \\frac{\\pi}{4}=1}" } },
                { prompt: { equation: "{\\sin 90^\\circ}" }, answer: { correctAnswers: "1", equation: "{\\sin 90^\\circ=1}" } },
                { prompt: { equation: "{\\sin \\frac{\\pi}{2}}" }, answer: { correctAnswers: "1", equation: "{\\sin \\frac{\\pi}{2}=1}" } },
                { prompt: { equation: "{\\sin 0^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\sin 0^\\circ=0}" } },
                { prompt: { equation: "{\\sin 360^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\sin 360^\\circ=0}" } },
                { prompt: { equation: "{\\sin 2 \\pi}" }, answer: { correctAnswers: "0", equation: "{\\sin 2 \\pi=0}" } },
                { prompt: { equation: "{\\tan 0^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\tan 0^\\circ=0}" } },
                { prompt: { equation: "{\\tan 360^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\tan 360^\\circ=0}" } },
                { prompt: { equation: "{\\tan 2 \\pi}" }, answer: { correctAnswers: "0", equation: "{\\tan 2 \\pi=0}" } },
                { prompt: { equation: "{\\cos 90^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\cos 90^\\circ=0}" } },
                { prompt: { equation: "{\\cos \\frac{\\pi}{2}}" }, answer: { correctAnswers: "0", equation: "{\\cos \\frac{\\pi}{2}=0}" } },
                { prompt: { equation: "{\\sin 180^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\sin 180^\\circ=0}" } },
                { prompt: { equation: "{\\sin \\pi}" }, answer: { correctAnswers: "0", equation: "{\\sin \\pi=0}" } },
                { prompt: { equation: "{\\tan 180^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\tan 180^\\circ=}" } },
                { prompt: { equation: "{\\tan \\pi}" }, answer: { correctAnswers: "0", equation: "{\\tan \\pi=}" } },
                { prompt: { equation: "{\\cos 270^\\circ}" }, answer: { correctAnswers: "0", equation: "{\\cos 270^\\circ=0}" } },
                { prompt: { equation: "{\\cos \\frac{3}{2} \\pi}" }, answer: { correctAnswers: "0", equation: "{\\cos \\frac{3}{2} \\pi=0}" } },
                { prompt: { equation: "{\\cos 30^\\circ}" }, answer: { correctAnswers: "√3/2", equation: "{\\cos 30^\\circ=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\cos \\frac{\\pi}{6}}" }, answer: { correctAnswers: "√3/2", equation: "{\\cos \\frac{\\pi}{6}=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin 60^\\circ}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin 60^\\circ=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin \\frac{\\pi}{3}}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin \\frac{\\pi}{3}=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin (90^\\circ-30^\\circ)}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin (90^\\circ-30^\\circ)=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin 120^\\circ}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin 120^\\circ=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin \\frac{2}{3} \\pi}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin \\frac{2}{3} \\pi=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin (90^\\circ+30^\\circ)}" }, answer: { correctAnswers: "√3/2", equation: "{\\sin (90^\\circ+30^\\circ)=\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\sin 30^\\circ}" }, answer: { correctAnswers: "1/2", equation: "{\\sin 30^\\circ=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\sin \\frac{\\pi}{6}}" }, answer: { correctAnswers: "1/2", equation: "{\\sin \\frac{\\pi}{6}=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\cos 60^\\circ}" }, answer: { correctAnswers: "1/2", equation: "{\\cos 60^\\circ=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\cos \\frac{\\pi}{3}}" }, answer: { correctAnswers: "1/2", equation: "{\\cos \\frac{\\pi}{3}=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\cos (90^\\circ-30^\\circ)}" }, answer: { correctAnswers: "1/2", equation: "{\\cos (90^\\circ-30^\\circ)=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\sin 150^\\circ}" }, answer: { correctAnswers: "1/2", equation: "{\\sin 150^\\circ=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\sin \\frac{5}{6} \\pi}" }, answer: { correctAnswers: "1/2", equation: "{\\sin \\frac{5}{6} \\pi=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\sin (180^\\circ-30^\\circ)}" }, answer: { correctAnswers: "1/2", equation: "{\\sin (180^\\circ-30^\\circ)=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\tan 30^\\circ}" }, answer: { correctAnswers: "√3/3", equation: "{\\tan 30^\\circ=\\frac{\\sqrt 3}{3}}" } },
                { prompt: { equation: "{\\tan \\frac{\\pi}{6}}" }, answer: { correctAnswers: "√3/3", equation: "{\\tan \\frac{\\pi}{6}=\\frac{\\sqrt 3}{3}}" } },
                { prompt: { equation: "{\\cos 45^\\circ}" }, answer: { correctAnswers: "√2/2", equation: "{\\cos 45^\\circ=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\cos \\frac{\\pi}{4}}" }, answer: { correctAnswers: "√2/2", equation: "{\\cos \\frac{\\pi}{4}=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\sin 45^\\circ}" }, answer: { correctAnswers: "√2/2", equation: "{\\sin 45^\\circ=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\sin \\frac{\\pi}{4}}" }, answer: { correctAnswers: "√2/2", equation: "{\\sin \\frac{\\pi}{4}=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\sin 135^\\circ}" }, answer: { correctAnswers: "√2/2", equation: "{\\sin 135^\\circ=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\sin \\frac{3}{4} \\pi}" }, answer: { correctAnswers: "√2/2", equation: "{\\sin \\frac{3}{4} \\pi=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\sin (90^\\circ+45^\\circ)}" }, answer: { correctAnswers: "√2/2", equation: "{\\sin (90^\\circ+45^\\circ)=\\frac{\\sqrt 2}{3}}" } },
                { prompt: { equation: "{\\tan 60^\\circ}" }, answer: { correctAnswers: "√3", equation: "{=\\sqrt 3}" } },
                { prompt: { equation: "{\\tan \\frac{\\pi}{3}}" }, answer: { correctAnswers: "√3", equation: "{=\\sqrt 3}" } },
                { prompt: { equation: "{\\tan (90^\\circ-30^\\circ)}" }, answer: { correctAnswers: "√3", equation: "{=\\sqrt 3}" } },
                { prompt: { equation: "{\\tan 90^\\circ}" }, answer: { correctAnswers: ["-", "ne"], equation: "{\\tan 90^\\circ=\\nexists}" } },
                { prompt: { equation: "{\\tan \\frac{\\pi}{2}}" }, answer: { correctAnswers: ["-", "ne"], equation: "{\\tan \\frac{\\pi}{2}=\\nexists}" } },
                { prompt: { equation: "{\\tan 270^\\circ}" }, answer: { correctAnswers: ["-", "ne"], equation: "{\\tan 270^\\circ=\\nexists}" } },
                { prompt: { equation: "{\\tan \\frac{3}{2} \\pi}" }, answer: { correctAnswers: ["-", "ne"], equation: "{\\tan \\frac{3}{2} \\pi=\\nexists}" } },
                { prompt: { equation: "{\\cos 120^\\circ}" }, answer: { correctAnswers: "-1/2", equation: "{\\cos 120^\\circ=-\\frac{1}{2}}" } },
                { prompt: { equation: "{\\cos \\frac{2}{3} \\pi}" }, answer: { correctAnswers: "-1/2", equation: "{\\cos \\frac{2}{3} \\pi=-\\frac{1}{2}}" } },
                { prompt: { equation: "{\\cos (90^\\circ+30^\\circ)}" }, answer: { correctAnswers: "-1/2", equation: "{\\cos (90^\\circ+30^\\circ)=-\\frac{1}{2}}" } },
                { prompt: { equation: "{\\tan 120^\\circ}" }, answer: { correctAnswers: "-√3", equation: "{\\tan 120^\\circ=-\\sqrt 3}" } },
                { prompt: { equation: "{\\tan \\frac{2}{3} \\pi}" }, answer: { correctAnswers: "-√3", equation: "{\\tan \\frac{2}{3} \\pi=-\\sqrt 3}" } },
                { prompt: { equation: "{\\tan (90^\\circ+30^\\circ)}" }, answer: { correctAnswers: "-√3", equation: "{\\tan (90^\\circ+30^\\circ)=-\\sqrt 3}" } },
                { prompt: { equation: "{\\tan 135^\\circ}" }, answer: { correctAnswers: "-1", equation: "{\\tan 135^\\circ=-1}" } },
                { prompt: { equation: "{\\tan \\frac{3}{4} \\pi}" }, answer: { correctAnswers: "-1", equation: "{\\tan \\frac{3}{4} \\pi=-1}" } },
                { prompt: { equation: "{\\tan (90^\\circ+45^\\circ)}" }, answer: { correctAnswers: "-1", equation: "{\\tan (90^\\circ+45^\\circ)=-1}" } },
                { prompt: { equation: "{\\cos 180^\\circ}" }, answer: { correctAnswers: "-1", equation: "{\\cos 180^\\circ=-1}" } },
                { prompt: { equation: "{\\cos \\pi}" }, answer: { correctAnswers: "-1", equation: "{\\cos \\pi=-1}" } },
                { prompt: { equation: "{\\sin 270^\\circ}" }, answer: { correctAnswers: "-1", equation: "{\\sin 270^\\circ=-1}" } },
                { prompt: { equation: "{\\sin \\frac{3}{2} \\pi}" }, answer: { correctAnswers: "-1", equation: "{\\sin \\frac{3}{2} \\pi=-1}" } },
                { prompt: { equation: "{\\cos 135^\\circ}" }, answer: { correctAnswers: "-√2/2", equation: "{\\cos 135^\\circ=-\\frac{\\sqrt 2}{2}}" } },
                { prompt: { equation: "{\\cos \\frac{3}{4} \\pi}" }, answer: { correctAnswers: "-√2/2", equation: "{\\cos \\frac{3}{4} \\pi=-\\frac{\\sqrt 2}{2}}" } },
                { prompt: { equation: "{\\cos (90^\\circ+45^\\circ)}" }, answer: { correctAnswers: "-√2/2", equation: "{\\cos (90^\\circ+45^\\circ)=-\\frac{\\sqrt 2}{2}}" } },
                { prompt: { equation: "{\\tan 150^\\circ}" }, answer: { correctAnswers: "-√3/3", equation: "{\\tan 150^\\circ=-\\frac{\\sqrt 3}{3}}" } },
                { prompt: { equation: "{\\tan \\frac{5}{6} \\pi}" }, answer: { correctAnswers: "-√3/3", equation: "{\\tan \\frac{5}{6} \\pi=-\\frac{\\sqrt 3}{3}}" } },
                { prompt: { equation: "{\\tan (180^\\circ-30^\\circ)}" }, answer: { correctAnswers: "-√3/3", equation: "{\\tan (180^\\circ-30^\\circ)=-\\frac{\\sqrt 3}{3}}" } },
                { prompt: { equation: "{\\cos 150^\\circ}" }, answer: { correctAnswers: "-√3/2", equation: "{\\cos 150^\\circ=-\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\cos \\frac{5}{6} \\pi}" }, answer: { correctAnswers: "-√3/2", equation: "{\\cos \\frac{5}{6} \\pi=-\\frac{\\sqrt 3}{2}}" } },
                { prompt: { equation: "{\\cos (180^\\circ-30^\\circ)}" }, answer: { correctAnswers: "-√3/2", equation: "{\\cos (180^\\circ-30^\\circ)=-\\frac{\\sqrt 3}{2}}" } },
            ]
        },
        {
            category: "Identità trigonometriche",
            questions: [
                { prompt: { equation: "{\\tan x}" }, answer: { correctAnswers: ["sin/cos", "sin(x)/cos(x)"], equation: "{{\\tan x}=\\frac{\\sin x}{\\cos x}}" } },
                { prompt: { equation: "{\\tan^{-1} x}" }, answer: { correctAnswers: ["cos/sin", "1/tan", "cos(x)/sin(x)", "1/tan(x)"], equation: "{{\\tan^{-1} x}=\\frac{\\cos x}{\\sin x}=\\frac{1}{\\tan x}}" } },
                { prompt: { equation: "{\\cot x}" }, answer: { correctAnswers: ["cos/sin", "1/tan", "cos(x)/sin(x)", "1/tan(x)"], equation: "{{\\tan^{-1} x}=\\frac{\\cos x}{\\sin x}=\\frac{1}{\\tan x}}" } },
                { prompt: { equation: "{\\sec x}" }, answer: { correctAnswers: ["1/cos", "1/cos(x)"], equation: "{{\\sec x}=\\frac{1}{\\cos x}}" } },
                { prompt: { equation: "{\\csc x}" }, answer: { correctAnswers: ["1/sin", "1/sin(x)"], equation: "{{\\csc x}=\\frac{1}{\\sin x}}" } },
                { prompt: { equation: "{\\sin^2 x+\\cos^2 x}" }, answer: { correctAnswers: "1", equation: "{{\\sin^2 x+\\cos^2 x}=1}" } },
                { prompt: { equation: "{1-\\cos^2 x}" }, answer: { correctAnswers: ["sin^2", "sin^2(x)"], equation: "{{1-\\cos^2 x}=\\sin^2 x}" } },
                { prompt: { equation: "{1-\\sin^2 x}" }, answer: { correctAnswers: ["cos^2", "cos^2(x)"], equation: "{{1-\\sin^2 x}=\\cos^2 x}" } },
                { prompt: { equation: "{\\sin^2 x}" }, answer: { correctAnswers: ["1-cos^2", "1-cos^2(x)"], equation: "{{\\sin^2 x}=1-\\cos^2 x}" } },
                { prompt: { equation: "{\\cos^2 x}" }, answer: { correctAnswers: ["1-sin^2", "1-sin^2(x)"], equation: "{{\\cos^2 x}=1-\\sin^2 x}" } },
                /*{ prompt:{equation:"\\sin x}"}, answer:{correctAnswers:["±√1-cos^2","±√(1-cos^2)"]}},
                { prompt:{equation:"\\cos x}"}, answer:{correctAnswers:["±√1-sin^2","±√(1-sin^2)"]}},*/
                { prompt: { equation: "{\\cos (a \\pm b)}" }, answer: { correctAnswers: ["cos(a)*cos(b)∓sin(a)*sin(b)", "cos(a)cos(b)∓sin(a)sin(b)"], equation: "{\\cos (\\alpha \\pm \\beta)=\\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta}" } },
                { prompt: { equation: "{\\sin (a \\pm b)}" }, answer: { correctAnswers: ["sin(a)*cos(b)±cos(a)*sin(b)", "sin(a)cos(b)±cos(a)sin(b)"], equation: "{\\sin(\\alpha \\pm \\beta)=\\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta}" } },
            ]
        },
        {
            category: "Limiti notevoli",
            questions: [
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{\\sin x}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{\\sin x}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{\\ln(1+x)}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{\\ln(1+x)}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{\\tan x}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{\\tan x}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{e^x-1}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{e^x-1}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{\\arctan x}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{\\arctan x}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{\\arcsin x}{x}}" }, answer: { correctAnswers: "1", equation: "{{\\lim_{x \\rightarrow 0} \\frac{\\arcsin x}{x}}=1}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{(1+x)^k-1}{x}}" }, answer: { correctAnswers: "k", equation: "{{\\lim_{x \\rightarrow 0} \\frac{(1+x)^k-1}{x}}=k, \\forall k \\in \\mathbb{R}}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0^+} x \\ln x}" }, answer: { correctAnswers: "0", equation: "{{\\lim_{x \\rightarrow 0^+} x \\ln x}=0}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{a^x-1}{x}}" }, answer: { correctAnswers: ["ln(a)", "log(a)"], equation: "{{\\lim_{x \\rightarrow 0} \\frac{a^x-1}{x}}=\\ln a}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow 0} \\frac{1-\\cos x}{x^2}}" }, answer: { correctAnswers: "1/2", equation: "{{\\lim_{x \\rightarrow 0} \\frac{1-\\cos x}{x^2}}=\\frac{1}{2}}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow \\infty} (1+\\frac{1}{x})^x}" }, answer: { correctAnswers: "e", equation: "{{\\lim_{x \\rightarrow \\infty} (1+\\frac{1}{x})^x}=e}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow \\infty} (1+x)^{-x}}" }, answer: { correctAnswers: "e", equation: "{{\\lim_{x \\rightarrow \\infty} (1+x)^{-x}}=e}" } },
                { prompt: { equation: "{\\lim_{x \\rightarrow \\infty} (1+\\frac{\\alpha}{x})^x}" }, answer: { correctAnswers: "e^a", equation: "{{\\lim_{x \\rightarrow \\infty} (1+\\frac{\\alpha}{x})^x}=e^\\alpha}" } },
            ]
        },
        {
            category: "Equivalenze asintotiche",
            questions: [
                { prompt: { equation: "{\\sin x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{{\\sin x \\sim x} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\tan x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{{\\tan x \\sim x} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{e^x-1 \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{{e^x-1 \\sim x} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{e^x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+x", equation: "{{e^x \\sim 1+x} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\cos x-1 \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: ["-x^2/2", "-(x^2/2)"], equation: "{\\cos x-1 \\sim -\\frac{x^2}{2} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\sin x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1", equation: "{\\cos x \\sim 1 \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\arctan x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{\\arctan x \\sim x \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\arcsin x \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{\\arcsin x \\sim x \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\log (1+x) \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{\\log (1+x) \\sim x \\text{, per } {x \\rightarrow 0}}" } },
            ]
        },
        {
            category: "Sviluppi con o-piccolo",
            questions: [
                { prompt: { equation: "{\\sin x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{{\\sin x = x+o(x)} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\tan x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{{\\tan x = x+o(x)} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{e^x-1 = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{{e^x-1 = x+o(x)} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{e^x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+x+o(x)", equation: "{{e^x = 1+x+o(x)} \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\cos x-1 = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: ["-x^2/2+o(x^2)", "-(x^2/2)+o(x^2)"], equation: "{\\cos x-1 = -\\frac{x^2}{2}+o(x^2) \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\cos x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+o(x)", equation: "{\\cos x = 1+o(x) \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\arctan x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{\\arctan x = x+o(x) \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\arcsin x = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{\\arcsin x = x+o(x) \\text{, per } {x \\rightarrow 0}}" } },
                { prompt: { equation: "{\\log (1+x) = ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x+o(x)", equation: "{\\log (1+x) = x+o(x) \\text{, per } {x \\rightarrow 0}}" } },
            ]
        },
        {
            category: "Serie note",
            questions: [
                { prompt: { equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ diverge per } q}" }, answer: { correctAnswers: "q≥1", equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ diverge se } {q \\ge 1}}" } },
                { prompt: { equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ converge per } q}" }, answer: { correctAnswers: "-1<q<1", equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ converge se }  {q \\in (-1,1)}}" } },
                { prompt: { equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{, se } q \\in (-1,1) \\text{, converge a}}" }, answer: { correctAnswers: "1/(1-q)", equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{, se }  {q \\in (-1,1)}} \\text{, converge a } \\frac{1}{1-q}" } },
                { prompt: { equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ è indeterminata per } q}" }, answer: { correctAnswers: "q≤-1", equation: "{\\sum_{n=0}^{+\\infty} q^n \\text{ è indeterminata se }  {q \\le -1}}" } },
                { prompt: { equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ diverge per } \\alpha}" }, answer: { correctAnswers: "a≤1", equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ diverge se } {\\alpha \\le 1}}" } },
                { prompt: { equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ converge per } \\alpha}" }, answer: { correctAnswers: "a>1", equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ converge se } {\\alpha \\gt 1}}" } },
                { prompt: { equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^\\alpha} \\text{ diverge per } \\alpha}" }, answer: { correctAnswers: "a≤1", equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^a} \\text{ diverge se } {\\alpha \\le1}}" } },
                { prompt: { equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^\\alpha} \\text{ converge per } \\alpha}" }, answer: { correctAnswers: "a>1", equation: "{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^a} \\text{ converge se } {\\alpha \\gt1}}" } },
            ]
        },
        {
            category: "Scomposizioni notevoli",
            questions: [
                { prompt: { equation: "{a^2-b^2}" }, answer: { correctAnswers: ["(a+b)(a-b)", "(a-b)(a+b)"], equation: "{a^2-b^2}={(a+b)(a-b)}" } },
                { prompt: { equation: "{a^2+b^2}" }, answer: { correctAnswers: ["(a+b)^2-2ab"], equation: "{a^2+b^2}={(a+b)^2-2ab}" } },
                { prompt: { equation: "{a^3-b^3}" }, answer: { correctAnswers: ["(a-b)(a^2+ab+b^2)", "(a^2+ab+b^2)(a-b)"], equation: "{a^3-b^3}={(a-b)(a^2+ab+b^2)}" } },
                { prompt: { equation: "{a^3+b^3}" }, answer: { correctAnswers: ["(a+b)(a^2-ab+b^2)", "(a^2-ab+b^2)(a+b)"], equation: "{a^3+b^3}={(a+b)(a^2-ab+b^2)}" } },
            ]
        },
        {
            category: "Derivate delle funzioni elementari",
            questions: [
                { prompt: { equation: "{f(x) = c} \\text{, } {f'(x)}" }, answer: { correctAnswers: "0", equation: "{(C)'=0}" } },
                { prompt: { equation: "{f(x) = x^\\alpha} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["ax^(a-1)", "a*x^(a-1)"], equation: "{(x^\\alpha)'=\\alpha x^{\\alpha-1}}" } },
                { prompt: { equation: "{f(x) = e^x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "e^x", equation: "{(e^x)'=e^x}" } },
                { prompt: { equation: "{f(x) = \\log x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/x", equation: "{(\\log x)'=\\frac{1}{x}}" } },
                { prompt: { equation: "{f(x) = \\sin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["cos(x)", "cos", "cosx"], equation: "{(\\sin x)'=\\cos x}" } },
                { prompt: { equation: "{f(x) = \\cos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-sin(x)", "-sin", "-sinx"], equation: "{(\\cos x)'=-\\sin x}" } },
                { prompt: { equation: "{f(x) = -\\sin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-cos(x)", "-cos", "-cosx"], equation: "{(-\\sin x)'=-\\cos x}" } },
                { prompt: { equation: "{f(x) = -\\cos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["sin(x)", "sin", "sinx"], equation: "{(-\\cos x)'=\\sin x}" } },
                { prompt: { equation: "{f(x) = \\arctan x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/(1+x^2)", equation: "{(\\arctan x)'=\\frac{1}{1+x^2}}" } },
                { prompt: { equation: "{f(x) = \\arcsin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/√(1+x^2)", equation: "{(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}}}" } },
                { prompt: { equation: "{f(x) = \\arccos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-1/√(1+x^2)", "-(1/√(1+x^2))"], equation: "{(\\arccos x)'=-\\frac{1}{\\sqrt{1-x^2}}}}" } },
            ]
        },
        {
            category: "Regole di derivazione",
            questions: [
                // somma
                { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\pm g)'}}" }, answer: { correctAnswers: "f'(x)±g'(x)", equation: "{(f \\pm g)'=f'(x) \\pm g'(x)}" } },
                // prodotto
                { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f g)'}}" }, answer: { correctAnswers: ["f'(x)g(x)+f(x)g'(x)", "f'(x)*g(x)+f(x)*g'(x)"],
                        equation: "{(f g)'=f'(x)g(x)+f(x)g'(x)}" } },
                // reciproco
                { prompt: { equation: "{\\text{Sia } {f(x)} \\text{ una funzione, } {(\\frac{1}{f})'}}" }, answer: { correctAnswers: ["-g'(x)/(g(x))^2", "-g'(x)/g(x)^2", "-(g'(x)/(g(x))^2)", "-(g'(x)/g(x)^2)"],
                        equation: "{(\\frac{1}{f})'=-\\frac{g'(x)}{g(x)^2}}" } },
                // divisione
                { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(\\frac{f}{g})'}}" }, answer: { correctAnswers: ["(f'(x)g(x)-g'(x)f(x))/(g(x))^2", "(f'(x)g(x)-g'(x)f(x))/g(x)^2"], equation: "{(\\frac{f}{g})'=\\frac{f'(x)g(x)-g'(x)f(x)}{g(x)^2}}" } },
                // composizione
                { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\circ g)'}}" }, answer: { correctAnswers: ["f'(g(x))g'(x)", "f'(g(x))*g'(x)"], equation: "{(f \\circ g)'=f'(g(x))g'(x)}" } },
                // inversa
                { prompt: { equation: "{\\text{Sia } {f(x)} \\text{ una funzione, } {(f^{-1})'}}" }, answer: { correctAnswers: ["1/f'(f'(x))", "1/(f'(f'(x)))"], equation: "{(f^{-1})'=\\frac{1}{f' \\circ f'}}" } },
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
    let _categoryIndex = -1, _questionIndex = -1, _questionQueue = [], 
    /* @ts-ignore */
    _queueLength = (categories.length - 1) * Math.min(categories.map(v => v.questions.length));
    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _input.value = "";
        _input.placeholder = "Inserire qui la risposta...";
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
        const { correctAnswers, equation } = categories[_categoryIndex].questions[_questionIndex].answer, userAnswer = _input.value.toLowerCase();
        if (userAnswer === "skip" || userAnswer === "s") {
            pickQuestion();
        }
        else if ((typeof correctAnswers === "string" && correctAnswers === userAnswer) || Array.isArray(correctAnswers) && correctAnswers.includes(userAnswer)) {
            pickQuestion();
            _inputTitle.textContent = "Risposta";
        }
        else {
            _input.value = "";
            _input.placeholder = typeof correctAnswers === "string" ? correctAnswers : correctAnswers[0];
            if (typeof equation === "string") {
                // @ts-ignore
                _inputTitle.innerHTML = MathJax.tex2mml("\\text{Risposta }\\Longrightarrow" + equation, {});
            }
            else {
                _inputTitle.textContent = "Risposta = " + (typeof correctAnswers === "string" ? correctAnswers : correctAnswers.join(" oppure "));
            }
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
                    _prompt.innerHTML = MathJax.tex2mml(equation + (typeof text === "string" ? "" : " = ？"), {})
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
