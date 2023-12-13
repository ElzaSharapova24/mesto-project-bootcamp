import "../styles/index.css";
import "./validate";
import {
  openModalWindow,
  closeModalClick,
} from "./modal";
import { initialCards } from "./api";
import {createCard} from "./card";
import {
  btnAddModal, btnEditModal,
  formAddElement,
  formEditElement,
  inputDescr, inputGetLink, inputGetName,
  inputName, modalAddElement,
  modalEditElement, modalGalleryElement, picturesContainer,
  profileDescription,
  profileName
} from "./main";

function getFormEditValue(evt) {
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
  formEditElement.reset();
}

function renderCard(data) {
  const newCard = createCard(data);
  picturesContainer.prepend(newCard);
}

function renderInitialCards() {
  initialCards.forEach(renderCard);
}

formEditElement.addEventListener("submit", getFormEditValue);
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

renderInitialCards();

export {
  getFormEditValue,
  handleOpenForm,
  formEditElement,
  modalGalleryElement,
  renderInitialCards,
  createCard
};
