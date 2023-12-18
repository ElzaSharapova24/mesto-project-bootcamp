const modalEditElement = document.querySelector(".modal_type_edit");
const modalAddElement = document.querySelector(".modal_type_add");
const modalGalleryElement = document.querySelector(".modal_type_img");
const btnEditModal = document.querySelector(".profile__btn");
const btnAddModal = document.querySelector(".profile__button");
const formEditElement = document.querySelector(".modal__form-edit");
const formAddElement = document.querySelector(".modal__form-add");
const picturesContainer = document.querySelector(".pictures__cards");
const picturesTemplate = document.querySelector(".pictures-template").content;
const modalImage = document.querySelector(".modal__img");
const modalCaption = document.querySelector(".modal__caption");
const inputName = document.querySelector(".modal__input-avatar-name");
const inputDescr = document.querySelector(".modal__input-avatar-descr");
const profileName = document.querySelector(".profile__avatar-name");
const profileDescription = document.querySelector(
  ".profile__avatar-description"
);
const inputGetName = formAddElement.querySelector(".modal__input-name");
const inputGetLink = formAddElement.querySelector(".modal__input-link");

const btnSubmitElements = document.querySelectorAll('.modal__btn');

export {
  modalCaption,
  picturesContainer,
  modalAddElement,
  modalEditElement,
  inputName,
  profileDescription,
  profileName,
  inputDescr,
  btnAddModal,
  btnEditModal,
  formAddElement,
  formEditElement,
  modalGalleryElement,
  modalImage,
  picturesTemplate,
  inputGetLink,
  inputGetName,
  btnSubmitElements,
};

