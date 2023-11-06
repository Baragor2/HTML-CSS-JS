function calc_square(num) {
    return num * num;
}


function calc_sum(num1, num2) {
    return num1 + num2;
}


function calc_difDiv(num1, num2, num3) {
    return (num1 - num2) / num3;
}


function get_dayWeek(num) {
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return week[num - 1];
}