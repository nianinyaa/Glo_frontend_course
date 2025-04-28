"use strict";
//УРОК 10. Работа с DOM.

const titleElement = document.getElementsByTagName("h1")[0];
console.log(titleElement);

const buttons = document.getElementsByClassName("handler_btn");
console.log(buttons);

const plusButton = document.querySelector(".screen-btn");
console.log(plusButton);

const itemsPercent = document.querySelectorAll(".other-items.percent");
console.log(itemsPercent);

const itemsNumber = document.querySelectorAll(".other-items.number");
console.log(itemsNumber);

const inputElement = document.querySelector('.rollback input[type="range"]');
console.log(inputElement);

const span = document.querySelector(".rollback span.range-value");
console.log(span);

const totalInput = document.getElementsByClassName(".total-input"[0]);
console.log(totalInput);

const inputCollection = document.getElementsByClassName(".total-input"); //выводится коллекция, надо дальше преобразовать
console.log(inputCollection);

const inputElements = Array.from(inputCollection);
console.log(inputElements); // выводится массив, из которого можно вывести элементы

inputElements.forEach((input) => console.log(input.value));

let screens = document.querySelectorAll(".screen");
console.log(screens, "Старые");
screens = document.querySelectorAll(".moderatedScreens");
console.log(screens, "Новые");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();

    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }, //???

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?");
      let price = 0;

      do {
        price = +prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price)); //Почему после ! isNumber стоит с appData ??

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      let price = 0;

      do {
        price = +prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name] = price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    // appData.screenPrice = 0;
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    // appData.allServicePrices = 0;
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
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
    console.log(appData.screens);
  },
};

appData.start();
