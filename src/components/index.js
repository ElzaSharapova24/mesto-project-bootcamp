import '../styles/index.css';
import { initialCards } from './data';


document.addEventListener("DOMContentLoaded", function () {
  const modalEditElement = document.querySelector(".modal_type_edit");
  const modalAddElement = document.querySelector(".modal_type_add");
  const btnEditModal = document.querySelector(".profile__btn");
  const btnAddModal = document.querySelector(".profile__button");
  const modalGalleryElement = document.querySelector(".modal_type_img");
  const modalCloseGallery =
    modalGalleryElement.querySelector(".modal__btn-close");
  const formElement = document.querySelector(".modal__form");
  const form = document.querySelector(".modal__form-add");
  const inputName = document.querySelector(".modal__input-avatar-name");
  const inputDescr = document.querySelector(".modal__input-avatar-descr");
  const profileName = document.querySelector(".profile__avatar-name");
  const profileDescription = document.querySelector(
    ".profile__avatar-description"
  );

  //открытие модального окна

  function openModalWindow(modal) {
    modal.classList.add("modal__is-opened");
  }

  //закрытие модального окна

  function closeModalWindow(modal) {
    modal.classList.remove("modal__is-opened");
  }

  function closeModalClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__btn-close")
    ) {
      const activeModal = document.querySelector(".modal.modal__is-opened");
      closeModalWindow(activeModal);
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

    const nameValue = inputGetName.value;
    const linkValue = inputGetLink.value;

    const cardData = {
      name: nameValue,
      link: linkValue,
    };
    renderCard(cardData);
    closeModalClick(evt);
    form.reset();
  }

  form.addEventListener("submit", handleOpenForm);
  formElement.addEventListener("submit", handleFormEditSubmit);

  btnEditModal.addEventListener("click", function () {
    inputName.value = profileName.innerText;
    inputDescr.value = profileDescription.innerText;
    openModalWindow(modalEditElement);
  });
  modalCloseGallery.addEventListener("click", () =>
    closeModalClick(modalGalleryElement)
  );
  btnAddModal.addEventListener("click", () => openModalWindow(modalAddElement));
  modalEditElement.addEventListener("mousedown", closeModalClick);
  modalAddElement.addEventListener("mousedown", closeModalClick);

  //отрисовка карточек

  const picturesContainer = document.querySelector(".pictures__cards");
  const picturesTemplate = document.querySelector(".pictures-template").content;
  const inputGetName = form.querySelector(".modal__input-name");
  const inputGetLink = form.querySelector(".modal__input-link");
  const modalImage = document.querySelector(".modal__img");
  const modalCaption = document.querySelector(".modal__caption");

  // добавление и отрисовка карточек

  function renderCard(data) {
    const newCard = createCard(data);
    picturesContainer.prepend(newCard);
  }

  function createCard({ name, link }) {
    const pictureElement = picturesTemplate
      .querySelector(".picture")
      .cloneNode(true);

    const picturesCardImg = pictureElement.querySelector(".picture__card-img");
    const picturesCardTitle = pictureElement.querySelector(
      ".picture__card-title"
    );

    picturesCardTitle.textContent = name;
    picturesCardImg.src = link;
    picturesCardImg.alt = name;

    const btnDeleteCard = pictureElement.querySelector(".modal__btb-delete");
    const btnLike = pictureElement.querySelector(".picture__card-btn");

    btnLike.addEventListener("click", () => {
      btnLike.classList.toggle("picture__card-btn--active");
    });

    picturesCardImg.addEventListener("click", function () {
      modalImage.src = link;
      modalImage.alt = name;
      modalCaption.innerHTML = name;
      openModalWindow(modalGalleryElement);
    });

    btnDeleteCard.addEventListener("click", () => pictureElement.remove());

    return pictureElement;
  }

  function renderInitialCards() {
    initialCards.forEach(renderCard);
  }
  renderInitialCards();

  // validation

  function enableValidationForm(config) {
    const formList = document.querySelectorAll(
      config.formSelector
    );

    formList.forEach(function (formItem) {
      setEventListener(formItem, config);
    });
  }
  enableValidationForm({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__btn",
    inactiveButtonClass: "modal__btn-disabled",
    inputErrorClass: "modal__input_type_error",
  });

  function setEventListener(
    formItem,
    config,
  ) {
    const inputList = formItem.querySelectorAll(
      config.inputSelector
    );
    const btnSubmit = formItem.querySelector(
      config.submitButtonSelector
    );
    disabledButton(
      btnSubmit,
      formItem.checkValidity(),
      config,
    );

    inputList.forEach(function (inputItem) {
      inputItem.addEventListener("input", function () {
        checkValidity(inputItem, formItem, config);
        disabledButton(
          btnSubmit,
          formItem.checkValidity(),
          config,
        );
      });

      formItem.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
    });
  }

  function checkValidity(inputItem, formItem, config) {
    const isInputValidity = inputItem.validity.valid;
    const formErrorMessage = formItem.querySelector(`#${inputItem.name}-error`);

    if (!isInputValidity) {
      showInputError(inputItem, formErrorMessage, config);
    } else {
      hideInputError(inputItem, formErrorMessage, config);
    }
  }

  function disabledButton(btnElement, isActive, config) {
    if (isActive) {
      console.log(isActive);
      btnElement.disabled = false;
      btnElement.classList.remove(config.inactiveButtonClass);
    } else {
      btnElement.disabled = true;
      btnElement.classList.add(config.inactiveButtonClass);
    }
  }

  function showInputError(inputItem, formErrorMessage, config) {
    inputItem.classList.add(config.inputErrorClass);
    formErrorMessage.textContent = inputItem.validationMessage;
  }

  function hideInputError(inputItem, formErrorMessage, config) {
    inputItem.classList.remove(config.inputErrorClass);
    formErrorMessage.textContent = inputItem.validationMessage;
  }

});
