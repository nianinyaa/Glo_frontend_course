import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import {startModal} from "./modules/modal.js";
import {initCalculator, initCyrillicValidation, initEmailValidation, initPhoneValidation} from "./modules/calc.js"
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calculator from "./modules/calculator.js";
import sendForm from "./modules/sendForm.js";

document.addEventListener("DOMContentLoaded", () => {
    timer("30 may 2025");
    menu();
    startModal();
    initCalculator();
    initCyrillicValidation();
    initEmailValidation();
    initPhoneValidation();
    tabs();
    slider();
    calculator();
    sendForm({
      formId: 'form', 
      someElem: [
        {
          type: 'block',
          id: 'total'
        }
      ]})
  });
  
