/*-- Helpers --*/
import { useState } from "react";
import * as apiServices from '../../services/atlasAPIService'

/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'
const GameSearch = ({allGames}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const handleGameSearch = formData => {
    const regex =  new RegExp(formData.name,'gi')
    let databaseMatches = allGames.filter(game => 
    (
      game.name.search(regex) > -1) ? true : false
    )
    console.log(databaseMatches.length, `${formData.name} matches returned from our database`)
    console.log('matches:', databaseMatches)
    
    if(databaseMatches.length === 0) {
      // hit the api
      apiServices.searchGameByName(formData.name)
      .then(apiMatches => {
        console.log(apiMatches?.games.length, `${formData.name} matches returned from api query`)
        console.log('matches:', apiMatches?.games)
      })
    }

  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
    </>
  )

}

export default GameSearch