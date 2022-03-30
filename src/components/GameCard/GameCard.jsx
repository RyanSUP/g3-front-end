import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'


const GameCard = ({game, profile, addGameToState, updateOffCanvas}) => {
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
    updateOffCanvas(game, dltButton)
  }

  function handleDeleteGame() {
    //delete game from profile
    profileService.deleteGame(profile._id, game)
    setCurrentButton(addButton)
    updateOffCanvas(game, addButton)
  }

  return (  
    <div className="card gm-card mx-auto mt-5 shadow-lg p-3 py-1 mb-1 bg-body rounded" style={{width: '18rem'}}>
      <svg className="position-absolute top-0 end-0" style={{color:'cornflowerblue'}} type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={()=>updateOffCanvas(game, currentButton)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      <img style={{height: '200px'}} src={game.thumb_url} className="img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{game.name}</h5>
        {/* <p className="card-text">{game.description_preview}</p> */}
          {currentButton}
      </div>
    </div>
  );
}
//  type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={()=>updateOffCanvas(game, currentButton)}


export default GameCard;
