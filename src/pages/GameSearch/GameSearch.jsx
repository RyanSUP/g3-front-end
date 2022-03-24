/*-- Helpers --*/
import { useState } from "react";

/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const GameSearch = ({allGames}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const handleGameSearch = formData => {
    console.log(formData)
    // This is where I will check state for the formData
    // Look through all of the games in state
    // filter games that matches name
    // regex to the rescue
    console.log(allGames)
    const regex =  new RegExp(formData.name,'gi')
    console.log('regex', regex)
    let matchingGames = allGames.filter(game => 
    (
      game.name.search(regex) > -1) ? true : false
    )
    console.log('matching games', matchingGames)
  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
    </>
  )

}

export default GameSearch