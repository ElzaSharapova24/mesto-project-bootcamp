function onResponse(res) {
  return res.ok ? res.json() : res.json().then((error) => Promise.reject(error))
}

export function getAllCards() {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards', {
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
    }
  }).then(onResponse)
}

export function addCard(cardData) {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards', {
    method: "POST",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData)
  }).then(onResponse);
}

export function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json",
    },
  }).then(onResponse)
}
//
export function getUserInfo() {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me', {
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json",
    }
  }).then(onResponse);
}


export function editProfile(dataProfile) {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me', {
    method: "PATCH",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(dataProfile)
  }).then(onResponse);
}

export function updateLikes(cardId, liked) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/likes/${cardId}`, {
    method: liked ? "DELETE" : "PUT",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json; charset=UTF-8",
    }
  }).then(onResponse)
}

export function updateUserAvatar(dataUserAvatar) {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me/avatar', {
    method: "PATCH",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(dataUserAvatar)
  }).then(onResponse);
}
