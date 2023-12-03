document.addEventListener("DOMContentLoaded", function () {
  const modalEditElement = document.querySelector(".modal_type_edit");
  const modalAddElement = document.querySelector(".modal_type_add");
  const editModalBtn = document.querySelector(".profile__btn");
  const addModalBtn = document.querySelector(".profile__button");
  const formElement = document.querySelector(".modal__form");
  const inputName = document.querySelector(".modal__input-avatar-name");
  const inputDescr = document.querySelector(".modal__input-avatar-descr");
  const profileName = document.querySelector(".profile__avatar-name");
  const profileDescription = document.querySelector(
    ".profile__avatar-description"
  );

  //открытие модального окна

  function openModalWindow(modal) {
    modal.classList.add("modal__is-opened");
    inputName.value = profileName.innerText;
    inputDescr.value = profileDescription.innerText;
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
      formElement.reset();
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let nameValue = inputName.value;
    let descrValue = inputDescr.value;

    profileName.textContent = nameValue;
    profileDescription.textContent = descrValue;
    closeModalClick(e);
  }

  formElement.addEventListener("submit", handleFormSubmit);

  editModalBtn.addEventListener("click", () =>
    openModalWindow(modalEditElement)
  );

  addModalBtn.addEventListener("click", () => openModalWindow(modalAddElement));
  modalEditElement.addEventListener("mousedown", closeModalClick);
  modalAddElement.addEventListener("mousedown", closeModalClick);


  //отрисовка карточек

  const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

  const picturesContainer = document.querySelector(".pictures__cards");
  const picturesTemplate = document.querySelector(".pictures-template").content;
  const form = document.querySelector(".modal__form-input");

  // модальное окно по клику на изображение
  const modalImage = document.querySelector(".modal__img");
  const modalCaption = document.querySelector(".modal__caption");

  // добавление и отрисовка карточек

  function renderCard(data) {
    const newCard = createCard(data);
    picturesContainer.prepend(newCard);
  }

  function createCard({ name, link }) {
    const placeElement = picturesTemplate
      .querySelector(".picture")
      .cloneNode(true);

    placeElement.querySelector(".picture__card-title").textContent = name;
    placeElement.querySelector(".picture__card-img").src = link;
    placeElement.querySelector(".picture__card-img").alt = name;

    const deleteCard = placeElement.querySelector(".modal__btb-delete");
    const likeElement = placeElement.querySelector(".picture__card-btn");
    likeElement.addEventListener("click", () => {
      likeElement.classList.toggle("picture__card-btn--active");
    });

    deleteCard.addEventListener("click", () => placeElement.remove());

    const picture = placeElement.querySelector(".picture__card-img");
    const modalGalleryElement = document.querySelector(".modal_type_img");
    const modalGalleryClose =
      modalGalleryElement.querySelector(".modal__btn-close");

    picture.addEventListener("click", function () {
      modalGalleryElement.classList.add("modal__is-opened");
      modalImage.src = link;
      modalImage.alt = name;
      modalCaption.innerHTML = name;
    });

    modalGalleryClose.addEventListener("click", () =>
      closeModalWindow(modalGalleryElement)
    );

    return placeElement;
  }

  function renderInitialCards() {
    initialCards.forEach(renderCard);
  }

  renderInitialCards();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const getName = form.querySelector(".modal__input-name");
    const getLink = form.querySelector(".modal__input-link");

    const nameValue = getName.value;
    const linkValue = getLink.value;

    const cardData = {
      name: nameValue,
      link: linkValue,
    };
    renderCard(cardData);
    closeModalClick(e);
  });
});
