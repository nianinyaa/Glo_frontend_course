const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let intervalId;

  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();

  if (dateStop <= dateNow) {
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
    return;
  }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000; // в 1 сек 1000 милисек. Переводим в сек

    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60); //делим на 60, потому что переводим в минуты, %60 - остаток от деления, потому что вычленям из всех минут часы и выводим остаток
    let seconds = Math.floor(timeRemaining % 60); // остаток от деления на 60

    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    // return {
    //   hours: hours,
    //   minutes: minutes,
    //   seconds: seconds, // современный стандарт упрощает возвращаемый объект. Если ключ совпадает со значением - оставляем одно название
    // }; // -- return{hours, minutes, seconds }

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = String(getTime.hours).padStart(2, "0");
    timerMinutes.textContent = String(getTime.minutes).padStart(2, "0");
    timerSeconds.textContent = String(getTime.seconds).padStart(2, "0");

    // timerHours.textContent = getTime.hours;
    // timerMinutes.textContent = getTime.minutes;
    // timerSeconds.textContent = getTime.seconds;s

    if (getTime.timeRemaining <= 0) {
      clearInterval(intervalId);
      console.log("Время истекло!");
      // } else {
      //   console.log("Работает");
      // }

      if (getTime < deadline) {
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
      }
    }
  };

  intervalId = setInterval(updateClock, 1000);
  updateClock();
};
export default timer;
