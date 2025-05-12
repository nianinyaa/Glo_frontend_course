const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  // const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  // closeBtn.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

const modalWindow = () => {
  const modalWindow = document.querySelector(".popup"); // находим элементы
  const closeButton = modalWindow.querySelector(".popup-close");

  modalWindow.style.display = "none";
  modalWindow.style.opacity = "0";
  modalWindow.style.transition = "opacity 0.3s ease";

  const openModalWindow = () => {
    if (window.innerWidth >= 768) {
      modalWindow.style.display = "block";
      modalWindow.style.top = `${
        window.innerHeight / 2 - modalWindow.offsetHeight / 2
      }px`;
      modalWindow.style.left = `${
        window.innerWidth / 2 - modalWindow.offsetWidth / 2
      }px`;

      setTimeout(() => {
        modalWindow.style.opacity = "1";
      }, 10);
    }
  };

  const closeModalWindow = () => {
    modalWindow.style.opacity = "0";

    setTimeout(() => {
      modalWindow.style.display = "none"; //   modal.style.opacity = "0";
    }, 300);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      closeModalWindow();
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(openModalWindow, 1000);
    closeButton.addEventListener("click", closeModalWindow);
  });
  window.addEventListener("resize", handleResize);
};
export default modal;
