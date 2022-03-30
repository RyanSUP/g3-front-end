import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import ProfileGroupList from "../../components/ProfileGroupList/ProfileGroupList";
import ProfileGatherings from "../../components/ProfileGatherings/ProfileGatherings";
import AddPicture from "../../components/AddPicture/AddPicture";
import ToggleForm from "../../components/ToggleForm/ToggleForm";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';
import * as groupService from '../../services/groupService'



const Profile = ({ user  }) => {
  const [profileDetails, setProfileDetails] = useState({})

  useEffect(() => {
    console.log('mounting profile')
    getProfile(user.profile)
    .then(profileDetails => {
      setProfileDetails(profileDetails)
    })
  }, [])



  return (
    <>
      <div className="container-fluid">
        {/* <div className="container"> */}
        <div className="row">
          {/* temporary color */}

          <div className="col-md-4" style={{background:'#faedcd'}} >

            <h1 className="text-center text-uppercase">{profileDetails.name}</h1>
            <img style={{width: 200}} src={profileDetails.avatar} alt="avatar" />
            <ToggleForm form={<AddPicture user={user}/>} buttonText={'Add Picture'}/>
            <ProfileGroupList profile={profileDetails} />
          </div>
          <div className="col-md-8" >
            {/* //! Make this map a component! */}

            <div className="card scroll-gathering col-md-8 gm-card mx-auto mt-5 shadow-lg p-3 mb-1 bg-body rounded">
              <ProfileGatherings groups={profileDetails.groups}/>

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