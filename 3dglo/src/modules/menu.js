const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

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

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", handleMenu);
  }

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );
};

export default menu;
