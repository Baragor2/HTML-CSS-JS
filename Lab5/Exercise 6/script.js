function calc_square(num) {
    return num * num;
}


function calc_sum(num1, num2) {
    return Number(num1) + Number(num2);
}


function calc_difDiv(num1, num2, num3) {
    return (num1 - num2) / num3;
}


function get_dayWeek(day) {
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return week[day - 1];
}


let cl_sq = prompt('Введите число');
alert(calc_square(cl_sq));

let cl_sum1 = prompt('Введите число');
let cl_sum2 = prompt('Введите число');
alert(calc_sum(cl_sum1, cl_sum2));

let num1 = prompt('Введите число');
let num2 = prompt('Введите число');
let num3 = prompt('Введите число');
alert(calc_difDiv(num1, num2, num3));

let day = prompt('Введите число от 1 до 7');
alert(get_dayWeek(day));