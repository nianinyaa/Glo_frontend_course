const books = document.querySelectorAll(".book"); // берем все элементы с классом бук
const booksArray = Array.from(books); // превращаем в массив
console.log(booksArray);

const sortedBooks = []; // создаем новый массив

for (let num = 1; num <= 6; num++) {
  // внешний цикл, перебирает книги от 1 до 6 по порядку
  for (let i = 0; i < booksArray.length; i++) {
    // находим соответствие просто по счетчику
    const bookTitle = booksArray[i].querySelector("h2 a").textContent; // текущая книга в переборе. С названием, фраза целиком
    const currentNumber = parseInt(bookTitle.split(" ")[1]); // вычленяется из текстового названия книги индекс найденного элемента

    if (bookTitle.includes(`Книга ${num}`)) {
      // проверяем, совпадают ли

      sortedBooks.push(booksArray[i]); // добавляем в массив
      break;
    }
  }
}
const booksContainer = document.querySelector(".books"); //
booksContainer.innerHTML = ""; // очищаем контейнер, чтобы поставить новые элементы
sortedBooks.forEach((book) => {
  booksContainer.append(book);
});

document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")'; // поменяла фон
document.querySelector(".adv").remove(); // удалила рекламу

const bookss = document.querySelectorAll(".book");

bookss.forEach((book) => {
  const titleItem = book.querySelector("h2 a");
  const titleText = titleItem.textContent;

  if (titleText.includes("Книга 3.")) {
    titleItem.textContent = "Книга 3. this и Прототипы Объектов";
  }
});

//Восстановить порядок глав во второй и пятой книге (

const bookTwo = document.querySelectorAll(".book")[1];
const chaptersList = bookTwo.querySelectorAll("ul li");
const chaptersTwo = Array.from(chaptersList);

const rightOrderTwo = [
  "Введение",
  "Предисловие",
  "Глава 1: Что такое область видимости?",
  "Глава 2: Лексическая область видимости",
  "Глава 3: Область видимости: функции против блоков",
  "Глава 4: Поднятие переменных (Hoisting)",
  "Глава 5: Замыкание области видимости",
  "Приложение A: Динамическая область видимости",
  "Приложение B: Полифиллинг блочной области видимости",
  "Приложение C: Лексический this",
  "Приложение D: Благодарности!",
];

const ulElementTwo = bookTwo.querySelector("ul");

ulElementTwo.innerHTML = "";

rightOrderTwo.forEach((chapterTitle) => {
  for (let i = 0; i < chaptersTwo.length; i++) {
    if (chaptersTwo[i].textContent === chapterTitle) {
      ulElementTwo.append(chaptersTwo[i]);
      break;
    }
  }
});

console.log(bookTwo);

const bookFive = document.querySelectorAll(".book")[4];
const chaptersFive = Array.from(bookFive.querySelectorAll("ul li"));

const rightOrder = [
  "Введение",
  "Предисловие",
  "Глава 1: Асинхронность: Сейчас и Тогда",
  "Глава 2: Колбеки",
  "Глава 3: Обещания",
  "Глава 4: Генераторы",
  "Глава 5: Производительность программы",
  "Глава 6: Бенчмаркинг и настройка",
  "Приложение A: Библиотека: asynquence",
  "Приложение B: Расширенные асинхронные шаблоны",
  "Приложение C: Благодарности!",
];

const ulElement = bookFive.querySelector("ul");
ulElement.innerHTML = "";

rightOrder.forEach((chapterTitle) => {
  for (let i = 0; i < chaptersFive.length; i++) {
    if (chaptersFive[i].textContent.includes(chapterTitle)) {
      ulElement.append(chaptersFive[i]);
      break;
    }
  }
});
console.log("Проверка порядка глав:");
Array.from(ulElement.children).forEach((item, index) => {
  console.log(`${index + 1}. ${item.textContent.trim()}`);
});

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const bookSix = document.querySelectorAll(".book")[5];
const ulElementSix = bookSix.querySelector("ul");

const chapters = Array.from(ulElementSix.querySelectorAll("li"));

const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";
newChapter.classList.add("chapterEight");

if (chapters[8].textContent.includes("Глава 7: Метапрограммирование")) {
  // chapters.length > 8 &&
  chapters[8].after(newChapter);
} else {
  ulElementSix.append(newChapter);
}
// chaptersBookSix[6].after(chaptersBookSix[7]);
console.log("Список глав:");
chapters.forEach((chapter, index) => {
  console.log(`${index + 1}. ${chapter.textContent}`);
});
