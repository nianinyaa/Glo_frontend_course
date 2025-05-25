import sendForm from "./sendForm.js";


const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  menu.addEventListener("click", (e) => {
    // console.log(e.target);

    if (e.target.classList.contains(".close-btn") || e.target.closest("li a")) {
      handleMenu();
    }

    menuBtn.addEventListener("click", () => {
      handleMenu();
    });
  });

  const handleMenu = () => {
    // if (!menu.style.transform) {
    //   menu.style.transform = `translateX(0)`; // открытие меню через  inline css- свойства
    // } else {
    //   menu.style.transform = ``; // привели в базовое состояние
    // }

    menu.classList.toggle("active-menu");
  };
  console.log(menuItems);

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  // for (let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].addEventListener("click", handleMenu);
  // }

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );
};


//добавила ниже скрипт для оправки данных на сервер из формы внизу страницы. не знаю куда лучше это вставить 

const footerForm = document.getElementById("form2");
if (footerForm) {
  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendForm(footerForm);
    alert("Спасибо! Ваша заявка отправлена.");
  });
}

export default menu;
