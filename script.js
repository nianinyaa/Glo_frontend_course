"use strict";
//Урок 3.//

// Задание 3.
let titleee = prompt("Как называется ваш проект?");
console.log(titleee);

// Задание 4.
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);

// Задание 5.
let screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);

// Задание 6.
let adaptive = confirm("Нужен ли адаптив на сайте?");

if (adaptive) {
  console.log(true);
} else {
  console.log(false);
}

//Задание 7. //
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен");
console.log(service2);

let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);

//Задание 8.//
let screenPrice8 = Number(prompt("Стоимость верстки экранов", "100"));
let servicePrice18 = Number(prompt("Стоимость дополнительной услуги 1", "100"));
let servicePrice28 = Number(prompt("Стоимость дополнительной услуги 2", "100"));
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

//Задание 9.//

let screenPrice1 = Number(prompt("Цена верстки экрана", "100"));
let servicePrice2 = Number(prompt("Цена доп. услуги №1", "100"));
let servicePrice3 = Number(prompt("Цена доп. услуги №2", "100"));
let finalPrice = screenPrice1 + servicePrice2 + servicePrice3;
let expenses = Number(prompt("Откат", "150"));
let servicePercentPrice1 = Math.ceil (finalPrice - expenses);
console.log(servicePercentPrice1); 


//Задание 10. Учесть варианты 0, 15000 и 30000(к какому уровню не важно) - была не очень понятна формулировка с уровнями //

let fullPrice;

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
