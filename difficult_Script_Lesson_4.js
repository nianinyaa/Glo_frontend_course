//Задание 1//
//a)

const userInput = prompt(`Введите значение`);

const services = function(value){
if(typeof value !== 'string'){ 
    return `Это не строка!`;
}
if(value.trim() ===''){
    return `Ну уж нет, это совсем непохоже на строку.`
}

if (value === null){
    return `Вы сделали отмену ввода значения!`
}
return `Отлично, Вы ввели строку: ${value}!`;
};

//b)

const clearResult = function(inputString){
    if (typeof inputString !== 'string'){
        return `Введенное значение не является строкой`;
    }
    return inputString.trim();
}

//c)

const shortResult = function(inputString){
    if(typeof inputString !== 'string'){
        return `Введенное значение не является строкой`;
    } ;

    //Почему здесь должна появиться новая переменная, которая разбивается посимвольно
    if (inputString.length >30){
        return inputString.substring(0, 30) + '....';
        }

     return inputString;
}

console.log(services(userInput));
console.log(clearResult(userInput));
console.log(shortResult)