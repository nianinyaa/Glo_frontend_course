"use strict";

//УРОК 4
//Задание 1//

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен");
let servicePrice2 = +prompt("Сколько это будет стоить?");

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return service1 + service2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

const getTitle = function (title) {
  if (!title) return "";
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrice = function (totalSum, rollbackPercent) {
  const rollbackSum = (totalSum * rollbackPercent) / 100;
  return totalSum - Math.round(rollbackSum);
};

const showTypeOf = function (service1, service2) {
  return Math.round(service1 + service2);
};

const showTypeOfScreens = function (screens) {
  return typeof screens;
};

const getRollbackMessage = function (discount) {
  return `Дарим скидку ${discount}% на первый заказ!`;
};

const fullPrice = getFullPrice(55, 88);
const title = getTitle("КаЛьКулятор Верстки");
const servicePercentPrice = getServicePercentPrice(6778, 12);

console.log(showTypeOf(234, 6432.56));
console.log(showTypeOfScreens(345));
console.log(getRollbackMessage(15));
console.log(getServicePercentPrice(5433.44, 23.2));
