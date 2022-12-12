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
            { prompt: { equation: "{\\ln (1+x) \\sim ？ \\text{per } {x \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "x", equation: "{\\ln (1+x) \\sim x \\text{, per } {x \\rightarrow 0}}" } },
        ]
    },
    {
        category: "Proprietà degli o-piccolo",
        questions: [
            { prompt: { equation: "{o(f(x))}" }, answer: { correctAnswers: "f(x)o(1)", equation: "{o(f(x)) = f(x)o(1)}" } },
            { prompt: { equation: "{o(o(f(x)))}" }, answer: { correctAnswers: "o(f(x))", equation: "{o(o(f(x))) = o(f(x))}" } },
            { prompt: { equation: "{f(x) \\text{ } o(g(x))}" }, answer: { correctAnswers: ["o(f(x)g(x))", "o(f(x)*g(x))"], equation: "{f(x) \\text{ } o(g(x)) = o(f(x) \\text{ } g(x))}" } },
            { prompt: { equation: "{\\alpha \\text{ } o(f(x))}" }, answer: { correctAnswers: "o(f(x))", equation: "{\\alpha \\text{ } o(f(x)) = o(f(x)) \\text{, } \\forall \\alpha \\ne 0}" } },
            { prompt: { equation: "{o(\\alpha \\text{ } f(x))}" }, answer: { correctAnswers: "o(f(x))", equation: "{o(\\alpha \\text{ } f(x)) = o(f(x)) \\text{, } \\forall \\alpha \\ne 0}" } },
            { prompt: { equation: "{[o(f(x))]^{\\alpha}}" }, answer: { correctAnswers: ["o([f(x)]^a)", "o(f(x)^a)"], equation: "{[o(f(x))]^{\\alpha} = o([f(x)]^{\\alpha}) \\text{, } \\forall \\alpha \\gt 0}" } },
            { prompt: { equation: "{o(f(x)+o(f(x)))}" }, answer: { correctAnswers: "o(f(x))", equation: "{o(f(x)+o(f(x))) = o(f(x))}" } },
            { prompt: { equation: "{o(f(x)) \\text{ } o(g(x))}" }, answer: { correctAnswers: ["o(f(x)g(x))", "o(f(x)*g(x))"], equation: "{o(f(x)) \\text{ } o(g(x)) = o(f(x) \\text{ } g(x))}" } },
        ]
    },
    {
        category: "Sviluppi di Taylor, centrati in 0",
        questions: [
            // seno
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{{\\sin t = t+o(t)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "t-t^3/3!+o(t^3)",
                        "t-t^3/6+o(t^3)"
                    ], equation: "{{\\sin t = t-\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di quinto grado di } \\sin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "t-t^3/3!+t^5/5!+o(t^5)",
                        "t-t^3/6+t^5/120+o(t^5)"
                    ], equation: "{{\\sin t = t-\\frac{t^3}{3!}+\\frac{t^5}{5!}+o(t^5)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di settimo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "t-t^3/3!+t^5/5!-t^7/7!+o(t^7)",
                        "t-t^3/6+t^5/120-t^7/5040+o(t^7)"
                    ], equation: "{{\\sin t = t-\\frac{t^3}{3!}+\\frac{t^5}{5!}-\\frac{t^7}{7!}+o(t^7)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\sin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "((-1)^k*t^(2k+1)/(2k+1)!)+o(t^(2k+1))",
                        "(-1)^k*t^(2k+1)/(2k+1)!+o(t^(2k+1))"
                    ], equation: "{{\\sin t = \\text{...} + \\frac{(-1)^k t^{2k+1}}{(2k+1)!} + o(t^{2k+1})} \\text{, per } {t \\rightarrow 0}}" } },
            // tangente
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } \\tan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{{\\tan t = t+o(t)} \\text{, per } {t \\rightarrow 0}}" } },
            // esponenziale
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{{e^t-1 = t+o(t)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "t+t^2/2+o(t^2)",
                        "t+t^2/2!+o(t^2)"
                    ], equation: "{{e^t-1 = t+\\frac{t^2}{2!}+o(t^2)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "t+t^2/2+t^3/6+o(t^3)",
                        "t+t^2/2!+t^3/3!+o(t^3)"
                    ], equation: "{{e^t-1 = t+\\frac{t^2}{2!}+\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di grado nullo di } e^t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+o(t)",
                    equation: "{{e^t = 1+o(t)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } e^t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+t+o(t)",
                    equation: "{{e^t = 1+t+o(t)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } e^t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1+t+t^2/2+o(t^2)",
                        "1+t+t^2/2!+o(t^2)"
                    ], equation: "{{e^t = 1+t+\\frac{t^2}{2!}+o(t^2)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } e^t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1+t+t^2/2+t^3/6+o(t^3)",
                        "1+t+t^2/2!+t^3/3!+o(t^3)"
                    ], equation: "{{e^t = 1+t+\\frac{t^2}{2!}+\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } e^t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t^k/k!+o(t^k)",
                    equation: "{{e^t = \\text{...} + \\frac{t^k}{k!} + o(t^k)} \\text{, per } {t \\rightarrow 0}}" } },
            // coseno
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "-t^2/2+o(t^2)",
                        "-t^2/2!+o(t^2)"
                    ], equation: "{\\cos t-1 = -\\frac{t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di quarto grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "-t^2/2+t^4/24+o(t^4)",
                        "-t^2/2!+t^4/4!+o(t^4)"
                    ], equation: "{\\cos t-1 = -\\frac{t^2}{2!}+\\frac{t^4}{4!}+o(t^4) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di sesto grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "-t^2/2+t^4/24-t^6/720+o(t^6)",
                        "-t^2/2!+t^4/4!-t^6/6!+o(t^6)"
                    ], equation: "{\\cos t-1 = -\\frac{t^2}{2!}+\\frac{t^4}{4!}-\\frac{t^6}{6!}+o(t^6) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\cos t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1-t^2/2+o(t^2)",
                        "1-t^2/2!+o(t^2)"
                    ], equation: "{\\cos t = 1-\\frac{t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di quarto grado di } \\cos t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1-t^2/2+t^4/24+o(t^4)",
                        "1-t^2/2!+t^4/4!+o(t^4)"
                    ], equation: "{\\cos t = 1-\\frac{t^2}{2!}+\\frac{t^4}{4!}+o(t^4) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di sesto grado di } \\cos t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1-t^2/2+t^4/24-t^6/720+o(t^6)",
                        "1-t^2/2!+t^4/4!-t^6/6!+o(t^6)"
                    ], equation: "{\\cos t = 1-\\frac{t^2}{2!}+\\frac{t^4}{4!}-\\frac{t^6}{6!}+o(t^6) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\cos t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "(-1)^k*t^(2k)/(2k)!+o(t^(2k))",
                        "((-1)^k*t^(2k))/(2k)!+o(t^(2k))"
                    ], equation: "{{\\cos t = \\text{...} + \\frac{(-1)^k t^{2k}}{2k!} + o(t^{2k})} \\text{, per } {t \\rightarrow 0}}" } },
            // arcotangente
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{\\arctan t = t+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1-t^3/3+o(t^3)",
                    equation: "{\\arctan t = 1-\\frac{t^3}{3}+o(t^3) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di quinto grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1-t^3/3+t^5/5+o(t^5)",
                    equation: "{\\arctan t = 1-\\frac{t^3}{3}+\\frac{t^5}{5}+o(t^5) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di settimo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1-t^3/3+t^5/5-t^7/7+o(t^7)",
                    equation: "{\\arctan t = 1-\\frac{t^3}{3}+\\frac{t^5}{5}-\\frac{t^7}{7}+o(t^7) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\arctan t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "(-1)^k*t^(2k+1)/(2k+1)+o(t^(2k+1))",
                        "((-1)^k*t^(2k+1))/(2k+1)+o(t^(2k+1))"
                    ], equation: "{{\\arctan t = \\text{...} + \\frac{(-1)^k t^{2k+1}}{2k+1} + o(t^{2k+1})} \\text{, per } {t \\rightarrow 0}}" } },
            // arcoseno
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } \\arcsin t \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{\\arcsin t = t+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            // logaritmo
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t+o(t)",
                    equation: "{\\ln (1+t) = t+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t-t^2/2+o(t^2)",
                    equation: "{\\ln (1+t) = t-\\frac{t^2}{2}+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t-t^2/2+t^3/3+o(t^3)",
                    equation: "{\\ln (1+t) = t-\\frac{t^2}{2}+\\frac{t^3}{3}+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo quarto di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "t-t^2/2+t^3/3-t^4/4+o(t^4)",
                    equation: "{\\ln (1+t) = t-\\frac{t^2}{2}+\\frac{t^3}{3}-\\frac{t^4}{4}+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "(-1)^(k+1)*t^k/k+o(t^k)",
                        "((-1)^(k+1)*t^k)/k+o(t^k)"
                    ], equation: "{{\\ln (1+t) = \\text{...} + \\frac{(-1)^{k+1} t^k}{k} + o(t^k)} \\text{, per } {t \\rightarrow 0}}" } },
            // esponenziale
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di primo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: "1+at+o(t)",
                    equation: "{(a+t)^{\\alpha} = 1+\\alpha t+o(t) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di secondo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1+at+a(a-1)t^2/2+o(t^2)",
                        "1+at+(a(a-1)t^2)/2+o(t^2)",
                        "1+at+a(a-1)t^2/2!+o(t^2)",
                        "1+at+(a(a-1)t^2)/2!+o(t^2)",
                    ], equation: "{(a+t)^{\\alpha} = 1+\\alpha t+\\frac{\\alpha (\\alpha -1)t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il polinomio di Taylor di terzo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "1+at+a(a-1)t^2/2+a(a-1)(a-2)t^3/6+o(t^3)",
                        "1+at+(a(a-1)t^2)/2+(a(a-1)(a-2)t^3)/6+o(t^3)",
                        "1+at+a(a-1)t^2/2!+a(a-1)(a-2)t^3/3!+o(t^3)",
                        "1+at+(a(a-1)t^2)/2!+(a(a-1)(a-2)t^3)/3!+o(t^3)",
                    ], equation: "{(a+t)^{\\alpha} = 1+\\alpha t+\\frac{\\alpha (\\alpha -1)t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}" } },
            { prompt: { equation: "{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}", text: "" }, answer: { correctAnswers: [
                        "a(a-1)(a-2)...(a-k+1)t^k/k!+o(t^k)",
                        "a(a-1)(a-2)..(a-k+1)t^k/k!+o(t^k)",
                        "a(a-1)(a-2).(a-k+1)t^k/k!+o(t^k)",
                        "(a(a-1)(a-2)...(a-k+1)t^k)/k!+o(t^k)",
                        "(a(a-1)(a-2)..(a-k+1)t^k)/k!+o(t^k)",
                        "(a(a-1)(a-2).(a-k+1)t^k)/k!+o(t^k)",
                    ], equation: "{(a+t)^{\\alpha} = \\text{...} +\\frac{\\alpha (\\alpha-1)(\\alpha-2)...(\\alpha-k+1)t^k}{k!}+o(t^k) \\text{ } \\forall \\alpha \\in \\mathbb{R} \\text{, per } {t \\rightarrow 0}}" } },
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
            { prompt: { equation: "{f(x) = \\ln x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/x", equation: "{(\\ln x)'=\\frac{1}{x}}" } },
            { prompt: { equation: "{f(x) = \\sin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["cos(x)", "cos", "cosx"], equation: "{(\\sin x)'=\\cos x}" } },
            { prompt: { equation: "{f(x) = \\cos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-sin(x)", "-sin", "-sinx"], equation: "{(\\cos x)'=-\\sin x}" } },
            { prompt: { equation: "{f(x) = -\\sin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-cos(x)", "-cos", "-cosx"], equation: "{(-\\sin x)'=-\\cos x}" } },
            { prompt: { equation: "{f(x) = -\\cos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["sin(x)", "sin", "sinx"], equation: "{(-\\cos x)'=\\sin x}" } },
            { prompt: { equation: "{f(x) = \\arctan x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/(1+x^2)", equation: "{(\\arctan x)'=\\frac{1}{1+x^2}}" } },
            { prompt: { equation: "{f(x) = \\arcsin x} \\text{, } {f'(x)}" }, answer: { correctAnswers: "1/√(1+x^2)", equation: "{(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}}}" } },
            { prompt: { equation: "{f(x) = \\arccos x} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["-1/√(1+x^2)", "-(1/√(1+x^2))"], equation: "{(\\arccos x)'=-\\frac{1}{\\sqrt{1-x^2}}}" } },
            { prompt: { equation: "{f(x) = |x|} \\text{, } {f'(x)}" }, answer: { correctAnswers: ["|x|/x", "x/|x|"], equation: "{(|x|)'=\\frac{|x|}{x}=\\frac{x}{|x|}}" } },
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
            { prompt: { equation: "{\\text{Sia } {f(x)} \\text{ una funzione, } {(\\frac{1}{f})'}}" }, answer: { correctAnswers: ["-f'(x)/(f(x))^2", "-f'(x)/f(x)^2", "-(f'(x)/(f(x))^2)", "-(f'(x)/f(x)^2)"],
                    equation: "{(\\frac{1}{f})'=-\\frac{f'(x)}{f(x)^2}}" } },
            // divisione
            { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(\\frac{f}{g})'}}" }, answer: { correctAnswers: ["(f'(x)g(x)-g'(x)f(x))/(g(x))^2", "(f'(x)g(x)-g'(x)f(x))/g(x)^2"], equation: "{(\\frac{f}{g})'=\\frac{f'(x)g(x)-g'(x)f(x)}{g(x)^2}}" } },
            // composizione
            { prompt: { equation: "{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\circ g)'}}" }, answer: { correctAnswers: ["f'(g(x))g'(x)", "f'(g(x))*g'(x)"], equation: "{(f \\circ g)'=f'(g(x))g'(x)}" } },
            // inversa
            { prompt: { equation: "{\\text{Sia } {f(x)} \\text{ una funzione, } {(f^{-1})'}}" }, answer: { correctAnswers: ["1/f'(f^(-1)(x))", "1/(f'(f^(-1)(x)))", "1/f'∘f^(-1)", "1/(f'∘f^(-1))"], equation: "{(f^{-1})'=\\frac{1}{f' \\circ f^{-1}} \\text{ oppure } (f^{-1}(x))'=\\frac{1}{f'(f^{-1}(x))}}" } },
        ]
    }
];
window.addEventListener("load", () => {
    const debug = /(&|\?)debug=true/.test(window.location.href), dictionary = /(&|\?)dictionary=true/.test(window.location.href);
    function catLog(category, text) {
        return `[Category='${category}'] ${text}`;
    }
    function catQuestionLog(category, questionIndex, text) {
        return `[Category='${category}'${typeof questionIndex === "number" ? `,QuestionIndex=${questionIndex}` : ""}] ${text}`;
    }
    function hasBadBrackets(equation = "") {
        let lb = 0, rb = 0;
        for (let t = 0; t < equation.length; t++) {
            if (equation[t] === '{')
                lb++;
            else if (equation[t] === '}')
                rb++;
        }
        let o;
        if (lb === rb)
            o = -1;
        else if (lb > rb)
            o = 0;
        else
            o = 1;
        return [o, lb, rb];
    }
    // Simple debug info, to prevent strange errors
    if (debug) {
        console.group("Data debug");
        if (typeof categories === "undefined")
            throw `No categories provided, hence no questions to display!`;
        for (let i = 0; i < categories.length; i++) {
            const categoryContainer = categories[i], name = categoryContainer.category, questions = categoryContainer.questions;
            console.group(name);
            if (questions.length === 0)
                console.warn(catLog(name, "Empty category!"));
            for (let k = i - 1; k > 0; k--) {
                if (name === categories[k].category) {
                    console.warn(catLog(name, "Duplicate category name!"));
                    break;
                }
            }
            ;
            for (let j = 0; j < categories[i].questions.length; j++) {
                const { prompt, answer } = questions[j];
                if (typeof prompt.equation === "undefined" && typeof prompt.text === "undefined")
                    console.error(catQuestionLog(name, j, "No prompt to display for this question!"));
                else if (typeof answer.equation === "undefined")
                    console.error(catQuestionLog(name, j, "No answer to display for this question!"));
                else if (typeof answer.correctAnswers === "undefined" || Array.isArray(answer.correctAnswers) && answer.correctAnswers.length === 0)
                    console.error(catQuestionLog(name, j, "No correct answers are provided for this question!"));
                else if (typeof answer.correctAnswers === "string" && answer.correctAnswers === "")
                    console.error(catQuestionLog(name, j, "The only correct answer, provided for this question, is empty!"));
                const [pBadBrackets, plb, prb] = hasBadBrackets(prompt.equation), [aBadBrackets, alb, arb] = hasBadBrackets(answer.equation);
                if (pBadBrackets !== -1)
                    console.error(catQuestionLog(name, j, `The equation provided for the prompt has ${plb} left-curly-brackets and ${prb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${prompt.equation}`));
                if (aBadBrackets !== -1)
                    console.error(catQuestionLog(name, j, `The equation provided for the answer has ${alb} left-curly-brackets and ${arb} right-curly-brackets, MathJax won't be able to render this text properly!\n    ${answer.equation}`));
            }
            console.groupEnd();
        }
        console.groupEnd();
    }
    const _answerInput = document.getElementById("answer-input"), _promptText = document.getElementById("prompt-text"), _answerContainer = document.getElementById("answer-container"), _answerTitle = document.getElementById("answer-title"), _promptTitle = document.getElementById("prompt-title");
    if (!(_answerInput instanceof HTMLTextAreaElement))
        throw "Couldn't find textarea#answer-input";
    if (_promptText === null)
        throw "Couldn't find #prompt-text!";
    if (_answerTitle === null)
        throw "Couldn't find #answer-title!";
    if (_promptTitle === null)
        throw "Couldn't find #prompt-title!";
    if (_answerContainer === null)
        throw "Couldn't find #answer-container!";
    if (dictionary) {
        _answerInput.style.display = "hidden";
    }
    document.body.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !dictionary)
            answerQuestion();
        else if (e.key === "Enter")
            pickQuestion();
        else if (e.key === " " && _answerInput.placeholder !== "Inserire qui la risposta...")
            _answerInput.value = _answerInput.placeholder;
    });
    _answerInput.addEventListener("input", (e) => {
        // @ts-ignore
        let v = e.target.value;
        v = v.toLowerCase()
            .replaceAll(/\s/g, "")
            .replaceAll("v", "√")
            .replaceAll(">=", "≥")
            .replaceAll("<=", "≤")
            .replaceAll("+-", "±")
            .replaceAll("-+", "∓")
            .replaceAll("composto", "∘");
        //v = v.replaceAll("p","π");
        // @ts-ignore
        e.target.value = v;
    });
    let _categoryIndex = -1, _questionIndex = -1, _questionQueue = [], _queueLength = /*(categories.length-1)*/ 2 * Math.min(categories.map(v => v.questions.length)), _totalQuestionCount = categories.map(v => v.questions.length).reduce((a, b) => a + b);
    function chooseQuestion(category, questionIndex) {
        if (!dictionary)
            return;
        _categoryIndex = category;
        _questionIndex = questionIndex;
        updateQuestionUI();
        displayAnswer();
    }
    function pickQuestion() {
        let categoryGuess = ~~(Math.random() * categories.length);
        _answerInput.value = "";
        _answerInput.placeholder = "Inserire qui la risposta...";
        while (categoryGuess === _categoryIndex && categories.length > 1) {
            categoryGuess = ~~(Math.random() * categories.length);
        }
        _categoryIndex = categoryGuess;
        let questionGuess, alreadyAsked = true, iterationCounter = 0;
        while (alreadyAsked && iterationCounter < _totalQuestionCount) {
            iterationCounter++;
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
        if (iterationCounter === _totalQuestionCount)
            _questionQueue = [];
        else if (_questionQueue.length > _queueLength)
            _questionQueue.shift();
        updateQuestionUI();
        if (dictionary)
            displayAnswer();
    }
    function answerQuestion() {
        const { correctAnswers, equation } = categories[_categoryIndex].questions[_questionIndex].answer, userAnswer = _answerInput.value.toLowerCase();
        if (userAnswer === "skip" || userAnswer === "s") {
            pickQuestion();
        }
        else if ((typeof correctAnswers === "string" && correctAnswers === userAnswer) || Array.isArray(correctAnswers) && correctAnswers.includes(userAnswer)) {
            pickQuestion();
            _answerTitle.textContent = "Risposta";
        }
        else
            displayAnswer();
    }
    function displayAnswer() {
        const { correctAnswers, equation } = categories[_categoryIndex].questions[_questionIndex].answer;
        _answerInput.value = "";
        _answerInput.placeholder = typeof correctAnswers === "string" ? correctAnswers : correctAnswers[~~(Math.random() * correctAnswers.length)];
        const _target = dictionary ? _answerContainer : _answerTitle;
        if (typeof equation === "string") {
            // @ts-ignore
            _target.innerHTML = MathJax.tex2mml((!dictionary ? "\\text{Risposta }\\implies" : "") + equation, {});
        }
        else {
            _target.textContent = "Risposta = " + (typeof correctAnswers === "string" ? correctAnswers : correctAnswers.join(" oppure "));
        }
    }
    function updateQuestionUI() {
        const cat = categories[_categoryIndex];
        _promptTitle.textContent = cat.category;
        try {
            let { prompt: { equation, text }, answer } = cat.questions[_questionIndex];
            _answerTitle.textContent = "Risposta";
            if (typeof equation === "string") {
                try {
                    /** @ts-ignore */
                    _promptText.innerHTML = MathJax.tex2mml(equation + (typeof text === "string" ? "" : " = ？"), {})
                        + (text ? "<p>" + text.replaceAll("<", "&lt").replaceAll(">", "&gt") + (typeof answer === "string" ? " = ?" : " =* ?") + "</p>" : "");
                }
                catch (e) {
                    setTimeout(updateQuestionUI, 50);
                }
            }
            else if (typeof text === "string") {
                _promptText.textContent =
                    text
                        + (typeof answer === "string" ? " = ?" : " =* ?");
            }
            else
                throw "";
        }
        catch (e) {
            throw `[Category='${categories[_categoryIndex].category}',Question=${_questionIndex}] No question text/equation provided, nothing to show!`;
        }
    }
    pickQuestion();
});
