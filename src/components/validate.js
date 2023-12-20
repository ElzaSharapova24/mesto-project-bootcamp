function enableValidationForm(config) {
  const formList = document.querySelectorAll(config.formSelector);

  formList.forEach(function (formItem) {
    formItem.addEventListener("reset", () => {
      formItem
        .querySelectorAll(config.inputErrorElement)
        .forEach((e) => (e.innerText = ""));
    });
    setEventListener(formItem, config);
  });
}
enableValidationForm({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__btn",
  inactiveButtonClass: "modal__btn-disabled",
  inputErrorClass: "modal__input_type_error",
  inputErrorElement: ".modal__input-error",
});

function setEventListener(formItem, config) {
  const inputList = formItem.querySelectorAll(config.inputSelector);
  const btnSubmit = formItem.querySelector(config.submitButtonSelector);

  inputList.forEach(function (inputItem) {
    inputItem.addEventListener("input", function () {
      checkValidity(inputItem, formItem, config);
      toggleButtonState(btnSubmit, formItem.checkValidity(), config);
    });
  });
  
  formItem.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  
  formItem.addEventListener("reset", function (evt) {
    toggleButtonState(btnSubmit, false, config);
  });
}

function checkValidity(inputItem, formItem, config) {
  const isInputValidity = inputItem.checkValidity();
  const formErrorMessage = formItem.querySelector(`#${inputItem.name}-error`);

  if (isInputValidity) {
    hideInputError(inputItem, formErrorMessage, config);
  } else {
    showInputError(inputItem, formErrorMessage, config);
  }
}

function toggleButtonState(btnElement, isActive, config) {
  if (isActive) {
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



export {
  enableValidationForm,
  setEventListener,
  checkValidity,
  toggleButtonState,
  showInputError,
  hideInputError,
};
