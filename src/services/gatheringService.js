import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/gatherings`



function create(gathering) {
  console.log(gathering)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(gathering)
  })
    .then(res => res.json())
}



export {
  create
}