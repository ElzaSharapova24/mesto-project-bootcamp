
const inputName = document.querySelector(".modal__input-avatar-name");
const inputDescr = document.querySelector(".modal__input-avatar-descr");
const profileName = document.querySelector(".profile__avatar-name");
const profileDescription = document.querySelector(".profile__avatar-description");

function openModalWindow(modal) {
  modal.classList.add("modal__is-opened");
  console.log('click')
  document.addEventListener('keydown', closeModalClick)
}

//закрытие модального окна

  function closeModalWindow(modal) {
    modal.classList.remove("modal__is-opened");
    setTimeout(() => modal.querySelector('form').reset(), 400);
  }

function closeModalClick(evt) {
  if (
    evt.target === evt.currentTarget || evt.target.classList.contains("modal__btn-close") || evt.code === 'Escape') {
    console.log('close');
    const activeModal = document.querySelector(".modal.modal__is-opened");
    closeModalWindow(activeModal);
    document.removeEventListener('keydown', closeModalClick)
  }
}


export { openModalWindow, closeModalClick, closeModalWindow, inputName, inputDescr, profileName, profileDescription }
