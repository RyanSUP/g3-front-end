import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import ProfileGroupList from "../../components/ProfileGroupList/ProfileGroupList";
import ToggleForm from "../../components/ToggleForm/ToggleForm";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';


const Profile = ({ user, handleAddGroup }) => {
  const [profileDetails, setProfileDetails] = useState({})

  useEffect(() => {
    console.log('mounting profile')
    getProfile(user.profile)
    .then(profileDetails => setProfileDetails(profileDetails))

  }, [])


  return (
    <>
      <div className="container-fluid">
        {/* <div className="container"> */}
        <div className="row">
          {/* temporary color */}
          <div className="col-md-4" style={{background:'pink'}} >
            This is the left side

            <h1 className="text-center text-uppercase">{profileDetails.name}</h1>
            <ToggleForm form={<AddGroup handleAddGroup={handleAddGroup} />} buttonText={'Create group'} />

            <ProfileGroupList profile={profileDetails} />
          </div>
          <div className="col-md-8" >
            This is the right side
            {/* //! Make this map a component! */}
            {p<div className="card col-8 gm-card mx-auto mt-5 shadow-lg p-3 mb-1 bg-body rounded">
              <div className="card-body">rofileDetails.groups?.map((group) => 
              group.gatherings?.map((gathering) =>
                <p key={gathering._id}><strong>{gathering.name}</strong></p>
              )
            )}
            </div>
            </div>
            <div className="col-md-12 scroll">
              <GameList user={user} games={profileDetails.games} />
            </div>
            </div>
          </div>
        </div>
    {/* </div> */}
    </>
  );
}
export default Profile;