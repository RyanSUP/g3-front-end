import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';
import { useLocation } from "react-router-dom";


const Profile = ({user, handleAddGroup}) => {
  const [profileDetails, setProfileDetails] = useState({})
  const location = useLocation()
  const thisProfile = location.state.profile
  useEffect(()=> {
    getProfile()
    .then(profileDetails => setProfileDetails(profileDetails))
  }, [])
  return (
    <>
      <h1>{thisProfile.name}</h1>
      <AddGroup handleAddGroup={handleAddGroup} />
    
      {/* Get all of the profiles games */}
      <GameList user={user} games={thisProfile.games} />
    </>
  );
}

export default Profile;