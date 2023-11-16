let tb = document.body.firstElementChild;

for (let index = 0; index < tb.rows.length; index++) {
    let td = tb.rows[index].cells[index];
    td.style.backgroundColor = 'yellow';
}