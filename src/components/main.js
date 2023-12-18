const modalEditElement = document.querySelector(".modal_type_edit");
const modalAddElement = document.querySelector(".modal_type_add");
const modalGalleryElement = document.querySelector(".modal_type_img");
const modalEditAvatarEl = document.querySelector(".modal_type_edit_avatar");
const btnEditModal = document.querySelector(".profile__btn");
const btnAddModal = document.querySelector(".profile__button");
const btnEditAvatar = document.querySelector(".profile__info-btn");
const formEditElement = document.querySelector(".modal__form-edit");
const formAddElement = document.querySelector(".modal__form-add");
const formEditAvatar = document.querySelector(".modal__form-edit_avatar");
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
const userAvatarImg = document.querySelector(".profile__avatar");
const inputGetName = formAddElement.querySelector(".modal__input-name");
const inputGetLink = formAddElement.querySelector(".modal__input-link");
const modalInputUsersAvatar = formEditAvatar.querySelector(".modal__input-avatar");
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
  btnEditAvatar,
  formEditAvatar,
  modalEditAvatarEl, modalInputUsersAvatar, userAvatarImg
};

