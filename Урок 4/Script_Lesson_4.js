"use strict";
//Задание 1//
const getAllServicePrices = function (service1, service2){
    return service1 + service2
}

let allServicePrices = getAllServicePrices(12,45);
console.log(allServicePrices)

//Задание 2//

function getFullPrice(screenPrice, allServicePrices){
    return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice(55,88);
console.log(fullPrice)

//Задание 3//
const getTitle = function(title){
    if(!title) return "";
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}
let title = getTitle("КаЛьКулятор Верстки");
console.log(title)


//Задание 4//
const getServicePercentPrices = function(totalSum, expensesPercent){
    const expensesSum = totalSum * expensesPercent / 100;
    return totalSum - Math.round(expensesSum);
}
let servicePercentPrice = getServicePercentPrices(6778, 12);
console.log(servicePercentPrice);

//Задание 5//
//a)
const showTypeOf = function(expenses1, expenses2){
    return Math.round(expenses1 + expenses2);
}
console.log(showTypeOf(234, 6432.56));

//b) 
let screens;
const showTypeOfScreens = function(screens){
    return typeof(screens);
}
console.log(showTypeOfScreens(345))

//c)
const getRollbackMessage = function(discount){
    return `Дарим скидку ${discount}% на первый заказ!`
}
console.log(getRollbackMessage(15))

//d) 
const getServicePercentPricess = function(totalSum, expensePercent){
    const expenseSum = totalSum * expensePercent / 100;
    const finalSum = totalSum - expenseSum;
        return Math.round(finalSum);
        }
    console.log(getServicePercentPricess (5433.44, 23.2))