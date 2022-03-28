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
        <h5 className="card-title text-center">{game.name}</h5>
        {/* <p className="card-text">{game.description_preview}</p> */}
        
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel" className='text-center fs-2' style={{size:'50px'}}><strong>Details</strong></h5>
        
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
        </div>
        <div class="offcanvas-body">
          <img style={{width: '350px'}} src={game.thumb_url}/>
          <strong>Name:</strong> {game.name} <br></br>
          <strong>Description:</strong> {game.description_preview}<br></br>
          
        </div>
        <button onClick={handleAddGame} className="btn btn-primary add-btn  ">Add Game</button>
        </div>
        <button className="btn btn-primary mx-4" type='button'data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Details</button>
        <button onClick={handleDeleteGame} className="btn btn-primary mx-auto">Delete</button>
      </div>
    </div>
  );
}

export default GameCard;