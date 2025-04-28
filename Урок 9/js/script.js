// "use strict";
// //УРОК 9. DOM. Код из предыдущих уроков
// //УРОК 9. DOM

// // document.addEventListener("DOMContentLoaded", function () {
// //   console.log("DOM загружен!");

// const titleElement = document.getElementsByTagName("h1")[0];
// console.log(titleElement);

// const buttons = document.getElementsByClassName("handler_btn");
// console.log(buttons);

// const plusButton = document.querySelector(".screen-btn");
// console.log(plusButton);

// const itemsPercent = document.querySelectorAll(".other-items.percent");
// console.log(itemsPercent);

// const itemsNumber = document.querySelectorAll(".other-items.number");
// console.log(itemsNumber);

// const inputElement = document.querySelector('.rollback input[type="range"]');
// console.log(inputElement);

// const span = document.querySelector(".rollback span.range-value");
// console.log(span);

// const totalInput = document.querySelector(".total-input");
// console.log(totalInput);

// const inputCollection = document.getElementsByClassName("total-input"); //выводится коллекция, надо дальше преобразовать
// console.log(inputCollection);

// const inputElements = Array.from(inputCollection);
// console.log(inputElements); // выводится массив, из которого можно вывести элементы

// inputElements.forEach((input) => console.log(input.value));

// let screens = document.querySelectorAll(".screen");
// console.log(screens, "Старые");
// screens = document.querySelectorAll(".moderatedScreens");
// console.log(screens, "Новые");

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},

//   start: function () {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrice();
//     appData.getTitle();

//     appData.logger();
//   },

//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   }, //???

//   asking: function () {
//     appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

//     for (let i = 0; i < 2; i++) {
//       let name = prompt("Какие типы экранов нужно разработать?");
//       let price = 0;

//       do {
//         price = +prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price)); //Почему после ! isNumber стоит с appData ??

//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     for (let i = 0; i < 2; i++) {
//       let name = prompt("Какой дополнительный тип услуги нужен?");
//       let price = 0;

//       do {
//         price = +prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));

//       appData.services[name] = price;
//     }

//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },

//   addPrices: function () {
//     // appData.screenPrice = 0;
//     for (let screen of appData.screens) {
//       appData.screenPrice += +screen.price;
//     }
//     // appData.allServicePrices = 0;
//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     }
//   },

//   getFullPrice: function () {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },

//   getServicePercentPrice: function () {
//     appData.servicePercentPrice =
//       appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
//   },

//   getTitle: function () {
//     if (appData.title) {
//       // Проверяем, что title не null/undefined/пустая строка
//       appData.title =
//         appData.title.trim()[0].toUpperCase() +
//         appData.title.trim().substr(1).toLowerCase();
//     } else {
//       appData.title = "Калькулятор верстки"; // Значение по умолчанию
//     }
//   },

//   getRollbackMessage: function (price) {
//     if (price >= 30000) {
//       return "Даем скидку 10%";
//     } else if (price >= 15000 && price < 30000) {
//       return "Даем скидку 5%";
//     } else if (price >= 0 && price < 15000) {
//       return "Скидка не предусмотрена";
//     } else {
//       return "Что-то пошло не так";
//     }
//   },

//   logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
// };

