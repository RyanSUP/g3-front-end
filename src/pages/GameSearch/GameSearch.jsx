/*-- Helpers --*/
import { useState } from "react";
import * as apiServices from '../../services/atlasAPIService'

/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'
const GameSearch = ({allGames}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const searchDatabaseForGame = gameName => {
    const regexGameName =  new RegExp(gameName,'gi')
    return allGames.filter(game => (game.name.search(regexGameName) > -1) ? true : false)
  }

  const searchAPIForGame = gameName => {
    // Will return empty array if no results are found
    return apiServices.searchGameByName(gameName)
    .then(apiMatches => apiMatches?.games)
  }  
  const handleGameSearch = async formData => {
    // Don't accept an empty form because it will result in querying the api for the top 30 games.. might be a good way to initially populate this page though.
    if(formData.name === '') { return }

    let matches = searchDatabaseForGame(formData.name)
    if (matches.length === 0) { matches = await searchAPIForGame(formData.name) }
    setSearchResults(matches)
  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
    </>
  )

}

export default GameSearch