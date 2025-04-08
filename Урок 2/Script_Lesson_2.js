"use strict";
//Урок 2.//
//Задание 1.
let title = 'Курс JavaScript';
let screens = "Простые, Сложные, Интерактивные"; 
let screenPrice = 300;
let rollback = 30;
let fullPrice = 450;
let adaptive = true;

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)

console.log(screens.length)

console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`) 
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`)

console.log(screens.toLowerCase().split(", "))


let rollbackPercent = fullPrice * (rollback/100);
console.log(rollbackPercent);