"use strict";
//Урок 3.//
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
const finalPrice = screenPrice + servicePrice1 + servicePrice2; - дубль?

const servicePercentPrice = Math.ceil (finalPrice - expenses);



if (adaptive) {
  console.log(true);
} else {
  console.log(false);
} --- Куда это?
 

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
console.log(adaptive) - не уверена, как он будет работать


console.log(fullPrice); = этого нет, вместо этого стоит screens.length
console.log(servicePercentPrice)

в моем коде нет console.log ('Стоимость верстки экранов' + screensPrice + "рублей/долларов/евро")




"use strict";
//Урок 3.//
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
const servicePercentPrice = Math.ceil (fullPrice - expenses);


if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);

console.log(fullPrice);
console.log(servicePercentPrice)

console.log ('Стоимость верстки экранов' + screenPrice + "рублей/долларов/евро")