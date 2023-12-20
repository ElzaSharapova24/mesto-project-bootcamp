import "../styles/index.css";
import "./validate";
import {
  openModalWindow,
  closeModalClick,
} from "./modal";
import {addCard, editProfile, getInitialCards, getUserInfo, updateUserAvatar} from "./api";
import {createCard} from "./card";
import {
  btnAddModal, btnEditAvatar, btnEditModal,
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

function submitElemAdd(btnSubmitElem) {
    setStatusBtn({
      btn: btnSubmitElem,
      text: 'Сохранение...',
      disabled: true
    });
}

function submitElemDel(btnSubmitElem) {
    setStatusBtn({
      btn: btnSubmitElem,
      text: 'Сохранить',
      disabled: false
    });
}


function getEditFormValue(evt) {
  evt.preventDefault();
  submitElemAdd(evt.submitter);
  
  const nameValue = inputName.value;
  const descrValue = inputDescr.value;
  const profileData = {name: nameValue, about: descrValue};
  
  editProfile(profileData).then(dataFromServer => {
    profileName.textContent = dataFromServer.name;
    profileDescription.textContent = dataFromServer.about;
    closeModalClick(modalEditElement);
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    submitElemDel(evt.submitter);
  })
  
}


function handleOpenAddForm(evt) {
  evt.preventDefault();
  submitElemAdd(evt.submitter);
  
  const nameValue = inputGetName.value;
  const linkValue = inputGetLink.value;

  const cardData = {
    name: nameValue,
    link: linkValue,
  };
  addCard(cardData).then(response => {
    renderCard(response, response.owner._id);
    closeModalClick(modalAddElement);
    formEditElement.reset();
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    submitElemDel(evt.submitter);
  })
}

function handleEditAvatarElement(evt) {
  evt.preventDefault();
  submitElemAdd(evt.submitter);
  
  const userAvatarValue = modalInputUsersAvatar.value
  
  const userAvatar = {
    avatar:userAvatarValue
  }
  
  updateUserAvatar(userAvatar).then(e => {
    userAvatarImg.src = userAvatar.avatar
    closeModalClick(modalEditAvatarEl);
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    submitElemDel(evt.submitter);
  })
}

function renderCard(data, myId) {
  const newCard = createCard(data, myId);
  picturesContainer.prepend(newCard);
}

function renderInitialCards(myId) {
  getInitialCards()
    .then(cards => {
      cards.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      cards.forEach(data => renderCard(data, myId));
    }).catch((error) => {
    console.log(error);
  })
}

function renderInitialUserInfo(){
  getUserInfo()
    .then(response => {
      profileName.textContent = response.name;
      profileDescription.textContent = response.about;
      userAvatarImg.src = response.avatar;
      renderInitialCards(response._id);
    }).catch((error) => {
    console.log(error);
  })
}


formEditElement.addEventListener("submit", getEditFormValue,);
formAddElement.addEventListener("submit", handleOpenAddForm);
formEditAvatar.addEventListener("submit", handleEditAvatarElement);

btnEditModal.addEventListener("pointerdown", function () {
  formEditElement.reset();
  inputName.value = profileName.innerText;
  inputDescr.value = profileDescription.innerText;
  openModalWindow(modalEditElement);
});

btnAddModal.addEventListener("pointerdown", () => {
  formAddElement.reset();
  openModalWindow(modalAddElement);
});

btnEditAvatar.addEventListener("pointerdown", () => {
  formEditAvatar.reset();
  openModalWindow(modalEditAvatarEl);
});

modalEditElement.addEventListener("mousedown", closeModalClick);
modalAddElement.addEventListener("mousedown", closeModalClick);
modalGalleryElement.addEventListener("mousedown", (evt) =>
  closeModalClick(evt)
);

modalEditAvatarEl.addEventListener("mousedown", closeModalClick);

renderInitialUserInfo();


export {
  getEditFormValue,
  handleOpenAddForm,
  formEditElement,
  modalGalleryElement,
  renderInitialCards,
  createCard
};
