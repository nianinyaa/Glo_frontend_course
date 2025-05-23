import { animate } from "./helpers.js";

// 1. animateModal, где захватываем само окно и кнопки со страницы, провнрка на наличие на странице, setTimeout - сама анимация прозрачности
// 2. обработка открытия и закрытия окна и кнопок + нажатие на другие участки сайта 
// 3. адаптация по условию размера экрана 
// 4. запуск функций


const animateModal = () => {
  const windowModal = document.querySelector('.popup-content')
  if(!windowModal) return;


setTimeout(() => {
  animate({
    duration: 1300,
    timing(timeFraction){
      return timeFraction
    },
    draw(progress){
      windowModal.style.opacity = progress;
    }
  });
}, 2000)
};


const startModal = () => { 
  const modal = document.querySelector(".popup");
  if (!modal) return;

  const modalButtons = document.querySelectorAll(".popup-btn");
  const closeButton = modal.querySelector(".popup-close");

  modal.style.display = "none";
  modal.style.opacity = "0";
  modal.style.transition = "opacity 0.3s ease";


  const openModalWindow = () => {
    if (window.innerWidth >= 768) {
      modal.style.display = "block";
      modal.style.top = `${window.innerHeight / 2 - modal.offsetHeight / 2}px`;
      modal.style.left = `${window.innerWidth / 2 - modal.offsetWidth / 2}px`;

      setTimeout(() => {
        modal.style.opacity = "1";
      }, 10);
    }
  };

  const closeModalWindow = () => {
    modal.style.opacity = "0";

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };


  modalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModalWindow();
    });
  });

  // closeBtn.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close"))
      {closeModalWindow()
    }
  })

  closeButton.addEventListener('click', () => closeModalWindow())



  const handleResize = () => {
    if (window.innerWidth < 768) {
      closeModalWindow();
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(openModalWindow, 1000);
    animateModal();
  });

  window.addEventListener("resize", handleResize);
};

startModal()

// animateModal()

export {
  animateModal,
  startModal
}