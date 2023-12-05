document.addEventListener("DOMContentLoaded", function () {
  const modalEditElement = document.querySelector(".modal_type_edit");
  const modalAddElement = document.querySelector(".modal_type_add");
  const btnEditModal = document.querySelector(".profile__btn");
  const btnAddModal = document.querySelector(".profile__button");
  const modalGalleryElement = document.querySelector(".modal_type_img");
  const modalCloseGallery = modalGalleryElement.querySelector(".modal__btn-close");
  const formElement = document.querySelector(".modal__form");
  const form = document.querySelector(".modal__form-input");
  const inputName = document.querySelector(".modal__input-avatar-name");
  const inputDescr = document.querySelector(".modal__input-avatar-descr");
  const profileName = document.querySelector(".profile__avatar-name");
  const profileDescription = document.querySelector(".profile__avatar-description");

  //открытие модального окна

  function openModalWindow(modal) {
    modal.classList.add("modal__is-opened");
  }

  //закрытие модального окна

  function closeModalWindow(modal) {
    modal.classList.remove("modal__is-opened");
  }

  function closeModalClick(e) {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains("modal__btn-close")
    ) {
      const activeModal = document.querySelector(".modal.modal__is-opened");
      closeModalWindow(activeModal);
    }
  }

  function handleFormEditSubmit(e) {
    e.preventDefault();

    const nameValue = inputName.value;
    const descrValue = inputDescr.value;

    profileName.textContent = nameValue;
    profileDescription.textContent = descrValue;
    closeModalClick(e);
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
      openModalWindow(modalEditElement)
  });
  modalCloseGallery.addEventListener("click", () => closeModalClick(modalGalleryElement));
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

    const picturesCardImg = pictureElement.querySelector('.picture__card-img');
    const picturesCardTitle = pictureElement.querySelector('.picture__card-title');

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
      openModalWindow(modalGalleryElement)
  });

    btnDeleteCard.addEventListener("click", () => pictureElement.remove());

    return pictureElement;
  }

  function renderInitialCards() {
    initialCards.forEach(renderCard);
  }
  renderInitialCards();
});
