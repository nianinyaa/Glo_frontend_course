
//Проверено и скорректировано по коду 7 урока с кодом автора в 8 уроке//
"use strict";
//УРОК 7. ОПТИМИЗАЦИЯ КОДА ИЗ УРОКА 5

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num)); //???
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );
    do {
      appData.screenPrice = prompt(
        "Сколько будет стоить данная работа?",
        "1200"
      );
    } while (!appData.isNumber(appData.screenPrice)); //Почему после ! isNumber стоит с appData ??

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");

      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    for (let key in appData.services) this.allServicePrices;
  }, 

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice = += appData.services; 
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
  },
};

appData.start();
//   showTypeof: function (variable) {
//     console.log(variable, typeof variable); // не используется в коде как ориентир 8 урока
//   },

// console.log(appData.title);
// console.log(appData.servicePercentPrice);
// console.log(appData.fullPrice);
// console.log(appData.allServicePrices);
// console.log(appData.servicePercentPrice);
// for (let key in appData) {
//   if (typeof appData[key] !== "function") {
//     console.log(`Свойство: ${key} = ${appData[key]}`); // сама сначала вводила in , затем поменяла на =
//   } else {
//     console.log(`Метод: ${key}()`); //! внимание на скобки после ключа - как пишется для обозначения функции
//   } - почему-то не упоминается в 8 уроке

// appData.asking();
// appData.allServicePrices = appData.getAllServicePrices();
// appData.fullPrice = appData.getFullPrice();
// appData.servicePercentPrice = appData.getServicePercentPrice();
// appData.title = appData.getTitle();
