function showTime() {
  const now = new Date();
  const dayPart = now.getHours();

  let greeting;
  if (dayPart > 0 && dayPart < 5) {
    greeting = "Доброй ночи!";
  } else if (dayPart < 12 && dayPart > 5) {
    greeting = "Доброе утро!";
  } else if (dayPart < 18 && dayPart > 12) {
    greeting = "Добрый день!";
  } else {
    greeting = "Добрый вечер!";
  }

  const weekDay = now.toLocaleDateString("ru", { weekday: "long" });

  const time = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const nextYear = now.getFullYear() + 1;
  const nextYearDate = new Date(nextYear, 0, 1);

  const diff = nextYearDate - now; // в милисек

  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("time").innerHTML = `
        <p>${greeting}</p>
        <p>Сегодня: ${weekDay}</p>
        <p>Текущее время: ${time}</p>
        <p>До нового года осталось: : ${diffDays} дней</p>
    `;
}
showTime();
setInterval(showTime, 1000);
