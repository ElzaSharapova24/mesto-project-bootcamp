const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];

const picturesContainer = document.querySelector('.pictures__list');
const picturesTemplate = document.querySelector(".pictures-template").content;
const form = document.querySelector('.modal__form-input');


// добавление и отрисовка карточек

function renderCard(data) {
    const newCard = createCard(data)
    picturesContainer.prepend(newCard)
}

function createCard({ name, link }) {
    const placeElement = picturesTemplate
        .querySelector(".pictures__list-item")
        .cloneNode(true);


    placeElement.querySelector(".picture__card-title").textContent = name;
    placeElement.querySelector(".picture__card-img").src = link;
    placeElement.querySelector(".picture__card-img").alt = name;

    const deleteCard = placeElement.querySelector('.modal__btb-delete');
    const likeElement = placeElement.querySelector('.picture__card-btn');
    likeElement.addEventListener('click', () => {
        likeElement.classList.toggle('picture__card-btn--active');
    })

    deleteCard.addEventListener('click', () => placeElement.remove())
    // ищешь кнопку лайка и вешаешь на нее обрабочтик события клика


    return placeElement;
}

function renderInitialCards() {
    initialCards.forEach(renderCard);
}


renderInitialCards();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const getName = form.querySelector('.modal__input-name');
    const getLink = form.querySelector('.modal__input-link');

    const nameValue = getName.value;
    const linkValue = getLink.value;

    const cardData = {
        name: nameValue,
        link: linkValue,
    };
    renderCard(cardData);
    closeModalClick(e);
} );

function closeModalWindow(modal) {
    modal.classList.remove('modal__is-opened');
}

function closeModalClick(e) {
    if (
        e.target === e.currentTarget ||
        e.target.classList.contains('modal__btn-close')
    ) {
        const activeModal = document.querySelector('.modal.modal__is-opened');
        closeModalWindow(activeModal);
        form.reset();
    }
}




