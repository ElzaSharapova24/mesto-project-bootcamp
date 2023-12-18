import { openModalWindow } from "./modal";
import {
  modalGalleryElement,
  modalCaption,
  modalImage, picturesTemplate
} from "./main";
import {deleteCard, updateLikes} from "./api";

// добавление и отрисовка карточек

function createCard({ name, link, _id, likes}) {
  const myId = '0736c54fa6ffc6a883ecc274';
  const userId = _id;
  
  const myLike =  likes.find(like => like._id === myId)
  
  let liked = myLike !== undefined;
  
  const pictureElement = picturesTemplate
    .querySelector(".picture")
    .cloneNode(true);
  
  const picturesCardImg = pictureElement.querySelector(".picture__card-img");
  const picturesCardTitle = pictureElement.querySelector(
    ".picture__card-title"
  );
  const btnDeleteCard = pictureElement.querySelector(".modal__btb-delete");
  const btnLike = pictureElement.querySelector(".picture__card-btn");
  let likesCounter = pictureElement.querySelector('.picture__counter');

  picturesCardTitle.textContent = name;
  picturesCardImg.src = link;
  picturesCardImg.alt = name;
  
  likesCounter.textContent = likes.length
  
  if (liked === true) {
    btnLike.classList.add("picture__card-btn--active");
  } else {
    btnLike.classList.remove("picture__card-btn--active");
  }
  

  btnLike.addEventListener("click", () => {
    updateLikes(userId, liked).then(response => {
      likesCounter.textContent = response.likes.length
      liked = !liked;
      btnLike.classList.toggle("picture__card-btn--active");
    })
  });

  picturesCardImg.addEventListener("click", function () {
    modalImage.src = link;
    modalImage.alt = name;
    modalCaption.innerHTML = name;
    openModalWindow(modalGalleryElement);
  });
  
  if (userId !== myId) {
    btnDeleteCard.addEventListener("click", () => {
      deleteCard(userId).then(e => {
        pictureElement.remove()
      })
    });
  } else {
    btnDeleteCard.style.display = 'none'
  }
  
  return pictureElement;
}

export { createCard };
