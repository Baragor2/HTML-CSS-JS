let salary = prompt('Введите сумму заплаты');

let result = Number(salary); 
result += (salary * 0.15);
alert(`Препия 15% на руки ${result}`);

result -= 90;
alert(`После магазина осталось ${result}`);

result /= 2;
alert(`Жене/мужу половину отдали осталось ${result}`);