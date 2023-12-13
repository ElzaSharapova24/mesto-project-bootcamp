import { openModalWindow } from "./modal";
import {modalGalleryElement, modalCaption, modalImage, picturesTemplate} from "./main";

// добавление и отрисовка карточек

function createCard({ name, link }) {
  const pictureElement = picturesTemplate
    .querySelector(".picture")
    .cloneNode(true);

  const picturesCardImg = pictureElement.querySelector(".picture__card-img");
  const picturesCardTitle = pictureElement.querySelector(
    ".picture__card-title"
  );

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
    openModalWindow(modalGalleryElement);
  });

  btnDeleteCard.addEventListener("click", () => pictureElement.remove());

  return pictureElement;
}


export { createCard };