// appData.start();
// // });

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM загружен!");

  const titleElement = document.getElementById("title");
  const buttons = document.querySelectorAll(".handler_btn");
  const plusButton = document.querySelector(".screen-btn");
  const itemsPercent = document.querySelectorAll(".other-items.percent");
  const itemsNumber = document.querySelectorAll(".other-items.number");
  const inputElement = document.querySelector('.rollback input[type="range"]');
  const span = document.querySelector(".rollback span.range-value");
  const totalInputs = document.querySelectorAll(".total-input");
  const screensContainer = document.querySelector(
    ".main-controls__views.screen"
  );

  // Добавляем обработчики событий
  buttons.forEach((btn) => {
    if (btn.id === "start") {
      btn.addEventListener("click", appData.startCalculation);
    } else if (btn.id === "reset") {
      btn.addEventListener("click", appData.resetCalculation);
    }
  });

  plusButton.addEventListener("click", appData.addScreen);
  inputElement.addEventListener("input", appData.updateRollbackValue);

  const appData = {
    title: "Калькулятор верстки",
    screens: [],
    screenPrice: 0,
    adaptive: { tablet: false, mobile: false },
    rollback: 0,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    screenCount: 0,

    startCalculation: function () {
      this.calculatePrices();
      this.updateUI();
      document.getElementById("reset").style.display = "inline-block";
    },

    resetCalculation: function () {
      // Сброс всех значений
      this.screens = [];
      this.screenPrice = 0;
      this.adaptive = { tablet: false, mobile: false };
      this.rollback = 0;
      this.allServicePrices = 0;
      this.fullPrice = 0;
      this.servicePercentPrice = 0;
      this.services = {};
      this.screenCount = 0;

      // Сброс UI
      this.updateUI();
      document.getElementById("reset").style.display = "none";

      // Очистка полей ввода
      const screenInputs = document.querySelectorAll(
        '.main-controls__input input[type="text"]'
      );
      screenInputs.forEach((input) => (input.value = ""));

      // Сброс чекбоксов
      document.querySelectorAll(".custom-checkbox").forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Сброс range
      inputElement.value = 0;
      span.textContent = "0%";
    },

    addScreen: function () {
      const select = document.querySelector('select[name="views-select"]');
      const input = document.querySelector(
        '.main-controls__input input[type="text"]'
      );

      if (select.value && input.value) {
        const screenType =
          select.options[select.selectedIndex].text.split(" ")[0];
        const price = parseInt(select.value);
        const count = parseInt(input.value);

        appData.screens.push({
          type: screenType,
          price: price,
          count: count,
        });

        appData.screenCount += count;
        input.value = "";
      }
    },

    updateRollbackValue: function (e) {
      const value = e.target.value;
      span.textContent = `${value}%`;
      appData.rollback = parseInt(value);
    },

    calculatePrices: function () {
      // Расчет стоимости экранов
      this.screenPrice = this.screens.reduce(
        (sum, screen) => sum + screen.price * screen.count,
        0
      );

      // Расчет дополнительных услуг
      this.allServicePrices = 0;

      // Адаптация под планшеты
      if (document.getElementById("checkbox-1").checked) {
        this.adaptive.tablet = true;
        this.allServicePrices += this.screenPrice * 0.1;
      }

      // Адаптация под мобильные
      if (document.getElementById("checkbox-2").checked) {
        this.adaptive.mobile = true;
        this.allServicePrices += this.screenPrice * 0.2;
      }

      // Остальные услуги
      const servicePrices = {
        "checkbox-3": 300, // Яндекс
        "checkbox-4": 400, // Google
        "checkbox-5": 200, // Формы
        "checkbox-6": 300, // Сервер
        "checkbox-7": 300, // Тестирование
      };

      for (const [id, price] of Object.entries(servicePrices)) {
        if (document.getElementById(id).checked) {
          this.allServicePrices += price;
        }
      }

      // Расчет CMS
      const cmsCheckbox = document.getElementById("cms-open");
      if (cmsCheckbox.checked) {
        const cmsSelect = document.getElementById("cms-select");
        if (cmsSelect.value === "50") {
          this.allServicePrices += this.screenPrice * 0.5;
        } else if (cmsSelect.value === "other") {
          const otherInput = document.getElementById("cms-other-input");
          if (otherInput.value) {
            this.allServicePrices +=
              this.screenPrice * (parseInt(otherInput.value) / 100);
          }
        }
      }

      // Полная стоимость
      this.fullPrice = this.screenPrice + this.allServicePrices;

      // Стоимость с учетом отката
      this.servicePercentPrice =
        this.fullPrice - this.fullPrice * (this.rollback / 100);
    },

    updateUI: function () {
      document.getElementById("total").value = this.screenPrice;
      document.getElementById("total-count").value = this.screenCount;
      document.getElementById("total-count-other").value =
        this.allServicePrices;
      document.getElementById("total-full-count").value = this.fullPrice;
      document.getElementById("total-count-rollback").value =
        this.servicePercentPrice;
    },
  };

  // Показываем/скрываем поле для другого типа CMS
  document.getElementById("cms-open").addEventListener("change", function (e) {
    const cmsVariants = document.querySelector(".hidden-cms-variants");
    cmsVariants.style.display = e.target.checked ? "block" : "none";
  });

  document
    .getElementById("cms-select")
    .addEventListener("change", function (e) {
      const otherInput =
        document.getElementById("cms-other-input").parentElement;
      otherInput.style.display = e.target.value === "other" ? "block" : "none";
    });
});
