document.addEventListener('DOMContentLoaded', function () {
    const modalEditElement = document.querySelector('.modal_type_edit');
    const modalAddElement = document.querySelector('.modal_type_add');
    const modalGalleryElement = document.querySelector('.modal_type_img');
    const editModalBtn = document.querySelector('.profile__btn');
    const addModalBtn = document.querySelector('.profile__button');
    const addImgModal = document.querySelector('.picture__card-img');
    const formElement = document.querySelector('.modal__form');
    const inputName = document.querySelector('.modal__input-avatar-name');
    const inputDescr = document.querySelector('.modal__input-avatar-descr');
    const inputButton = document.querySelector('.modal__btn');
    const profileName = document.querySelector('.profile__avatar-name');
    const profileDescription = document.querySelector('.profile__avatar-description');

    //открытие модального окна

    function openModalWindow(modal) {
        modal.classList.add('modal__is-opened');
        inputName.value = profileName.innerText;
        inputDescr.value =  profileDescription.innerText;
    }

    //закрытие модального окна

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


    formElement.addEventListener('submit', handleFormSubmit);


    editModalBtn.addEventListener('click', () => openModalWindow(modalEditElement));
    addModalBtn.addEventListener('click', () => openModalWindow(modalAddElement));
    modalEditElement.addEventListener('mousedown', closeModalClick);
    modalAddElement.addEventListener('mousedown', closeModalClick);

})


