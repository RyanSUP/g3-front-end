import { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard"
import * as profileService from '../../services/profileService'

const GameList = ({games, user}) => {

  const [profile, setProfile] = useState({})
  const [profileGames, setProfileGames] = useState([])

  useEffect(()=>{
    profileService.getProfile(user.profile)
    .then(returnedProfile => {
      setProfile(returnedProfile)
      setProfileGames(returnedProfile.games)
    })
  }, [])

  const addGameToState = (game) => {
    setProfileGames([...profileGames, game])
  }
  return (  
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {games?.map((result, idx) => <GameCard addGameToState={addGameToState} key={idx} profile={profile} game={result}/>)}
    </div>
  );
}

export default GameList;