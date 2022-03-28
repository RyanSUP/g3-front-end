import * as profileService from '../../services/profileService'
const GameCard = ({game, user}) => {

  const handleAddGame = () => {
    // add game to profile
    profileService.addGame(user.profile, game)
  }

  const handleDeleteGame = () => {
    //delete game from profile
    profileService.deleteGame(user.profile, game)
  }

  return (  
    <div className="card mx-auto mt-5" style={{width: '18rem'}}>
      <img style={{height: '200px'}} src={game.thumb_url} className="img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        {/* <p className="card-text">{game.description_preview}</p> */}
        <button className="btn btn-primary" type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Details</button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Details</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
        </div>
        <div class="offcanvas-body">
          <img style={{width: '350px'}} src={game.thumb_url}/>
          <strong>Name:</strong> {game.name} <br></br>
          <strong>Description:</strong> {game.description_preview}

        </div>
        </div>
        <button onClick={handleAddGame} className="btn btn-primary">Add Game</button>
        <button onClick={handleDeleteGame} className="btn btn-primary mx-2">Delete</button>
      </div>
    </div>
  );
}

export default GameCard;