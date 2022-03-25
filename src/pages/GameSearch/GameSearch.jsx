/*-- Helpers --*/
import { useState } from "react";
import * as apiServices from '../../services/atlasAPIService'
import * as gameServices from '../../services/gameService'


/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'
import GameCard from "../../components/GameCard/GameCard";
import GameList from "../../components/GameList/GameList";

const GameSearch = ({allGames, user}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const searchDatabaseForGame = gameName => {
    const regexGameName =  new RegExp(gameName,'i')
    return allGames.filter(game => (game.name.search(regexGameName) > -1) ? true : false)
  }

  const searchAPIForGame = gameName => {
    // Will return empty array if no results are found
    return apiServices.searchGameByName(gameName)
    .then(res => res?.games)
  }

  const cacheNewGames = games => games.forEach(game => gameServices.createGame(game))

  const handleGameSearch = async formData => {
    // Don't accept an empty form because it will result in querying the api for the top 30 games.. might be a good way to initially populate this page though.
    if(formData.name === '') { return }

    let results = searchDatabaseForGame(formData.name)
    // Search api if no results -- or should we search it anyway to build or db?
    if (results.length === 0) { 
      results = await searchAPIForGame(formData.name)
      // If new games were found, cache them in our db 😎
      if(results.length) { cacheNewGames(results) }
    }

    setSearchResults(results)
  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
      {searchResults.length
      ?
      <GameList user={user} games={searchResults}/>
      :
      <div>No results</div>
    }
    </>
  )

}

export default GameSearch