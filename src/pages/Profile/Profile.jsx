import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import GroupList from "../../components/GroupList/GroupList";
import GatheringList from "../../components/GatheringList/GatheringList";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';

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
              <li key={gathering._id}>{gathering.name}</li>
            )}
          </ul>
        </div>
      )}
      {/* Get all of the profiles games */}
      <GameList user={user} games={profileDetails.games} />
    </>
  );
}

export default Profile;