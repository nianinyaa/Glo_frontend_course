"use strict";
//Урок 3.//
const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");

const rollback = 30;

const adaptive = confirm("Нужен ли адаптив на сайте?");
if (adaptive) {
  console.log(true);
} else {
  console.log(false);
}
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - rollback);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);

console.log(fullPrice);
console.log(servicePercentPrice);

//в моем коде нет console.log ('Стоимость верстки экранов' + screensPrice + "рублей/долларов/евро")
