import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'
import GameList from "../../components/GameList/GameList";

const GameSearch = ({ updateProfile, user, handleGameSearch, searchResults }) => {
  return (
    <>
      <h1 className='text-center'>Search Games</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
      {searchResults.length
        ?
        <GameList updateProfile={updateProfile} user={user} games={searchResults} />
        :
        <div>No results</div>
      }
    </>
  )
}

export default GameSearch