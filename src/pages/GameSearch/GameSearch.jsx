import { useState, useEffect } from "react/cjs/react.production.min";
import SearchForm from "../../components/SearchForm/SearchForm";
// import { searchGames } from "../../services/gameService";
import { getAllGames } from "../../services/gameService";



const GameSearch = ({allGames}) => {

  // const handleGameSearch = formData => {
  //   searchGames(formData)
  //   .then(gameResults => {
  //     console.log(gameResults.games)
  //   })
  // }

  return (
    <>
    {allGames.map(game =>
      <div key={game._id}>{game.name}</div>)}
    <SearchForm />
      {/* {games.length ? 
      <>
        {games.map((game, idx) => 
          <h2 key={idx}>{game.name}</h2>
          )}
      </>
      : */}
      {/* <h2>No Games Match</h2>} */}
    </>
  )

}

export {GameSearch}