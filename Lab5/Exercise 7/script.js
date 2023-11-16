function check_equal(num1, num2) {
    return num1 == num2 ? true : false;
}


function check_ten(num1, num2) {
    return Number(num1) + Number(num2) > 10 ? true : false;
}


function check_negative(num) {
    return num < 0 ? true : false;
}


let ch_eq1 = prompt('Введите число');
let ch_eq2 = prompt('Введите число');
alert(check_equal(ch_eq1, ch_eq2));

let num1 = prompt('Введите число');
let num2 = prompt('Введите число');
alert(check_ten(num1, num2));

let num = prompt('Введите число');
alert(check_negative(num));