"use strict";

class First {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Привет я метод родителя!"); // Методы должны объявляться на уровне класса, а не внутри конструктора:
  }
  sayHello() {
    console.log(`Привет! Меня зовут ${this.name}`);
  }
}

class Second extends First {
  // создается Second, который наследует через extends свойства у класса First
  constructor(name, age) {
    super(name, age);
  }

  hello() {
    super.hello(); // чтобы не терялся контекст
    console.log("А я наследуемый метод!");
  }
  sayGoodbye() {
    console.log(`До свидания! С вами была ${this.name}`);
  }
}

First.prototype.newMethod = function () {
  console.log(`Сегодня нас ожидает переменная облачность, 10 градусов`);
};

Second.prototype.newMethod2 = function () {
  console.log(`Завтра ожидается солнце, 25 градусов`);
};

const output = new Second("Анна", 25);
output.sayHello();
output.sayGoodbye();
output.hello();
output.newMethod();
output.newMethod2();
