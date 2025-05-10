// const logger = (str) => {
//   console.log(`Привет, я ${str}"`);
// };
// setTimeout(() => {
//   logger("setTimeout");
// }, 2000); // нужна функция-обертка,
//!! в метод setTimeout надо передавать функцию без ее вызова, за ее вызов отвечает сам setTimeout

setInterval;

const pogger = (str) => {
  console.log(`Привет, я ${str}"`);
};
setInterval(() => {
  pogger("setInterval");
}, 3000);

let idSetTimeout = setTimeout(() => {
  logger("setInterval");
}, 4000);

clearTimeout(idSetTimeout);
