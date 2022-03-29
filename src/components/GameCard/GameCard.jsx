import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const GameCard = ({game, profile, addGameToState, updateOffCanvasGame}) => {
  const [currentButton, setCurrentButton] = useState()
  const addButton = <button onClick={handleAddGame} className="btn btn-primary">Add</button>
  const dltButton = <button onClick={handleDeleteGame} className="btn btn-primary mx-2">Delete</button>

  useEffect(()=> {
    if(profile.games?.find(profileGame => profileGame._id === game._id)) {
      setCurrentButton(dltButton)
    } else {
      setCurrentButton(addButton)
    }
  }, [profile])

  function handleAddGame() {
    // add game to profile
    profileService.addGame(profile._id, game)
    addGameToState(game)
    setCurrentButton(dltButton)
    updateOffCanvasGame(game, dltButton)
  }

  function handleDeleteGame() {
    //delete game from profile
    profileService.deleteGame(profile._id, game)
    setCurrentButton(addButton)
    updateOffCanvasGame(game, addButton)
  }

  return (  
    <div className="card mx-auto mt-5" style={{width: '18rem'}}>
      <img style={{height: '200px'}} src={game.thumb_url} className="img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{game.name}</h5>
        {/* <p className="card-text">{game.description_preview}</p> */}
          {currentButton}
          <button className="btn btn-primary mx-4" type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={()=>updateOffCanvasGame(game, currentButton)}>Details</button>
      </div>
    </div>
  );
}



export default GameCard;
