import { useState } from "react/cjs/react.production.min";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchGames } from "../../services/gameService";



const GameSearch = (props) => {
  const [games, setGames] = useState([])

  const handleGameSearch = formData => {
    searchGames(formData)
    .then(gameResults => {
      console.log(gameResults.games)
    })
  }

  return (
    <>
    <SearchForm handleGameSearch={handleGameSearch}/>
      {games.length ? 
      <>
        {games.map((game, idx) => 
          <h2 key={idx}>{game.name}</h2>
          )}
      </>
      :
      <h2>No Games Match</h2>}
    </>
  )

}

export {GameSearch}