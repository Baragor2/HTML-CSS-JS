function func() {
    let p_elem = document.getElementById("procent");
    let prog_elem = document.getElementById("progress_bar");
    let maxim_elem = document.getElementById("maxim");
    let old_val = p_elem.innerHTML;


    p_elem.innerHTML = Number(old_val) + Number(5);
    prog_elem.value += 5;

    if (p_elem.innerHTML == 100) {
        but.hidden = true;
        maxim_elem.innerHTML = "Максимум.";
    }
}

let but = document.querySelector("button");
but.onclick = func;