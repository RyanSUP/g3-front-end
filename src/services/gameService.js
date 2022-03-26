const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/games`

const getAllGames = () => fetch(BASE_URL).then(res => res.json())

const createGame = (gameObj) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gameObj)
  })
}

export {
  getAllGames,
  createGame,
} 
