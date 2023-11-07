let get_sravn = (num1, num2) => num1 > num2 ? 1 :
                                num1 < num2 ? -1 : 0;


let num1 = prompt('Введите число');
let num2 = prompt('Введите число');
alert(get_sravn(num1, num2));