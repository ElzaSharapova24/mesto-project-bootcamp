import {renderCard} from "./card";
import {formEditElement} from "./index";

const inputName = document.querySelector(".modal__input-avatar-name");
const inputDescr = document.querySelector(".modal__input-avatar-descr");
const profileName = document.querySelector(".profile__avatar-name");
const profileDescription = document.querySelector(".profile__avatar-description");

function openModalWindow(modal) {
  modal.classList.add("modal__is-opened");
  window.addEventListener('keydown', closeModalClick)
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
    
    window.removeEventListener('keydown', closeModalClick)
  }
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();

  const nameValue = inputName.value;
  const descrValue = inputDescr.value;

  profileName.textContent = nameValue;
  profileDescription.textContent = descrValue;
  closeModalClick(evt);
}

function handleOpenForm(evt) {
  evt.preventDefault();
  const inputGetName = formEditElement.querySelector(".modal__input-name");
  const inputGetLink = formEditElement.querySelector(".modal__input-link");

  const nameValue = inputGetName.value;
  const linkValue = inputGetLink.value;

  const cardData = {
    name: nameValue,
    link: linkValue,
  };
  renderCard(cardData);
  closeModalClick(evt);
  formEditElement.reset();
}

export { openModalWindow, closeModalClick, closeModalWindow, handleFormEditSubmit, handleOpenForm, inputName, inputDescr, profileName, profileDescription }
