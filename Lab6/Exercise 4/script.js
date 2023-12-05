function func() {
    let inp_1 = document.getElementById("inp_1");
    let inp_2 = document.getElementById("inp_2");
    let p_elem = document.getElementById("res");

    let sum = Number(inp_1.value) + Number(inp_2.value);
    p_elem.textContent = sum;
}

let but = document.querySelector("button");
but.onclick = func;