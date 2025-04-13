const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
};

//УРОК 7. ОПТИМИЗАЦИЯ КОДА ИЗ УРОКА 5

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 30;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

//Далее ниже не совсем поняла откуда функция asking взялась

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать ?",
    "Простые, Сложные"
  );

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?", "1200");
  } while (!isNumber(screenPrice));
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));

    sum += +price;
  }

  return sum;
};
const showTypeof = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return +screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getAllServicePrices();
title = getTitle();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log("allServicePrices", allServicePrices);
console.log("getRollbackMessage"(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);
