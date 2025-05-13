const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  menu.addEventListener("click", (e) => {
    // console.log(e.target);

    if (e.target.classList.contains("close-btn") || e.target.closest("li a")) {
      menu.classList.toggle("active-menu");
    }
    });
    
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active-menu");
    });
  };

  // for (let i = 0; i < menuItems.length; i++) {
  //   menuItems[i].addEventListener("click", handleMenu);
  // }

//   menuItems.forEach((menuItem) =>
//     menu.classList.toggle("active-menu");
//   );
// };

// const menuManage = () => {
//   const menuBtn = document.querySelector(".menu");
//   const menu = document.querySelector("menu");
//   const closeBtn = menu.querySelector(".close-btn");
//   const menuItems = menu.querySelectorAll("ul>li>a");

//   const menuBtn = document.addEventListener("click", (e) => {
//     console.log("menuBtn");
//   });
// };

export default menu;
