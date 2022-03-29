import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import GroupList from "../../components/GroupList/GroupList";
import GatheringList from "../../components/GatheringList/GatheringList";
import { useState, useEffect, React } from 'react'
import { getProfile } from '../../services/profileService';
import ScrollToTop from "react-scroll-to-top";

const Profile = ({user, handleAddGroup}) => {
  const [profileDetails, setProfileDetails] = useState({})
  useEffect(()=> {
    console.log('mounting profile')
    getProfile(user.profile)
    .then(profileDetails => setProfileDetails(profileDetails))
  }, [])

  return (
    <>
      <h1>{profileDetails.name}</h1>
      <AddGroup handleAddGroup={handleAddGroup} />
      {profileDetails.groups?.map((group) => 
        <div key={group._id}>
          <div>{group.name}</div>
          <ul>
            {group.gatherings?.map((gathering) => 
              <li>{gathering.name}</li>
            )}
          </ul>
        </div>
      )}
      {/* Get all of the profiles games */}
      <div className='card'>
        <div className='col scroll'>
          
      <GameList user={user} games={profileDetails.games} />

      </div>

      </div>
    </>
  );
}

export default Profile;