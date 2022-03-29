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
  console.log(id)
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

const addGathering = (id, gathering) => {
  return fetch(`${BASE_URL}/${id}/gatherings`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}` 
    },
    body: JSON.stringify(gathering),
  })
  .then(res => res.json())
}

const deleteGroup = (id) => {
  return fetch(`${BASE_URL}/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
}

const deleteGathering = (groupId, gatheringId) => {
  return fetch(`${BASE_URL}/${groupId}/${gatheringId}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
}

const updateGathering = (groupId, gathId) => {
  return fetch(`${BASE_URL}/${groupId}/gatherings/${gathId}`,{
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

export {
  create,
  getAllGroups,
  getGroup,
  addMember,
  addGathering,
  deleteGroup,
  // deleteGathering
  updateGathering,
}
