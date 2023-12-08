

function enableValidationForm(config) {
  const formList = document.querySelectorAll(
    config.formSelector
  );

  formList.forEach(function (formItem) {
    formItem.addEventListener("reset", () => {
      console.log('qweqw');
      formItem
        .querySelectorAll('.modal__input-error')
        .forEach(e => e.innerText = '')
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

  if (isInputValidity) {
    hideInputError(inputItem, formErrorMessage, config);
  } else {
    showInputError(inputItem, formErrorMessage, config);
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


export { enableValidationForm,setEventListener, checkValidity, disabledButton, showInputError, hideInputError}
