// // работа по файлам, прикрепленным к уроку 21

// const text = document.getElementById("text");
// // text.textContent = text.textContent.replace(/Lorem/gi, "Лорем"); // НО! в тексте были спаны, но с этим свойством они стираются!- перехаписали весь текст
// text.innerHTML = text.innerHTML.replace(
//   /(<span>[\w\s]+<\/span>)/gi,
//   (str, $1) => {
//     return `<strong>${$1}</strong>`;
//   }
//  );

const textInput = document.getElementById("text");
const numberInput = document.getElementById("number");
const form = document.getElementById("form");

// console.log(textInput);

// numberInput.addEventListener("input", (e) => {
//   e.target.value = e.target.value.replace(/\D+/, "");
// });

form.addEventListener("submit", (e) => {
  e.preventDefault(); // останавливаем событие
  let isError = false;

  if (!/[^а-яА-Я]/g.test(textInput.value) && textInput.value !== "") {
    alert("В инпуте только кириллица");
  } else {
    isError = true;
  }

  if (!/[^\d]/g.test(numberInput.value) && numberInput.value !== "") {
    alert("В инпуте только числа");
  } else {
    isError = true;
  }

  if (!isError) {
    alert("Данные отправлены");
  }
});
