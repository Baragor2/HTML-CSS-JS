function func() {
    let pr_elements = document.querySelectorAll(".pr");
    for (let index = 0; index < pr_elements.length; index++) {
        pr_elements[index].textContent = index + 1;
    }
}

let but = document.querySelector("button");
but.onclick = func;