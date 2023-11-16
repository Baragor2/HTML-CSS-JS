function func() {
    let p_elem = document.body.firstElementChild;
    p_elem.outerHTML = '<p>Изменился и стал <b>жирный</b>!</p>';
}

let but = document.querySelector("button");
but.onclick = func;