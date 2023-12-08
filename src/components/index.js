import "../styles/index.css";
import "./validate";
import {
  openModalWindow,
  closeModalClick,
  inputName,
  inputDescr,
  profileName,
  profileDescription,
} from "./modal";
import { renderCard } from "./card";

const modalEditElement = document.querySelector(".modal_type_edit");
const modalAddElement = document.querySelector(".modal_type_add");
const modalGalleryElement = document.querySelector(".modal_type_img");
const btnEditModal = document.querySelector(".profile__btn");
const btnAddModal = document.querySelector(".profile__button");
const formEditElement = document.querySelector(".modal__form-edit");
const formAddElement = document.querySelector(".modal__form-add");

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

  const inputGetName = formAddElement.querySelector(".modal__input-name");
  const inputGetLink = formAddElement.querySelector(".modal__input-link");

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

formEditElement.addEventListener("submit", handleFormEditSubmit);
formAddElement.addEventListener("submit", handleOpenForm);

btnEditModal.addEventListener("click", function () {
  formEditElement.reset();
  inputName.value = profileName.innerText;
  inputDescr.value = profileDescription.innerText;
  openModalWindow(modalEditElement);
});

btnAddModal.addEventListener("click", () => {
  formAddElement.reset();
  openModalWindow(modalAddElement);
});

modalEditElement.addEventListener("mousedown", closeModalClick);
modalAddElement.addEventListener("mousedown", closeModalClick);
modalGalleryElement.addEventListener("mousedown", () =>
  closeModalClick(modalGalleryElement)
);

export {
  handleFormEditSubmit,
  handleOpenForm,
  formEditElement,
  modalGalleryElement,
};
