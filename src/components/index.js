import '../styles/index.css';
import './validate'
import { openModalWindow, closeModalClick, handleFormEditSubmit, handleOpenForm, inputName, inputDescr, profileName, profileDescription } from "./modal";



const modalEditElement = document.querySelector(".modal_type_edit");
const modalAddElement = document.querySelector(".modal_type_add");
const btnEditModal = document.querySelector(".profile__btn");
const btnAddModal = document.querySelector(".profile__button");
const formAddElement = document.querySelector(".modal__form");
const formEditElement = document.querySelector(".modal__form-add");
const modalGalleryElement = document.querySelector(".modal_type_img");
const modalCloseGallery = modalGalleryElement.querySelector(".modal__btn-close");


formEditElement.addEventListener("submit", handleOpenForm);
formAddElement.addEventListener("submit", handleFormEditSubmit);

btnEditModal.addEventListener("click", function () {
  inputName.value = profileName.innerText;
  inputDescr.value = profileDescription.innerText;
  openModalWindow(modalEditElement);
});
modalCloseGallery.addEventListener("click", () => closeModalClick(modalGalleryElement));
btnAddModal.addEventListener("click", () => openModalWindow(modalAddElement));
modalEditElement.addEventListener("mousedown", closeModalClick);
modalAddElement.addEventListener("mousedown", closeModalClick);

export { handleFormEditSubmit, handleOpenForm, formEditElement, modalGalleryElement, }


