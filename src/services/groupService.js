import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/groups`



function create(group) {
  console.log(group)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(group)
  })
  .then(res => res.json())
}


async function getAllGroups() {
  return fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

async function getGroup(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

const addMember = (id, profile)  => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
    body: JSON.stringify(profile._id),
  })
  .then(res => res.json())
}


export {
  create,
  getAllGroups,
  getGroup,
  addMember
}