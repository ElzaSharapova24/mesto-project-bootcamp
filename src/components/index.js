import '../styles/index.css';
import './validate'
import { openModalWindow, closeModalClick, handleFormEditSubmit, handleOpenForm, inputName, inputDescr, profileName, profileDescription } from "./modal";



const modalEditElement = document.querySelector(".modal_type_edit");
const modalAddElement = document.querySelector(".modal_type_add");
const modalGalleryElement = document.querySelector(".modal_type_img");
const btnEditModal = document.querySelector(".profile__btn");
const btnAddModal = document.querySelector(".profile__button");
const formAddElement = document.querySelector(".modal__form-edit");
const formEditElement = document.querySelector(".modal__form-add");


formEditElement.addEventListener("submit", handleOpenForm);
formAddElement.addEventListener("submit", handleFormEditSubmit);

btnEditModal.addEventListener("click", function () {
  inputName.value = profileName.innerText;
  inputDescr.value = profileDescription.innerText;
  openModalWindow(modalEditElement);
});
btnAddModal.addEventListener("click", () => openModalWindow(modalAddElement));

modalEditElement.addEventListener("mousedown", closeModalClick);
modalAddElement.addEventListener("mousedown", closeModalClick);
modalGalleryElement.addEventListener("mousedown", () => closeModalClick(modalGalleryElement));

export { handleFormEditSubmit, handleOpenForm, formEditElement, modalGalleryElement, }


