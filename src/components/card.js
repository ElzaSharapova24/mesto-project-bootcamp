import { openModalWindow } from "./modal";
import {
  modalGalleryElement,
  modalCaption,
  modalImage,
} from "./main";
import {deleteCard, updateLikes} from "./api";

// добавление и отрисовка карточек

function createCard({ name, link, _id, likes}) {
  const pictureElement = document.querySelector(".pictures-template").content.querySelector('.picture').cloneNode(true);
  const picturesCardImg = pictureElement.querySelector(".picture__card-img");
  const picturesCardTitle = pictureElement.querySelector(".picture__card-title");
  const btnDeleteCard = pictureElement.querySelector(".modal__btb-delete");
  const btnLike = pictureElement.querySelector(".picture__card-btn");
  let likesCounter = pictureElement.querySelector('.picture__counter');
  
  const myId = '0736c54fa6ffc6a883ecc274';
  const userId = _id;
  
  const myLike =  likes.find(like => like._id === myId)
  
  let liked = myLike !== undefined;
  
  picturesCardTitle.textContent = name;
  picturesCardImg.src = link;
  picturesCardImg.alt = name;
  
  
  if (liked === true) {
    btnLike.classList.add("picture__card-btn--active");
  } else {
    btnLike.classList.remove("picture__card-btn--active");
  }
  
  likesCounter.textContent = likes.length

  btnLike.addEventListener("click", () => {
    updateLikes(userId, liked).then(response => {
      likesCounter.textContent = response.likes.length
      liked = !liked;
      btnLike.classList.toggle("picture__card-btn--active");
    }).catch((error) => {
      console.log(error)
    })
  });

  picturesCardImg.addEventListener("click", function () {
    modalImage.src = link;
    modalImage.alt = name;
    modalCaption.innerHTML = name;
    openModalWindow(modalGalleryElement);
  });
  
    btnDeleteCard.addEventListener("click", () => {
      deleteCard(userId).then(e => {
        pictureElement.remove()
      }).catch((error) => {
        console.log(error)
      })
    });
    
  console.log(likes);
  return pictureElement;
}

export { createCard };
