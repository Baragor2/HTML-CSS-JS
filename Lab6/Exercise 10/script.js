function func() {
    let main = document.querySelector("main")
    let palka = document.getElementById("palka");
    let tryapka1 = document.getElementById("tryapka1");
    let tryapka2 = document.getElementById("tryapka2");

    but.style.animation = "but_rad 2s forwards";
    palka.style.animation = "palka_rot 2s forwards";
    tryapka1.style.animation = "tryapka_trans 1s forwards 2s";
    tryapka2.style.animation = "tryapka_trans 1s forwards 2s";
    main.style.animation = "all_move 5s forwards 3s";
}

let but = document.querySelector("button");
but.onclick = func;