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

export {
  create
}