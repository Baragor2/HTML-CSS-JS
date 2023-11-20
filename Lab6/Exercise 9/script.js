let intervalId;

function func(){
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = window.setInterval(clock, 1000);
} 


function clock(){
    let nlo = document.getElementById("nlo");
    let raketa = document.getElementById("raketa");
    let kamen = document.getElementById("kamen");

    let img = nlo.src;
    nlo.src = kamen.src;
    kamen.src = raketa.src;
    raketa.src = img;
}


let but = document.querySelector("button");
but.onclick = func;