import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import ProfileGroupList from "../../components/ProfileGroupList/ProfileGroupList";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';


const Profile = ({ user, handleAddGroup }) => {
  const [profileDetails, setProfileDetails] = useState({})
  const [groupFormToggle, setGroupFormToggle] = useState(1) // -1 show, 1 hide

  useEffect(() => {
    console.log('mounting profile')
    getProfile(user.profile)
    .then(profileDetails => setProfileDetails(profileDetails))

  }, [])

  const handleGroupFormToggle = () => setGroupFormToggle(groupFormToggle * -1)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            This is the left side
            <h1>{profileDetails.name}</h1>
            <button onClick={()=>handleGroupFormToggle()}>Create group </button>
            {groupFormToggle === -1 ? <AddGroup handleAddGroup={handleAddGroup} /> : <></>}
            <ProfileGroupList profile={profileDetails} />
          </div>
          <div className="col-md-8">
            This is the right side
            {profileDetails.groups?.map((group) => 
              group.gatherings?.map((gathering) =>
                <li key={gathering._id}>{gathering.name}</li>
              )
            )}
            <GameList user={user} games={profileDetails.games} />
          </div>
        </div>
      </div> 
    </>
  );
}
export default Profile;