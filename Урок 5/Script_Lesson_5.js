"use strict";

const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const expenses = Number(prompt("Откат", "150"));
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// const getAllServicePrices = function ( ){
//     if(typeof screenPrice !== 'number' || Number.isNaN(screenPrice) || !isFinite(screenPrice)){
//         return `Значение не является числом. Введите число.`
//     }
//     else if (screenPrice<=0){
//         return `Число должнно быть положительным. Введите заново.`
//     }
//     else console.log(`Значение является числом.`) 
//     return service1 + service2
// }

const getAllServicePrices = function(){
    let sum = 0;
    for( let i = 0, i<2, i++){
        sum += +prompt("Сколько будет стоить данная работа?", "12000");
    }
   
    return(sum)
    
}




//Задание 1//
do{ 
screenPrice = prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

}
while(confirm('Ответить еще на вопрос?'));

//Задание 2//
//Проверка на число

// //const getAllServicePrices = function(screenPrice){
//     if(typeof screenPrice !== 'number' || Number.isNaN(screenPrice) || !isFinite(screenPrice)){
//         return `Значение не является числом. Введите число.`
//     }
//     if (screenPrice<=0){
//         return `Число должнно быть положительным. Введите заново.`
//     }
//     console.log(`Значение является числом.`) 
// }