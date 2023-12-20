function openModalWindow(modal) {
  modal.classList.add("modal__is-opened");
  document.addEventListener("keydown", closeModalClick);
}

//закрытие модального окна

function closeModalWindow(modal) {
  modal.classList.remove("modal__is-opened");
  document.removeEventListener("keydown", closeModalClick);
}

function closeModalClick(evt) {
  const activeModal = document.querySelector(".modal.modal__is-opened");
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__btn-close") ||
    evt.code === "Escape"
  ) {
    closeModalWindow(activeModal);
  }
}

export {
  openModalWindow,
  closeModalClick,
  closeModalWindow,
};
