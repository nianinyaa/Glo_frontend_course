import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import {initCalculator, initCyrillicValidation, initEmailValidation, initPhoneValidation} from "./modules/calc.js"
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", () => {
    timer("15 may 2025");
    menu();
    modal();
    initCalculator();
    initCyrillicValidation();
    initEmailValidation();
    initPhoneValidation();
    tabs();
    slider();
  });
  
