import "../styles/index.css";
import "./validate";
import {
  openModalWindow,
  closeModalClick,
} from "./modal";
import {addCard, editProfile, getAllCards, getUserInfo, updateUserAvatar} from "./api";
import {createCard} from "./card";
import {
  btnAddModal, btnEditAvatar, btnEditModal, btnSubmitElements,
  formAddElement, formEditAvatar,
  formEditElement,
  inputDescr, inputGetLink, inputGetName,
  inputName, modalAddElement, modalEditAvatarEl,
  modalEditElement, modalGalleryElement, modalInputUsersAvatar, picturesContainer,
  profileDescription,
  profileName, userAvatarImg,
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
  submitElemAdd();
  
  const nameValue = inputName.value;
  const descrValue = inputDescr.value;
  const profileData = {name: nameValue, about: descrValue};
  
  editProfile(profileData).then(dataFromServer => {
    profileName.textContent = dataFromServer.name;
    profileDescription.textContent = dataFromServer.about;
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    submitElemDel();
  })
  
  closeModalClick(evt);
}


function handleOpenAddForm(evt) {
  evt.preventDefault();
  submitElemAdd();
  
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
    submitElemDel();
  })
  closeModalClick(evt);
}

function handleEditAvatarElement(evt) {
  evt.preventDefault();
  submitElemAdd();
  
  const userAvatarValue = modalInputUsersAvatar.value
  
  const userAvatar = {
    avatar:userAvatarValue
  }
  updateUserAvatar(userAvatar).then(e => {
    userAvatarImg.src = userAvatar.avatar
    closeModalClick(evt);
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    submitElemDel();
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
      console.log(cards)
    });
}

function renderInitialUserInfo(){
  getUserInfo()
    .then(e => {
      profileName.textContent = e.name;
      profileDescription.textContent = e.about
      userAvatarImg.src = e.avatar
      
    })
}


formEditElement.addEventListener("submit", getEditFormValue);
formAddElement.addEventListener("submit", handleOpenAddForm);
formEditAvatar.addEventListener("submit", handleEditAvatarElement);

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

btnEditAvatar.addEventListener("click", () => {
  formEditAvatar.reset();
  openModalWindow(modalEditAvatarEl)
});

modalEditElement.addEventListener("mousedown", closeModalClick);
modalAddElement.addEventListener("mousedown", closeModalClick);
modalGalleryElement.addEventListener("mousedown", () =>
  closeModalClick(modalGalleryElement)
);
modalEditAvatarEl.addEventListener("mousedown", closeModalClick)

renderInitialCards();
renderInitialUserInfo();


export {
  getEditFormValue,
  handleOpenAddForm,
  formEditElement,
  modalGalleryElement,
  renderInitialCards,
  createCard
};
