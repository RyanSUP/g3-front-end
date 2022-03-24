const BASE_URL = 'https://api.boardgameatlas.com/api/search?client_id=ORrNK32UuC'


const getAllGames = () => {
  return fetch(BASE_URL)
  .then(res => res.json())
}

const searchGames = (formData) => {
  console.log(formData)
  return fetch(`${BASE_URL}&name=${formData.query}`)
  .then(res => res.json())
}


export {
  getAllGames,
  searchGames
}