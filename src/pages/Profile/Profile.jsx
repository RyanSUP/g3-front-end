import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";
import ProfileGroupList from "../../components/ProfileGroupList/ProfileGroupList";
import ProfileGatherings from "../../components/ProfileGatherings/ProfileGatherings";
import AddPicture from "../../components/AddPicture/AddPicture";
import ToggleForm from "../../components/ToggleForm/ToggleForm";
import { useState, useEffect } from 'react'
import { getProfile } from '../../services/profileService';
import * as groupService from '../../services/groupService'
import BigHeadAvatar from "../../components/ProfileAvatar/BigHeadAvatar";


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
        <div className="row vh-100">
          {/* temporary color */}
          <div id="profileSideBar" className="col-md-4" style={{ background: 'pink' }} >
            <h1 className="text-center text-uppercase">{profileDetails.name}</h1>
            <BigHeadAvatar user={user} profile={profileDetails}/>
            <ProfileGroupList profile={profileDetails} />
          </div>
          <div className="col-md-8" >
            <div className="card mb-4 scroll-gathering col-md-8 gm-card mx-auto mt-5 shadow-lg p-3 mb-1 bg-body rounded">
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