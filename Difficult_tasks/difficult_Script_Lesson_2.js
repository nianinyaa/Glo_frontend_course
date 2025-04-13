"use strict";
//Задание 1.
let num = 266219;
let digits = num.toString().split('');
let result = 1;

for(let i = 0; i < digits.length; i++) {
  result = result * parseInt(digits[i]);
}
console.log("произведение чисел = " + result);

for(let i = 0; i < 3; i++){
  result = result * result;
}
console.log("возведение в 3 степень = " + result);

console.log(result.toString().slice(0,2));

const fullNumberStr = result.toLocaleString('fullwide', { useGrouping: false });
const firstTwoDigits = fullNumberStr.slice(0, 2);

console.log(firstTwoDigits)