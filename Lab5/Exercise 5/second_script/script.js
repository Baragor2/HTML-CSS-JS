let obj = {'Минск':'Беларусь', 'Москва':'Россия', 'Киев':'Украина'};

for (let index = 0; index < Object.keys(obj).length; index++) {
    alert(`${Object.keys(obj)[index]} - это ${Object.values(obj)[index]}`);
}