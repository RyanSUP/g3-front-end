import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'


const GameCard = ({ game, profile, addGameToState, updateOffCanvas }) => {
  const [currentButton, setCurrentButton] = useState()
  const addButton = <button onClick={handleAddGame} className="btn  btn-success">Add</button>
  const dltButton = <button onClick={handleDeleteGame} className="btn btn-danger">Delete</button>

  useEffect(() => {
    if (profile.games?.find(profileGame => profileGame._id === game._id)) {
      setCurrentButton(dltButton)
    } else {
      setCurrentButton(addButton)
    }
  }, [profile])

  function handleAddGame() {
    profileService.addGame(profile._id, game)
    addGameToState(game)
    setCurrentButton(dltButton)
    updateOffCanvas(game, dltButton)
  }

  function handleDeleteGame() {
    profileService.deleteGame(profile._id, game)
    setCurrentButton(addButton)
    updateOffCanvas(game, addButton)
  }

  return (
    <div className="card shadow m-4" style={{ width: '18rem' }}>
      <div className="card-header d-flex flex-row justify-content-between align-items-center m-0">
        <span className='fs-5'>{game.playtime} <i className="fa-solid fa-clock"></i></span>
        <span className='fs-5'>{game.players} <i className="fa-solid fa-people-group"></i></span>

        <button className="info-btn btn btn-outline-primary p=0" type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => updateOffCanvas(game, currentButton)}><i className="fa-solid fa-circle-info"></i></button>
      </div>
      <div className='card-body text-center'>
        <p className="fs-4 m-0">{game.name}</p>
      </div>
      <img id="gameImg" src={game.thumb_url} className="img-thumbnail" alt="..." />
      <div className="card-footer text-muted">
        <div className="d-flex flex-column">
          {currentButton}
        </div>
      </div>
    </div>
  );
}



export default GameCard;

