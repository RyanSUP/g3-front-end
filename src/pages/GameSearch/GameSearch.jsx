/*-- Helpers --*/
import { useState } from "react";

/*-- Components --*/
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const GameSearch = ({allgames}) => {
  const [searchResults, setSearchResults] = useState([])
  
  const handleGameSearch = formData => {
    console.log(formData)
    // This is where I will check state for the formData
  }
  
  return (
    <>
      <h1>GAME SEARCH PAGE</h1>
      <GameSearchForm handleGameSearch={handleGameSearch} />
    </>
  )

}

export default GameSearch