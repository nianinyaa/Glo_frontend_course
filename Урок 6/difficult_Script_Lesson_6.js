
function start(attemptsTotal){
    const rightAnswer = Math.floor(Math.random() *100) +1;
    let attemptsLeft = attemptsTotal; //не оч понятно, почему оставшимся попытками присваивается все попытки / Ответ let attemptsLeft = attemptsTotal - создаёт счётчик попыток для текущей игры Это нужно, чтобы не изменять исходное значение attemptsTotal -- все равно не очень понятно
  
    function guessNumber(){
    const userInput = prompt("Угадай число от 1 до 100");

    if (attemptsLeft <= 0){
        if(confirm("Попытки закончились, хотите сыграть еще?")){
            start(attemptsTotal);
        }
        return; // Проверяется? ечли попыток больше не осталось, то нет смысла дальше идти по коду - return - выкидывает из замыкания
    }
        
    
     if(userNumber === null){
       alert("Игра окончена");
        return;
      }
  
    const userNumber = parseInt(userInput);
  
    if(
      isNaN(userNumber)){
        alert("Введи число!!")
        guessNumber();
      }
      
      if(userNumber == rightAnswer){
        if(confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")){
            start(attemptsTotal);
        };
        return;
      }
      
     if (userNumber > rightAnswer){
        alert(`Загаданное число меньше, осталось попыток: ${attemptsLeft}`); // - не уверена здесь в логике 
  
     }else (userNumber < rightAnswer){
      alert(`Загаданное число больше, осталось попыток: ${attemptsLeft}`);
    }

    attemptsLeft -- //С полным прохождением 1 круга замыкания ( если нет условий, выкидывающих из круга типа попытки закончились) тратится 1 попытка, что и отражается здесь

    guessNumber();
  
  }
  
  guessNumber();
  
  }
  
  start(10);