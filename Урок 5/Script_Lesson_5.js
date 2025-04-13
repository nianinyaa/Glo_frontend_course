"use strict";
//Урок 5

let screenPrice;

do {
  screenPrice = prompt("Сколько будет стоить данная работа?", "1200");

  if (isNaN(screenPrice)) {
    alert("Значение не является числом. Пожалуйста, введите число");
  } else {
    screenPrice = parseFloat(screenPrice);
  }
} while (isNaN(screenPrice));

console.log(screenPrice);


//Задание 2. Не понимаю, как его верно сделать
//Проверка на число

const getAllServicePrices = function(screenPrice){
  if(typeof screenPrice !== 'number' || Number.isNaN(screenPrice) || !isFinite(screenPrice)){
      return `Значение не является числом. Введите число.`
  }
  if (screenPrice<=0){
      return "Число должнно быть положительным. Введите заново".
  }
  console.log(`Значение является числом.`) 
} 


