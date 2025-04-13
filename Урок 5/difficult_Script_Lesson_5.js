//Усложненное 1

do {
  screenPrice = prompt("Сколько будет стоить данная работа?", "1200");

  if (sсreenPrice === null) {
    sсreenPrice = null; //почемк здесь выводим скринпрайс, а не ретерн
    break;
  }
  screenPrice = screenPrice.trim().replace(/\s+/g, "");
  screenPrice = screenPrice === "" ? NaN : parseFloat(screenPrice);

  if (isNaN(screenPrice)) {
    alert("Значение не является числом. Пожалуйста, введите число");
  }
} while (isNaN(screenPrice));

//Проверка - логгинг

if (screenPrice === null) {
  console.log("Ввод отменили");
} else {
  console.log("Полученное число", screenPrice, typeof screenPrice);
}

//Усложненное 2

const arr = ["2345", "75367", "32324", "4537", "2332", "4678", "37256"];
const newArr = arr.filter((str) => str.startsWith("2") || str.startsWith("4"));
console.log('Строки, которые начинаются с "2" или "4":', newArr);
