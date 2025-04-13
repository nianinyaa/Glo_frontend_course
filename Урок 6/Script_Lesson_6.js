// function start(){
//   const rightAnswer = Math.floor(Math.random() *100) + 1 {
  
//   function guessNumber(){
//     const userInput = prompt("Угадай число от 1 до 100");
    
//     userNumber = parseInt(userInput);

//     if(userNumber > rightAnswer){
//       alert("Загаданное число меньше. Введете еще раз?");
//       guessNumber(); 
//     }

//     if(userNumber < rightAnswer){
//       alert("Загаданное число больше. Введете еще раз?");
//       guessNumber();
//     }

//     if (isNaN(userNumber)){
//       alert("Введи число!");
//       guessNumber();
//     }

//     if(userNumber === null){
//       alert("Игра окончена");
//       guessNumber();
//     }

//     if(userNumber === rightAnswer){
//       alert("Поздравляю, Вы угадали!!!");    }
//       return;
//   }
// }
// guessNumber()
// }
// start()







function start(){
  const rightAnswer = Math.floor(Math.random() *100) +1;

  function guessNumber(){
  const userInput = prompt("Угадай число от 1 до 100");

  if(userNumber === null){
    alert("Игра окончена");
    return;
  }

  userNumber = parseInt(userInput);

  if(
    isNaN(userNumber)){
      alert("Введи число!!")
      guessNumber();
    }
    
    if(userNumber == rightAnswer){
      alert("Поздравляю, Вы угадали!!!");
    return;
    }
    
   if (userNumber > rightAnswer){
      alert("Загаданное число меньше");

   }else (userNumber < rightAnswer){
    alert("Загаданное число  больше");
  } 
  guessNumber();

}
guessNumber();

}

start();