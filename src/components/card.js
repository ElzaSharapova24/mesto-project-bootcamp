import { openModalWindow } from "./modal";
import {
  modalGalleryElement,
  modalCaption,
  modalImage, picturesTemplate
} from "./main";
import {deleteCard} from "./api";

// добавление и отрисовка карточек

function createCard({ name, link, _id, likes}) {
  
  const pictureElement = picturesTemplate
    .querySelector(".picture")
    .cloneNode(true);
  
  const picturesCardImg = pictureElement.querySelector(".picture__card-img");
  const picturesCardTitle = pictureElement.querySelector(
    ".picture__card-title"
  );
  const btnDeleteCard = pictureElement.querySelector(".modal__btb-delete");
  const btnLike = pictureElement.querySelector(".picture__card-btn");
  const likesCounter = pictureElement.querySelector('.picture__counter');

  picturesCardTitle.textContent = name;
  picturesCardImg.src = link;
  picturesCardImg.alt = name;

  btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("picture__card-btn--active");
  });

  picturesCardImg.addEventListener("click", function () {
    modalImage.src = link;
    modalImage.alt = name;
    modalCaption.innerHTML = name;
    openModalWindow(modalGalleryElement);
  });
  btnDeleteCard.addEventListener("click", () => {
    deleteCard(_id).then(e => {
      pictureElement.remove()
    })
  });
  return pictureElement;
}



export { createCard };
