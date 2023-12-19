const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-15',
  headers: {
    authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
    'Content-Type': 'application/json'
  }
}

function onResponse(res) {
  return res.ok ? res.json() : res.json().then((error) =>  Promise.reject(`Ошибка: ${error}`))
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  }).then(onResponse)
}

export function addCard(cardData) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(cardData)
  }).then(onResponse);
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers
  }).then(onResponse)
}
//
export function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  }).then(onResponse);
}


export function editProfile(dataProfile) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(dataProfile)
  }).then(onResponse);
}

export function updateLikes(cardId, liked) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: liked ? "DELETE" : "PUT",
    headers: config.headers
  }).then(onResponse)
}

export function updateUserAvatar(dataUserAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(dataUserAvatar)
  }).then(onResponse);
}
