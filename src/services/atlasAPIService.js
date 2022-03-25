const CLIENT_ID = `${process.env.CLIENT_ID}`
const BASE_URL = `https://api.boardgameatlas.com/api`

const searchGames = (formData) => {
  console.log(formData)
  return fetch(`${BASE_URL}/search?&name=${formData.query}&client_id=${CLIENT_ID}`)
  .then(res => res.json())
}

const searchGameByName = (name) => {
  console.log(name)
  return fetch(`${BASE_URL}/search?&name=${name}&client_id=${CLIENT_ID}`)
  .then(res => res.json())
}

export {
  searchGames,
  searchGameByName,
}