"use strict";
//УРОК 8. ОПТИМИЗАЦИЯ КОДА ПЕРЕД ВЕРСТКОЙ

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices = 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  asking: function () {
    // appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    // appData.screens = prompt(
    //   "Какие типы экранов нужно разработать?",
    //   "Простые, Сложные"
    // );
    // do {
    //   appData.screenPrice = +prompt(
    //     "Сколько будет стоить данная работа?"
    //   );
    // } while (!appData.isNumber(appData.screenPrice)); //Почему после ! isNumber стоит с appData ??
    // appData.screenPrice = 0;
 

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      let price = 0;

      do {
        price = +prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;

      // sum += +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

addPrices: function(){
  appData.screenPrice = 0;

  for (let i = 0; i < 2; i++) {
    let name = prompt("Какие типы экранов нужно разработать?");
    let price = 0;
    do {
      price = +prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(price));

    appData.screens.push({ id: i, name: name, price: price });

    appData.screenPrice += price;
  }, 

  appData.allServicePrices = 0;

  for (let key in appData.services) {
    appData.allServicePrices += appData.services[key];
  }
},



  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num); // ✔️ Правильно
  },

 
  showTypeof: function (variable) {
    console.log(variable, typeof variable);
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    if (!appData.title) {
      // Проверяем null/undefined/пустую строку
      appData.title = "Без названия";
      return;
    }

    const trimmed = this.title.trim();
    appData.title = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  },

  getRollbackMessage: function () {
    const price = appData.fullPrice;
    if (price >= 30000) {
      return "Даем скидку 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку 5%";
    } else if (price >= 0 && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  start: function () {
    appData.asking();
    addData.addPrices(); 
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },

  logger: function () {
    // console.log(appData.title);
    // console.log(appData.servicePercentPrice);
    console.log(appData.fullPrice);
    console.log(appData.allServicePrices);
    // console.log(appData.servicePercentPrice);

    console.log(appData.screens);

    for (let key in appData) {
      if (typeof appData[key] !== "function") {
        console.log(`Свойство: ${key} = ${appData[key]}`); // сама сначала вводила in , затем поменяла на =
      } else {
        console.log(`Метод: ${key}()`); //! внимание на скобки после ключа - как пишется для обозначения функции
      }
    }
  },
};

appData.start();

// appData.asking();
// appData.allServicePrices = appData.getAllServicePrices();
// appData.fullPrice = appData.getFullPrice();
// appData.servicePercentPrice = appData.getServicePercentPrice();
// appData.title = appData.getTitle();
