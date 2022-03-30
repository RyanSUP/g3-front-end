import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import ProfileGroupList from "../../components/ProfileGroupList/ProfileGroupList";
import ProfileGatherings from "../../components/ProfileGatherings/ProfileGatherings";
import AddPicture from "../../components/AddPicture/AddPicture";
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
          <div className="col-md-4" style={{ background: 'pink' }} >
            This is the left side

            <h1 className="text-center text-uppercase">{profileDetails.name}</h1>
 


              <img id="profilePic" src={profileDetails.avatar} alt="avatar" />

            
            <ToggleForm form={<AddPicture user={user} profile={profileDetails}/>} buttonText={'Add Picture'}/>
            <ToggleForm form={<AddGroup handleAddGroup={handleAddGroup} />} buttonText={'Create group'} />

            <ProfileGroupList profile={profileDetails} />
          </div>
          <div className="col-md-8" >
            This is the right side
            {/* //! Make this map a component! */}
            <div className="card col-8 gm-card mx-auto mt-5 shadow-lg p-3 mb-1 bg-body rounded">
              <ProfileGatherings groups={profileDetails.groups} />
            </div>
            <div className="col-md-12 scroll">
              <GameList user={user} games={profileDetails.games} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;