import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`


async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfile(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

const addGame = (profile_id, game) => {
  // localhost:3000/profile/:id/addGame
  return fetch(`${BASE_URL}/${profile_id}/games`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
    body: JSON.stringify(game),
  })
  .then(res => res.json())
}

const deleteGame = (profile_id, game) => {
  console.log(game)
  return fetch(`${BASE_URL}/${profile_id}/games`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(game),
  })
  .then(res => res.json())
}

const joinGroup = (id, group) => {
  return fetch(`${BASE_URL}/${id}/groups`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
    body: JSON.stringify(group),
  })
  .then(res => res.json())
}

const updatePicture = (profile, formData) => {
  console.log(formData)
  return fetch(`${BASE_URL}/${profile}/`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(formData),
  })
  .then(res => res.json())
}


export { 
  getAllProfiles,  
  getProfile,
  addGame,
  deleteGame,
  joinGroup,
  updatePicture
}
