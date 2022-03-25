/*-- Helpers --*/
import { useState } from "react";

/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const GameSearch = ({allGames}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const handleGameSearch = formData => {
    const regex =  new RegExp(formData.name,'gi')
    let matchingGames = allGames.filter(game => 
    (
      game.name.search(regex) > -1) ? true : false
    )
    console.log('matching games', matchingGames)
    // if matching games are empty hit the api
    
  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
    </>
  )

}

export default GameSearch