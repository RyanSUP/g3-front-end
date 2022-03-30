import { useEffect, useState, React} from "react";
import GameCard from "../GameCard/GameCard"
import * as profileService from '../../services/profileService'
import ScrollToTop from "react-scroll-to-top";

const GameList = ({games, user}) => {

  const [profile, setProfile] = useState({})
  const [profileGames, setProfileGames] = useState([])
  const [offCanvasGame, setOffCanvasGame] = useState({})
  const [offCanvasButton, setOffCanvasButton] = useState()
  
  useEffect(()=>{
    profileService.getProfile(user.profile)
    .then(returnedProfile => {
      setProfile(returnedProfile)
      setProfileGames(returnedProfile.games)
    })
  }, [])

  const updateOffCanvas= (game, button) => {
    setOffCanvasGame(game)
    setOffCanvasButton(button)
  }

  const addGameToState = (game) => {
    setProfileGames([...profileGames, game])
  }
  return (  
    <>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel" className='text-center fs-2' style={{size:'50px'}}><strong>Details</strong></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
        </div>
        <div className="offcanvas-body">
          <img style={{width: '350px'}} src={offCanvasGame.thumb_url}/>
          <strong>Name:</strong> {offCanvasGame.name} <br></br>
          <strong>Description:</strong> {offCanvasGame.description_preview}<br></br>
        </div>
        {offCanvasButton}
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {games?.map((result, idx) => <GameCard updateOffCanvas={updateOffCanvas} addGameToState={addGameToState} key={idx} profile={profile} game={result}/>)}
        <ScrollToTop smooth/>
      </div>
      
    </>
  );
}

export default GameList;