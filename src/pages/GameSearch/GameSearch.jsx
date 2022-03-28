/*-- Helpers --*/


/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'
import GameList from "../../components/GameList/GameList";

const GameSearch = ({ allGames, user, handleGameSearch, searchResults }) => {
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
      {searchResults.length
        ?
        <GameList user={user} games={searchResults} />
        :
        <div>No results</div>
      }
    </>
  )
}

export default GameSearch