const input = document.getElementById("input");
input.value = "";
input.addEventListener("input",(e) => {
    let v = e.target.value;
    v = v.replaceAll(/\s/g,"");
    v = v.replaceAll("v","√");
    v = v.replaceAll("p","π");
    e.target.value = v;
});

const categories = {
    trigonometry:[ 
        label(
            ["0°","360°","2π"],
            ["cos","1"],
            ["sin","0"],
            ["tan","0"]
        ),
        label(
            ["30°","π/6"],
            ["cos","√3/2"],
            ["sin","1/2"],
            ["tan","√3"]
        ),
        label(
            ["45°","π/4"],
            ["cos","√2/2"],
            ["sin","√2/2"],
            ["tan","1"]
        ),
        label(
            ["60°","π/3","90°-30°"],
            ["cos","1/2"],
            ["sin","√3/2"],
            ["tan","√3"]
        ),
        label(
            ["90°","π/2"],
            ["cos","0"],
            ["sin","1"],
            ["tan","NE"]
        ),
        label(
            ["120°","2/3π","90°+30°"],
            ["cos","-1/2"],
            ["sin","√3/2"],
            ["tan","-√3"]
        ),
        label(
            ["135°","3/4π","90°+45°"],
            ["cos","-√2/2"],
            ["sin","√2/2"],
            ["tan","-1"]
        ),
        label(
            ["150°","5/6π","180°-30°"],
            ["cos","-√3/2"],
            ["sin","1/2"],
            ["tan","-√3/3"]
        ),
        label(
            ["180°","π"],
            ["cos","-1"],
            ["sin","0"],
            ["tan","0"]
        ),
        label(
            ["270°","3π"],
            ["cos","0"],
            ["sin","-1"],
            ["tan","NE"]
        ),
    ],
    limits:{},
    identities:{}
}

// after textarea is evaluated the input is nicely formatted
function question(query,answer) {
    return [query,answer];
}

function label(names,...questions){
    return [names,...questions.map(v=>questions(v))]
}