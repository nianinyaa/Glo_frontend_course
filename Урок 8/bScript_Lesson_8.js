"use strict";

//с заданиями 8 урока после оптимизации
//УРОК 8. ОПТИМИЗАЦИЯ КОДА ПЕРЕД ВЕРСТКОЙ ПО КОДУ АВТОРА

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
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );

      //Проверка на кнопку отмена
      if (appData.title === null) {
        appData.title = "Без названия";
        break;
      }

      //Проверка на то что введенные данные это строка
      if (
        typeof appData.title === "string" &&
        isNaN(Number(appData.title)) &&
        appData.title.trim() !== ""
      ) {
        break;
      }

      alert("Название проекта должно быть текстовым и не может быть пустым!");
    } while (true);

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      // ОТДЕЛЬНО проверка названия на строку

      do {
        name = prompt("Какие типы экранов нужно разработать?");

        // Проверка на отмену ввода
        if (name === null) {
          name = "Без названия";
          break;
        }

        if (
          typeof name === "string" &&
          isNaN(Number(name)) &&
          name.trim() !== " "
        ) {
          break;
        }
        alert("Введите текстовое значение!");
      } while (true);

      // ОТДЕЛЬНО проверка цены, что она была числом
      do {
        priceInput = prompt("Сколько будет стоить данная работа?");

        if (priceInput === null) {
          price = 0; // не понимаю, почему ставим 0, а не можем бахнуть алерт иотправить в начало
          alert("Введите число!");
          break;
        }
        price = +priceInput;

        if (!isNaN(price) && isFinite(price)) {
          break;
        }
        alert("Введите число!");
      } while (true);

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");

        if (name === null) {
          name = "Без названия";
          break;
        }

        if (
          typeof name === "string" &&
          isNaN(Number(name)) &&
          name.trim() !== ""
        ) {
          break;
        }
        alert("Введите текстовое значение, не оставляя пустое поле!");
      } while (true);

      do {
        priceInput = prompt("Сколько это будет стоить?");

        if (priceInput === null) {
          price = 0;
          break;
        }

        price = +priceInput;

        if (!isNan(price) && isFinite(price)) {
          break;
        }

        alert("Введите числовое значение");
      } while (true);

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
