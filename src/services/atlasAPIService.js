const CLIENT_ID = 'ORrNK32UuC'
const BASE_URL = `https://api.boardgameatlas.com/api`

const searchGameByName = (name) => {
  return fetch(`${BASE_URL}/search?name=${name}&client_id=${CLIENT_ID}`)
  .then(res => res.json())
}

export {
  searchGameByName,
}