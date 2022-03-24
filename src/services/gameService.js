const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/games`


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