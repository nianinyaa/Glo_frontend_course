"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

// const element = new DomElement(".container", 200, 300, "#f0f0f0", 16);
// console.log(element.selector);
// console.log(element.width);

DomElement.prototype.createElement = function () {
  let element;

  if (this.selector.startsWith(".")) {
    element = document.createElement("div");
    element.className = this.selector.slice(1);
  } else if (this.selector.startsWith("#")) {
    element = document.createElement("p");
    element.id = this.selector.slice(1);
  }

  //   element.textContent = "Этот элемент был создан через DomElement";
  const userText = prompt("Какой сегодня день недели?");
  element.textContent = userText || "Текст не введен";

  element.style.cssText = `
  height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px
  `;

  document.body.append(element); //добавит в конец body. Если без этой строчки - то в js создастся, но виден не будет
};

const myElement = new DomElement(".block", 100, 200, "lightblue", 16);

const myElement2 = new DomElement("#weather", 300, 500, "green", 12);

myElement.createElement();

myElement2.createElement();
