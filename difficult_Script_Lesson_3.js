"use strict";
//Задание 1.
// a) Через if

const langRu = [ 
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

  const langEn = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  
const lang = prompt("Choose the language");
if (lang == "ru") {
  console.log(langRu);

} else if (lang == "en") {
  console.log(langEn);
}

const lang = prompt("Choose the language");
if (lang == "ru") {
  console.log(langRu);
} else if (lang == "en") {
  console.log(langEn);
}

// b) Через switch.
const lang = prompt("Choose the language", "");
switch (lang) {
  case "ru":
    console.log(langRu);
    break;

  case "en":
    console.log(langEn);
    break;
  default:
    console.log("Any language found");
}

// в)через многомерный массив без ифов и switch.

const weekDays = {
  'en': [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  'ru': [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
};

const lang = prompt("Choose the language en/ru", "");
console.log(...(weekDays[lang] || weekDays.en));

//Задание 2.
let namePerson = prompt("Write your name");
console.log(
    namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" : 
    "студент"
);
