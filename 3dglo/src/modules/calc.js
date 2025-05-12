const calc = () => {
  const numberInput = document
    .querySelectorAll('input.calc-item[type="text"]')
    .forEach((input) => {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");

        if (this.value == "" || this.value < 1) {
          this.value = 1;
        }

        calculateTotal();
      });
    });

  function calculateTotal() {
    const type = parseFloat(document.querySelector(".calc-type").value);
    const square = parseInt(document.querySelector(".calc-square").value);
    const count = parseInt(document.querySelector(".calc-count").value);
    const days = parseInt(document.querySelector(".calc-day").value);

    let rate = 200; // цена как пример
    const total = Math.round(square * count * days * rate * type); // переопределяем итого

    document.getElementById("total").textContent = total;
  }

  calculateTotal();

  document
    .querySelector(".calc-type")
    .addEventListener("change", calculateTotal); // здесь следит и отображает изменения селекта
};

const textCyrillic = () => {
  const textInputs = document.querySelectorAll(
    `input[type="text"], input.mess[placeholder="Ваше сообщение"]`
  );

  textInputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^а-яА-ЯёЁ\s-]/gi, "");
    });
  });
};

document.addEventListener("DOMContentLoaded", textCyrillic);

const mailValidation = () => {
  const mailInputs = document.querySelectorAll(`input[type="email"]`);

  mailInputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^\w@\-_.!~*']/gi, "");
    });
  });
};

document.addEventListener("DOMContentLoaded", mailValidation);

const numberValidation = () => {
  const numberInput = document.querySelectorAll(`input[type="tel"]`);

  numberInput.forEach((input) => {
    numberInput.addEventListener(input, function () {
      this.value = this.value.replace(`[^\d()\-]/g`, "");
    });
  });
};

export default calc;
