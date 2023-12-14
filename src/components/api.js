
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
  }).then(e => e.json());
}

export function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: 'bbf4eaaa-f328-4bc0-8623-4b1bddc04a3d',
      "Content-Type": "application/json",
    },
  })
}
