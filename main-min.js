// Google closure compiler & https://www.uglifyjs.net/
var t=t||{};t.scope={};t.t=function(t){return t.raw=t};t.o=function(t,r){t.raw=r;return t};window.addEventListener("load",function(){function o(){var t=~~(Math.random()*w.length);i.value="";for(i.placeholder="Inserire qui la risposta...";t===u&&1<w.length;)t=~~(Math.random()*w.length);u=t;t=!0;for(var r=0;t&&r<f;){r++;t=!1;var e=~~(Math.random()*w[u].i.length);for(var o=0;o<n.length;o++){var a=n[o];a[0]===u&&a[1]===e&&(t=!0)}}q=e;n.push([u,q]);r===f?n=[]:n.length>m&&n.shift();c()}function c(){var t=w[u];x.textContent=t.category;try{var r=t.i[q],e=r.prompt,o=e.p,a=e.text,i=r.u;s.textContent="Risposta";if("string"===typeof o)try{p.innerHTML=MathJax.tex2mml(o+("string"===typeof a?"":" = ？"),{})+(a?"<p>"+a.replaceAll("<","&lt").replaceAll(">","&gt")+("string"===typeof i?" = ?":" =* ?")+"</p>":"")}catch(n){setTimeout(c,50)}else if("string"===typeof a)p.textContent=a+("string"===typeof i?" = ?":" =* ?");else throw""}catch(n){throw"[Category='"+w[u].category+"',Question="+q+"] No question text/equation provided, nothing to show!"}}var i=document.getElementById("input"),s=document.getElementById("input-title"),p=document.getElementById("prompt"),x=document.getElementById("prompt-title");if(!(i instanceof HTMLTextAreaElement))throw"Couldn't find textarea#input";if(null===s)throw"Couldn't find #input-title!";if(null===p)throw"Couldn't find #prompt!";if(null===x)throw"Couldn't find #prompt-title!";document.body.addEventListener("keypress",function(t){if("Enter"===t.key){var r=w[u].i[q].u;t=r.m;r=r.p;var e=i.value.toLowerCase();"skip"===e||"s"===e?o():"string"===typeof t&&t===e||Array.isArray(t)&&t.includes(e)?(o(),s.textContent="Risposta"):(i.value="",i.placeholder="string"===typeof t?t:t[~~(Math.random()*t.length)],"string"===typeof r?s.innerHTML=MathJax.tex2mml("\\text{Risposta }\\Longrightarrow"+r,{}):s.textContent="Risposta = "+("string"===typeof t?t:t.join(" oppure ")))}else" "===t.key&&"Inserire qui la risposta..."!==i.placeholder&&(i.value=i.placeholder)});i.addEventListener("input",function(t){var r=t.target.value;r=r.toLowerCase().replaceAll(/\s/g,"").replaceAll("v","√").replaceAll(">=","≥").replaceAll("<=","≤").replaceAll("+-","±").replaceAll("-+","∓").replaceAll("composto","∘");t.target.value=r});var w=[{category:"Trigonometria",i:[{prompt:{p:"{\\cos 0^\\circ}"},u:{m:"1",p:"{\\cos 0^\\circ=1}"}},{prompt:{p:"{\\cos 360^\\circ}"},u:{m:"1",p:"{\\cos 360^\\circ=1}"}},{prompt:{p:"{\\cos 2 \\pi}"},u:{m:"1",p:"{\\cos 2 \\pi=1}"}},{prompt:{p:"{\\tan 45^\\circ}"},u:{m:"1",p:"{\\tan 45^\\circ=1}"}},{prompt:{p:"{\\tan \\frac{\\pi}{4}}"},u:{m:"1",p:"{\\tan \\frac{\\pi}{4}=1}"}},{prompt:{p:"{\\sin 90^\\circ}"},u:{m:"1",p:"{\\sin 90^\\circ=1}"}},{prompt:{p:"{\\sin \\frac{\\pi}{2}}"},u:{m:"1",p:"{\\sin \\frac{\\pi}{2}=1}"}},{prompt:{p:"{\\sin 0^\\circ}"},u:{m:"0",p:"{\\sin 0^\\circ=0}"}},{prompt:{p:"{\\sin 360^\\circ}"},u:{m:"0",p:"{\\sin 360^\\circ=0}"}},{prompt:{p:"{\\sin 2 \\pi}"},u:{m:"0",p:"{\\sin 2 \\pi=0}"}},{prompt:{p:"{\\tan 0^\\circ}"},u:{m:"0",p:"{\\tan 0^\\circ=0}"}},{prompt:{p:"{\\tan 360^\\circ}"},u:{m:"0",p:"{\\tan 360^\\circ=0}"}},{prompt:{p:"{\\tan 2 \\pi}"},u:{m:"0",p:"{\\tan 2 \\pi=0}"}},{prompt:{p:"{\\cos 90^\\circ}"},u:{m:"0",p:"{\\cos 90^\\circ=0}"}},{prompt:{p:"{\\cos \\frac{\\pi}{2}}"},u:{m:"0",p:"{\\cos \\frac{\\pi}{2}=0}"}},{prompt:{p:"{\\sin 180^\\circ}"},u:{m:"0",p:"{\\sin 180^\\circ=0}"}},{prompt:{p:"{\\sin \\pi}"},u:{m:"0",p:"{\\sin \\pi=0}"}},{prompt:{p:"{\\tan 180^\\circ}"},u:{m:"0",p:"{\\tan 180^\\circ=}"}},{prompt:{p:"{\\tan \\pi}"},u:{m:"0",p:"{\\tan \\pi=}"}},{prompt:{p:"{\\cos 270^\\circ}"},u:{m:"0",p:"{\\cos 270^\\circ=0}"}},{prompt:{p:"{\\cos \\frac{3}{2} \\pi}"},u:{m:"0",p:"{\\cos \\frac{3}{2} \\pi=0}"}},{prompt:{p:"{\\cos 30^\\circ}"},u:{m:"√3/2",p:"{\\cos 30^\\circ=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\cos \\frac{\\pi}{6}}"},u:{m:"√3/2",p:"{\\cos \\frac{\\pi}{6}=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin 60^\\circ}"},u:{m:"√3/2",p:"{\\sin 60^\\circ=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin \\frac{\\pi}{3}}"},u:{m:"√3/2",p:"{\\sin \\frac{\\pi}{3}=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin (90^\\circ-30^\\circ)}"},u:{m:"√3/2",p:"{\\sin (90^\\circ-30^\\circ)=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin 120^\\circ}"},u:{m:"√3/2",p:"{\\sin 120^\\circ=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin \\frac{2}{3} \\pi}"},u:{m:"√3/2",p:"{\\sin \\frac{2}{3} \\pi=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin (90^\\circ+30^\\circ)}"},u:{m:"√3/2",p:"{\\sin (90^\\circ+30^\\circ)=\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\sin 30^\\circ}"},u:{m:"1/2",p:"{\\sin 30^\\circ=\\frac{1}{2}}"}},{prompt:{p:"{\\sin \\frac{\\pi}{6}}"},u:{m:"1/2",p:"{\\sin \\frac{\\pi}{6}=\\frac{1}{2}}"}},{prompt:{p:"{\\cos 60^\\circ}"},u:{m:"1/2",p:"{\\cos 60^\\circ=\\frac{1}{2}}"}},{prompt:{p:"{\\cos \\frac{\\pi}{3}}"},u:{m:"1/2",p:"{\\cos \\frac{\\pi}{3}=\\frac{1}{2}}"}},{prompt:{p:"{\\cos (90^\\circ-30^\\circ)}"},u:{m:"1/2",p:"{\\cos (90^\\circ-30^\\circ)=\\frac{1}{2}}"}},{prompt:{p:"{\\sin 150^\\circ}"},u:{m:"1/2",p:"{\\sin 150^\\circ=\\frac{1}{2}}"}},{prompt:{p:"{\\sin \\frac{5}{6} \\pi}"},u:{m:"1/2",p:"{\\sin \\frac{5}{6} \\pi=\\frac{1}{2}}"}},{prompt:{p:"{\\sin (180^\\circ-30^\\circ)}"},u:{m:"1/2",p:"{\\sin (180^\\circ-30^\\circ)=\\frac{1}{2}}"}},{prompt:{p:"{\\tan 30^\\circ}"},u:{m:"√3/3",p:"{\\tan 30^\\circ=\\frac{\\sqrt 3}{3}}"}},{prompt:{p:"{\\tan \\frac{\\pi}{6}}"},u:{m:"√3/3",p:"{\\tan \\frac{\\pi}{6}=\\frac{\\sqrt 3}{3}}"}},{prompt:{p:"{\\cos 45^\\circ}"},u:{m:"√2/2",p:"{\\cos 45^\\circ=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\cos \\frac{\\pi}{4}}"},u:{m:"√2/2",p:"{\\cos \\frac{\\pi}{4}=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\sin 45^\\circ}"},u:{m:"√2/2",p:"{\\sin 45^\\circ=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\sin \\frac{\\pi}{4}}"},u:{m:"√2/2",p:"{\\sin \\frac{\\pi}{4}=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\sin 135^\\circ}"},u:{m:"√2/2",p:"{\\sin 135^\\circ=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\sin \\frac{3}{4} \\pi}"},u:{m:"√2/2",p:"{\\sin \\frac{3}{4} \\pi=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\sin (90^\\circ+45^\\circ)}"},u:{m:"√2/2",p:"{\\sin (90^\\circ+45^\\circ)=\\frac{\\sqrt 2}{3}}"}},{prompt:{p:"{\\tan 60^\\circ}"},u:{m:"√3",p:"{=\\sqrt 3}"}},{prompt:{p:"{\\tan \\frac{\\pi}{3}}"},u:{m:"√3",p:"{=\\sqrt 3}"}},{prompt:{p:"{\\tan (90^\\circ-30^\\circ)}"},u:{m:"√3",p:"{=\\sqrt 3}"}},{prompt:{p:"{\\tan 90^\\circ}"},u:{m:["-","ne"],p:"{\\tan 90^\\circ=\\nexists}"}},{prompt:{p:"{\\tan \\frac{\\pi}{2}}"},u:{m:["-","ne"],p:"{\\tan \\frac{\\pi}{2}=\\nexists}"}},{prompt:{p:"{\\tan 270^\\circ}"},u:{m:["-","ne"],p:"{\\tan 270^\\circ=\\nexists}"}},{prompt:{p:"{\\tan \\frac{3}{2} \\pi}"},u:{m:["-","ne"],p:"{\\tan \\frac{3}{2} \\pi=\\nexists}"}},{prompt:{p:"{\\cos 120^\\circ}"},u:{m:"-1/2",p:"{\\cos 120^\\circ=-\\frac{1}{2}}"}},{prompt:{p:"{\\cos \\frac{2}{3} \\pi}"},u:{m:"-1/2",p:"{\\cos \\frac{2}{3} \\pi=-\\frac{1}{2}}"}},{prompt:{p:"{\\cos (90^\\circ+30^\\circ)}"},u:{m:"-1/2",p:"{\\cos (90^\\circ+30^\\circ)=-\\frac{1}{2}}"}},{prompt:{p:"{\\tan 120^\\circ}"},u:{m:"-√3",p:"{\\tan 120^\\circ=-\\sqrt 3}"}},{prompt:{p:"{\\tan \\frac{2}{3} \\pi}"},u:{m:"-√3",p:"{\\tan \\frac{2}{3} \\pi=-\\sqrt 3}"}},{prompt:{p:"{\\tan (90^\\circ+30^\\circ)}"},u:{m:"-√3",p:"{\\tan (90^\\circ+30^\\circ)=-\\sqrt 3}"}},{prompt:{p:"{\\tan 135^\\circ}"},u:{m:"-1",p:"{\\tan 135^\\circ=-1}"}},{prompt:{p:"{\\tan \\frac{3}{4} \\pi}"},u:{m:"-1",p:"{\\tan \\frac{3}{4} \\pi=-1}"}},{prompt:{p:"{\\tan (90^\\circ+45^\\circ)}"},u:{m:"-1",p:"{\\tan (90^\\circ+45^\\circ)=-1}"}},{prompt:{p:"{\\cos 180^\\circ}"},u:{m:"-1",p:"{\\cos 180^\\circ=-1}"}},{prompt:{p:"{\\cos \\pi}"},u:{m:"-1",p:"{\\cos \\pi=-1}"}},{prompt:{p:"{\\sin 270^\\circ}"},u:{m:"-1",p:"{\\sin 270^\\circ=-1}"}},{prompt:{p:"{\\sin \\frac{3}{2} \\pi}"},u:{m:"-1",p:"{\\sin \\frac{3}{2} \\pi=-1}"}},{prompt:{p:"{\\cos 135^\\circ}"},u:{m:"-√2/2",p:"{\\cos 135^\\circ=-\\frac{\\sqrt 2}{2}}"}},{prompt:{p:"{\\cos \\frac{3}{4} \\pi}"},u:{m:"-√2/2",p:"{\\cos \\frac{3}{4} \\pi=-\\frac{\\sqrt 2}{2}}"}},{prompt:{p:"{\\cos (90^\\circ+45^\\circ)}"},u:{m:"-√2/2",p:"{\\cos (90^\\circ+45^\\circ)=-\\frac{\\sqrt 2}{2}}"}},{prompt:{p:"{\\tan 150^\\circ}"},u:{m:"-√3/3",p:"{\\tan 150^\\circ=-\\frac{\\sqrt 3}{3}}"}},{prompt:{p:"{\\tan \\frac{5}{6} \\pi}"},u:{m:"-√3/3",p:"{\\tan \\frac{5}{6} \\pi=-\\frac{\\sqrt 3}{3}}"}},{prompt:{p:"{\\tan (180^\\circ-30^\\circ)}"},u:{m:"-√3/3",p:"{\\tan (180^\\circ-30^\\circ)=-\\frac{\\sqrt 3}{3}}"}},{prompt:{p:"{\\cos 150^\\circ}"},u:{m:"-√3/2",p:"{\\cos 150^\\circ=-\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\cos \\frac{5}{6} \\pi}"},u:{m:"-√3/2",p:"{\\cos \\frac{5}{6} \\pi=-\\frac{\\sqrt 3}{2}}"}},{prompt:{p:"{\\cos (180^\\circ-30^\\circ)}"},u:{m:"-√3/2",p:"{\\cos (180^\\circ-30^\\circ)=-\\frac{\\sqrt 3}{2}}"}}]},{category:"Identità trigonometriche",i:[{prompt:{p:"{\\tan x}"},u:{m:["sin/cos","sin(x)/cos(x)"],p:"{{\\tan x}=\\frac{\\sin x}{\\cos x}}"}},{prompt:{p:"{\\tan^{-1} x}"},u:{m:["cos/sin","1/tan","cos(x)/sin(x)","1/tan(x)"],p:"{{\\tan^{-1} x}=\\frac{\\cos x}{\\sin x}=\\frac{1}{\\tan x}}"}},{prompt:{p:"{\\cot x}"},u:{m:["cos/sin","1/tan","cos(x)/sin(x)","1/tan(x)"],p:"{{\\tan^{-1} x}=\\frac{\\cos x}{\\sin x}=\\frac{1}{\\tan x}}"}},{prompt:{p:"{\\sec x}"},u:{m:["1/cos","1/cos(x)"],p:"{{\\sec x}=\\frac{1}{\\cos x}}"}},{prompt:{p:"{\\csc x}"},u:{m:["1/sin","1/sin(x)"],p:"{{\\csc x}=\\frac{1}{\\sin x}}"}},{prompt:{p:"{\\sin^2 x+\\cos^2 x}"},u:{m:"1",p:"{{\\sin^2 x+\\cos^2 x}=1}"}},{prompt:{p:"{1-\\cos^2 x}"},u:{m:["sin^2","sin^2(x)"],p:"{{1-\\cos^2 x}=\\sin^2 x}"}},{prompt:{p:"{1-\\sin^2 x}"},u:{m:["cos^2","cos^2(x)"],p:"{{1-\\sin^2 x}=\\cos^2 x}"}},{prompt:{p:"{\\sin^2 x}"},u:{m:["1-cos^2","1-cos^2(x)"],p:"{{\\sin^2 x}=1-\\cos^2 x}"}},{prompt:{p:"{\\cos^2 x}"},u:{m:["1-sin^2","1-sin^2(x)"],p:"{{\\cos^2 x}=1-\\sin^2 x}"}},{prompt:{p:"{\\cos (a \\pm b)}"},u:{m:["cos(a)*cos(b)∓sin(a)*sin(b)","cos(a)cos(b)∓sin(a)sin(b)"],p:"{\\cos (\\alpha \\pm \\beta)=\\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta}"}},{prompt:{p:"{\\sin (a \\pm b)}"},u:{m:["sin(a)*cos(b)±cos(a)*sin(b)","sin(a)cos(b)±cos(a)sin(b)"],p:"{\\sin(\\alpha \\pm \\beta)=\\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta}"}}]},{category:"Limiti notevoli",i:[{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{\\sin x}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{\\sin x}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{\\ln(1+x)}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{\\ln(1+x)}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{\\tan x}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{\\tan x}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{e^x-1}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{e^x-1}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{\\arctan x}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{\\arctan x}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{\\arcsin x}{x}}"},u:{m:"1",p:"{{\\lim_{x \\rightarrow 0} \\frac{\\arcsin x}{x}}=1}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{(1+x)^k-1}{x}}"},u:{m:"k",p:"{{\\lim_{x \\rightarrow 0} \\frac{(1+x)^k-1}{x}}=k, \\forall k \\in \\mathbb{R}}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0^+} x \\ln x}"},u:{m:"0",p:"{{\\lim_{x \\rightarrow 0^+} x \\ln x}=0}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{a^x-1}{x}}"},u:{m:["ln(a)","log(a)"],p:"{{\\lim_{x \\rightarrow 0} \\frac{a^x-1}{x}}=\\ln a}"}},{prompt:{p:"{\\lim_{x \\rightarrow 0} \\frac{1-\\cos x}{x^2}}"},u:{m:"1/2",p:"{{\\lim_{x \\rightarrow 0} \\frac{1-\\cos x}{x^2}}=\\frac{1}{2}}"}},{prompt:{p:"{\\lim_{x \\rightarrow \\infty} (1+\\frac{1}{x})^x}"},u:{m:"e",p:"{{\\lim_{x \\rightarrow \\infty} (1+\\frac{1}{x})^x}=e}"}},{prompt:{p:"{\\lim_{x \\rightarrow \\infty} (1+x)^{-x}}"},u:{m:"e",p:"{{\\lim_{x \\rightarrow \\infty} (1+x)^{-x}}=e}"}},{prompt:{p:"{\\lim_{x \\rightarrow \\infty} (1+\\frac{\\alpha}{x})^x}"},u:{m:"e^a",p:"{{\\lim_{x \\rightarrow \\infty} (1+\\frac{\\alpha}{x})^x}=e^\\alpha}"}}]},{category:"Equivalenze asintotiche",i:[{prompt:{p:"{\\sin x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{{\\sin x \\sim x} \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\tan x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{{\\tan x \\sim x} \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{e^x-1 \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{{e^x-1 \\sim x} \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{e^x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"1+x",p:"{{e^x \\sim 1+x} \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\cos x-1 \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:["-x^2/2","-(x^2/2)"],p:"{\\cos x-1 \\sim -\\frac{x^2}{2} \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\sin x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"1",p:"{\\cos x \\sim 1 \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\arctan x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{\\arctan x \\sim x \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\arcsin x \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{\\arcsin x \\sim x \\text{, per } {x \\rightarrow 0}}"}},{prompt:{p:"{\\ln (1+x) \\sim ？ \\text{per } {x \\rightarrow 0}}",text:""},u:{m:"x",p:"{\\ln (1+x) \\sim x \\text{, per } {x \\rightarrow 0}}"}}]},{category:"Sviluppi di Taylor, centrati in 0",i:[{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{{\\sin t = t+o(t)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["t-t^3/3!+o(t^3)","t-t^3/6+o(t^3)"],p:"{{\\sin t = t-\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di quinto grado di } \\sin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["t-t^3/3!+t^5/5!+o(t^5)","t-t^3/6+t^5/120+o(t^5)"],p:"{{\\sin t = t-\\frac{t^3}{3!}+\\frac{t^5}{5!}+o(t^5)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di settimo grado di } \\sin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["t-t^3/3!+t^5/5!-t^7/7!+o(t^7)","t-t^3/6+t^5/120-t^7/5040+o(t^7)"],p:"{{\\sin t = t-\\frac{t^3}{3!}+\\frac{t^5}{5!}-\\frac{t^7}{7!}+o(t^7)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\sin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["((-1)^k*t^(2k+1)/(2k+1)!)+o(t^(2k+1))","(-1)^k*t^(2k+1)/(2k+1)!+o(t^(2k+1))"],p:"{{\\sin t = \\text{...} + \\frac{(-1)^k t^{2k+1}}{(2k+1)!} + o(t^{2k+1})} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } \\tan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{{\\tan t = t+o(t)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{{e^t-1 = t+o(t)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["t+t^2/2+o(t^2)","t+t^2/2!+o(t^2)"],p:"{{e^t-1 = t+\\frac{t^2}{2!}+o(t^2)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } e^t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["t+t^2/2+t^3/6+o(t^3)","t+t^2/2!+t^3/3!+o(t^3)"],p:"{{e^t-1 = t+\\frac{t^2}{2!}+\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di grado nullo di } e^t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1+o(t)",p:"{{e^t = 1+o(t)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } e^t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1+t+o(t)",p:"{{e^t = 1+t+o(t)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } e^t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1+t+t^2/2+o(t^2)","1+t+t^2/2!+o(t^2)"],p:"{{e^t = 1+t+\\frac{t^2}{2!}+o(t^2)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } e^t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1+t+t^2/2+t^3/6+o(t^3)","1+t+t^2/2!+t^3/3!+o(t^3)"],p:"{{e^t = 1+t+\\frac{t^2}{2!}+\\frac{t^3}{3!}+o(t^3)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } e^t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t^k/k!+o(t^k)",p:"{{e^t = \\text{...} + \\frac{t^k}{k!} + o(t^k)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["-t^2/2+o(t^2)","-t^2/2!+o(t^2)"],p:"{\\cos t-1 = -\\frac{t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di quarto grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["-t^2/2+t^4/24+o(t^4)","-t^2/2!+t^4/4!+o(t^4)"],p:"{\\cos t-1 = -\\frac{t^2}{2!}+\\frac{t^4}{4!}+o(t^4) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di sesto grado di } \\cos t-1 \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["-t^2/2+t^4/24-t^6/720+o(t^6)","-t^2/2!+t^4/4!-t^6/6!+o(t^6)"],p:"{\\cos t-1 = -\\frac{t^2}{2!}+\\frac{t^4}{4!}-\\frac{t^6}{6!}+o(t^6) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\cos t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1-t^2/2+o(t^2)","1-t^2/2!+o(t^2)"],p:"{\\cos t = 1-\\frac{t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di quarto grado di } \\cos t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1-t^2/2+t^4/24+o(t^4)","1-t^2/2!+t^4/4!+o(t^4)"],p:"{\\cos t = 1-\\frac{t^2}{2!}+\\frac{t^4}{4!}+o(t^4) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di sesto grado di } \\cos t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1-t^2/2+t^4/24-t^6/720+o(t^6)","1-t^2/2!+t^4/4!-t^6/6!+o(t^6)"],p:"{\\cos t = 1-\\frac{t^2}{2!}+\\frac{t^4}{4!}-\\frac{t^6}{6!}+o(t^6) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\cos t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["(-1)^k*t^(2k)/(2k)!+o(t^(2k))","((-1)^k*t^(2k))/(2k)!+o(t^(2k))"],p:"{{\\cos t = \\text{...} + \\frac{(-1)^k t^{2k}}{2k!} + o(t^{2k})} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{\\arctan t = t+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1-t^3/3+o(t^3)",p:"{\\arctan t = 1-\\frac{t^3}{3}+o(t^3) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di quinto grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1-t^3/3+t^5/5+o(t^5)",p:"{\\arctan t = 1-\\frac{t^3}{3}+\\frac{t^5}{5}+o(t^5) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di settimo grado di } \\arctan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1-t^3/3+t^5/5-t^7/7+o(t^7)",p:"{\\arctan t = 1-\\frac{t^3}{3}+\\frac{t^5}{5}-\\frac{t^7}{7}+o(t^7) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\arctan t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["(-1)^k*t^(2k+1)/(2k+1)+o(t^(2k+1))","((-1)^k*t^(2k+1))/(2k+1)+o(t^(2k+1))"],p:"{{\\arctan t = \\text{...} + \\frac{(-1)^k t^{2k+1}}{2k+1} + o(t^{2k+1})} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } \\arcsin t \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{\\arcsin t = t+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t+o(t)",p:"{\\ln (1+t) = t+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t-t^2/2+o(t^2)",p:"{\\ln (1+t) = t-\\frac{t^2}{2}+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t-t^2/2+t^3/3+o(t^3)",p:"{\\ln (1+t) = t-\\frac{t^2}{2}+\\frac{t^3}{3}+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo quarto di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"t-t^2/2+t^3/3-t^4/4+o(t^4)",p:"{\\ln (1+t) = t-\\frac{t^2}{2}+\\frac{t^3}{3}-\\frac{t^4}{4}+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } \\ln (1+t) \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["(-1)^(k+1)*t^k/k+o(t^k)","((-1)^(k+1)*t^k)/k+o(t^k)"],p:"{{\\ln (1+t) = \\text{...} + \\frac{(-1)^{k+1} t^k}{k} + o(t^k)} \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di primo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"1+at+o(t)",p:"{\\ln (1+t) = 1+\\alpha t+o(t) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di secondo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1+at+a(a-1)t^2/2+o(t^2)","1+at+(a(a-1)t^2)/2+o(t^2)","1+at+a(a-1)t^2/2!+o(t^2)","1+at+(a(a-1)t^2)/2!+o(t^2)"],p:"{\\ln (1+t) = 1+\\alpha t+\\frac{\\alpha (\\alpha -1)t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il polinomio di Taylor di terzo grado di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:["1+at+a(a-1)t^2/2+a(a-1)(a-2)t^3/6+o(t^3)","1+at+(a(a-1)t^2)/2+(a(a-1)(a-2)t^3)/6+o(t^3)","1+at+a(a-1)t^2/2!+a(a-1)(a-2)t^3/3!+o(t^3)","1+at+(a(a-1)t^2)/2!+(a(a-1)(a-2)t^3)/3!+o(t^3)"],p:"{\\ln (1+t) = 1+\\alpha t+\\frac{\\alpha (\\alpha -1)t^2}{2!}+o(t^2) \\text{, per } {t \\rightarrow 0}}"}},{prompt:{p:"{\\text{Qual'è il k-esimo termine del polinomio di Taylor di } (1+t)^{\\alpha} \\text{, per } {t \\rightarrow 0}}",text:""},u:{m:"a(a-1)(a-2)...(a-k+1)t^k/k!+o(t^k) a(a-1)(a-2)..(a-k+1)t^k/k!+o(t^k) a(a-1)(a-2).(a-k+1)t^k/k!+o(t^k) (a(a-1)(a-2)...(a-k+1)t^k)/k!+o(t^k) (a(a-1)(a-2)..(a-k+1)t^k)/k!+o(t^k) (a(a-1)(a-2).(a-k+1)t^k)/k!+o(t^k)".split(" "),p:"{\\ln (1+t) = \\text{...} +\\frac{\\alpha (\\alpha-1)(\\alpha-2)...(\\alpha-k+1)t^k}{k!}+o(t^k) \\text{ } \\forall \\alpha \\in \\mathbb{R} \\text{, per } {t \\rightarrow 0}}"}}]},{category:"Serie note",i:[{prompt:{p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ diverge per } q}"},u:{m:"q≥1",p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ diverge se } {q \\ge 1}}"}},{prompt:{p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ converge per } q}"},u:{m:"-1<q<1",p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ converge se }  {q \\in (-1,1)}}"}},{prompt:{p:"{\\sum_{n=0}^{+\\infty} q^n \\text{, se } q \\in (-1,1) \\text{, converge a}}"},u:{m:"1/(1-q)",p:"{\\sum_{n=0}^{+\\infty} q^n \\text{, se }  {q \\in (-1,1)}} \\text{, converge a } \\frac{1}{1-q}"}},{prompt:{p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ è indeterminata per } q}"},u:{m:"q≤-1",p:"{\\sum_{n=0}^{+\\infty} q^n \\text{ è indeterminata se }  {q \\le -1}}"}},{prompt:{p:"{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ diverge per } \\alpha}"},u:{m:"a≤1",p:"{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ diverge se } {\\alpha \\le 1}}"}},{prompt:{p:"{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ converge per } \\alpha}"},u:{m:"a>1",p:"{\\sum_{n=1}^{+\\infty} {1 \\over n^\\alpha} \\text{ converge se } {\\alpha \\gt 1}}"}},{prompt:{p:"{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^\\alpha} \\text{ diverge per } \\alpha}"},u:{m:"a≤1",p:"{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^a} \\text{ diverge se } {\\alpha \\le1}}"}},{prompt:{p:"{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^\\alpha} \\text{ converge per } \\alpha}"},u:{m:"a>1",p:"{\\sum_{n=1}^{+\\infty} {1 \\over n (\\ln n)^a} \\text{ converge se } {\\alpha \\gt1}}"}}]},{category:"Scomposizioni notevoli",i:[{prompt:{p:"{a^2-b^2}"},u:{m:["(a+b)(a-b)","(a-b)(a+b)"],p:"{a^2-b^2}={(a+b)(a-b)}"}},{prompt:{p:"{a^2+b^2}"},u:{m:["(a+b)^2-2ab"],p:"{a^2+b^2}={(a+b)^2-2ab}"}},{prompt:{p:"{a^3-b^3}"},u:{m:["(a-b)(a^2+ab+b^2)","(a^2+ab+b^2)(a-b)"],p:"{a^3-b^3}={(a-b)(a^2+ab+b^2)}"}},{prompt:{p:"{a^3+b^3}"},u:{m:["(a+b)(a^2-ab+b^2)","(a^2-ab+b^2)(a+b)"],p:"{a^3+b^3}={(a+b)(a^2-ab+b^2)}"}}]},{category:"Derivate delle funzioni elementari",i:[{prompt:{p:"{f(x) = c} \\text{, } {f'(x)}"},u:{m:"0",p:"{(C)'=0}"}},{prompt:{p:"{f(x) = x^\\alpha} \\text{, } {f'(x)}"},u:{m:["ax^(a-1)","a*x^(a-1)"],p:"{(x^\\alpha)'=\\alpha x^{\\alpha-1}}"}},{prompt:{p:"{f(x) = e^x} \\text{, } {f'(x)}"},u:{m:"e^x",p:"{(e^x)'=e^x}"}},{prompt:{p:"{f(x) = \\ln x} \\text{, } {f'(x)}"},u:{m:"1/x",p:"{(\\ln x)'=\\frac{1}{x}}"}},{prompt:{p:"{f(x) = \\sin x} \\text{, } {f'(x)}"},u:{m:["cos(x)","cos","cosx"],p:"{(\\sin x)'=\\cos x}"}},{prompt:{p:"{f(x) = \\cos x} \\text{, } {f'(x)}"},u:{m:["-sin(x)","-sin","-sinx"],p:"{(\\cos x)'=-\\sin x}"}},{prompt:{p:"{f(x) = -\\sin x} \\text{, } {f'(x)}"},u:{m:["-cos(x)","-cos","-cosx"],p:"{(-\\sin x)'=-\\cos x}"}},{prompt:{p:"{f(x) = -\\cos x} \\text{, } {f'(x)}"},u:{m:["sin(x)","sin","sinx"],p:"{(-\\cos x)'=\\sin x}"}},{prompt:{p:"{f(x) = \\arctan x} \\text{, } {f'(x)}"},u:{m:"1/(1+x^2)",p:"{(\\arctan x)'=\\frac{1}{1+x^2}}"}},{prompt:{p:"{f(x) = \\arcsin x} \\text{, } {f'(x)}"},u:{m:"1/√(1+x^2)",p:"{(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}}}"}},{prompt:{p:"{f(x) = \\arccos x} \\text{, } {f'(x)}"},u:{m:["-1/√(1+x^2)","-(1/√(1+x^2))"],p:"{(\\arccos x)'=-\\frac{1}{\\sqrt{1-x^2}}}}"}},{prompt:{p:"{f(x) = |x|} \\text{, } {f'(x)}"},u:{m:["|x|/x","x/|x|"],p:"{(|x|)'=\\frac{|x|}{x}=\\frac{x}{|x|}}"}}]},{category:"Regole di derivazione",i:[{prompt:{p:"{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\pm g)'}}"},u:{m:"f'(x)±g'(x)",p:"{(f \\pm g)'=f'(x) \\pm g'(x)}"}},{prompt:{p:"{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f g)'}}"},u:{m:["f'(x)g(x)+f(x)g'(x)","f'(x)*g(x)+f(x)*g'(x)"],p:"{(f g)'=f'(x)g(x)+f(x)g'(x)}"}},{prompt:{p:"{\\text{Sia } {f(x)} \\text{ una funzione, } {(\\frac{1}{f})'}}"},u:{m:["-f'(x)/(f(x))^2","-f'(x)/f(x)^2","-(f'(x)/(f(x))^2)","-(f'(x)/f(x)^2)"],p:"{(\\frac{1}{f})'=-\\frac{f'(x)}{f(x)^2}}"}},{prompt:{p:"{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(\\frac{f}{g})'}}"},u:{m:["(f'(x)g(x)-g'(x)f(x))/(g(x))^2","(f'(x)g(x)-g'(x)f(x))/g(x)^2"],p:"{(\\frac{f}{g})'=\\frac{f'(x)g(x)-g'(x)f(x)}{g(x)^2}}"}},{prompt:{p:"{\\text{Siano } {f(x)} \\text{ e } {g(x)} \\text{ funzioni, } {(f \\circ g)'}}"},u:{m:["f'(g(x))g'(x)","f'(g(x))*g'(x)"],p:"{(f \\circ g)'=f'(g(x))g'(x)}"}},{prompt:{p:"{\\text{Sia } {f(x)} \\text{ una funzione, } {(f^{-1})'}}"},u:{m:["1/f'(f^(-1)(x))","1/(f'(f^(-1)(x)))","1/f'∘f^(-1)","1/(f'∘f^(-1))"],p:"{(f^{-1})'=\\frac{1}{f' \\circ f^{-1}} \\text{ oppure } (f^{-1}(x))'=\\frac{1}{f'(f^{-1}(x))}}"}}]}],u=-1,q=-1,n=[],m=2*Math.min(w.map(function(t){return t.i.length})),f=w.map(function(t){return t.i.length}).reduce(function(t,r){return t+r});o()});