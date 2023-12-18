import "../styles/index.css";
import "./validate";
import {
  openModalWindow,
  closeModalClick,
} from "./modal";
import {addCard, editProfile, getAllCards, getProfileInfo} from "./api";
import {createCard} from "./card";
import {
  btnAddModal, btnEditModal, btnSubmitElements,
  formAddElement,
  formEditElement,
  inputDescr, inputGetLink, inputGetName,
  inputName, modalAddElement,
  modalEditElement, modalGalleryElement, picturesContainer,
  profileDescription,
  profileName,
} from "./main";



function setStatusBtn({btn, text, disabled}) {
  if (!disabled) {
    btn.disabled = false
  } else {
    btn.disabled = 'disabled'
  }
  btn.textContent = text
}

function submitElemAdd() {
  btnSubmitElements.forEach(function (btnSubmitElem){
    setStatusBtn({
      btn: btnSubmitElem,
      text: 'Сохранение...',
      disabled: true
    });
  })
}

function submitElemDel() {
  btnSubmitElements.forEach(function (btnSubmitElem){
    setStatusBtn({
      btn: btnSubmitElem,
      text: 'Сохранить',
      disabled: false
    });
  })
}


function getEditFormValue(evt) {
  evt.preventDefault();
  submitElemAdd()
  
  const nameValue = inputName.value;
  const descrValue = inputDescr.value;
  const profileData = {name: nameValue, about: descrValue};
  
  editProfile(profileData).then(dataFromServer => {
    profileName.textContent = dataFromServer.name;
    profileDescription.textContent = dataFromServer.about;
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    submitElemDel()
  })
  
  closeModalClick(evt);
}


function handleOpenAddForm(evt) {
  evt.preventDefault();
  submitElemAdd()
  
  const nameValue = inputGetName.value;
  const linkValue = inputGetLink.value;

  const cardData = {
    name: nameValue,
    link: linkValue,
  };
  addCard(cardData).then(c => {
    renderCard(c);
    closeModalClick(evt);
    formEditElement.reset();
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    submitElemDel()
  })
  closeModalClick(evt);
}

function renderCard(data) {
  const newCard = createCard(data);
  picturesContainer.prepend(newCard);
}

function renderInitialCards() {
  getAllCards()
    .then(cards => {
      cards.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      cards.forEach(renderCard);
      // console.log(cards)
    });
}

function renderInitialProfileInfo(){
  getProfileInfo()
    .then(e => {
      console.log(e);
      profileName.textContent = e.name;
      profileDescription.textContent = e.about
    })
}


formEditElement.addEventListener("submit", getEditFormValue);
formAddElement.addEventListener("submit", handleOpenAddForm);

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
renderInitialProfileInfo();


export {
  getEditFormValue,
  handleOpenAddForm,
  formEditElement,
  modalGalleryElement,
  renderInitialCards,
  createCard
};
