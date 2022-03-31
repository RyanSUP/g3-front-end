import { useState, useEffect } from 'react'
import { getGroup } from '../../services/groupService';
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'
import * as groupService from '../../services/groupService'
import GameList from '../../components/GameList/GameList';
import AddGathering from '../../components/AddGathering/AddGathering';
import GatheringList from '../../components/GatheringList/GatheringList';
import ToggleForm from '../../components/ToggleForm/ToggleForm';
import BigHeadAvatar from '../../components/ProfileAvatar/BigHeadAvatar';
import GroupBtn from '../../components/GroupBtn/GroupBtn';

const GroupDetails = ({ user }) => {
  const [groupDetails, setGroupDetails] = useState({})
  const [profileDetails, setProfileDetails] = useState({})
  const [toggleState, setToggleState] = useState(0)
  const location = useLocation()

  const group = location.state.group

  useEffect(() => {
    profileService.getProfile(user.profile)
      .then(profileDetails => {
        setProfileDetails(profileDetails)
      })
  }, [])

  useEffect(() => {
    console.log(group)
    getGroup(group._id)
      .then(groupDetails => setGroupDetails(groupDetails))

  }, [group._id, toggleState])

  const handleJoin = () => {
    // add group to profile
    setToggleState(toggleState+1)
    profileService.joinGroup(user.profile, group)
    groupService.addMember(group._id, user.profile)
  }

  return (
    <>
      <div className="container-fluid" key={toggleState}>
        <div className="row">
          <div className="col-md-4" style={{ background: "pink" }}>
            {/* Group Component */}
            <div>
              {/* Group Header */}
              <div className='d-flex justify-content-around m-3'>
                <h1>{group.name}</h1>
                {/* //! Change btn to leave / disband. */}
                {/* //! This button should be inline with the name */}
                <GroupBtn toggleState={toggleState} profile={user} group={group} handleJoin={handleJoin}/>
                
            </div>
            <div className="d-flex flex-wrap">
              {groupDetails.profiles?.map((profile, idx) =>
                <>
                  <BigHeadAvatar profile={profile} />
                </>
              )}
            </div>
            {/* Group Profile grid */}
            <div>

            </div>
          </div>
          {/* Gathering Component */}
          <div>
            <div className='m-3'>
              <h3>Upcoming Gatherings</h3>
              <GatheringList profile={profileDetails} group={group} gatherings={groupDetails.gatherings} />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {/* Group member game list */}
          {/* //! This should be a component */}
          {groupDetails.profiles?.map((profile, idx) =>
            <div >
              <h2> {profile.name}</h2>
              {profile.games.length ?
                <div key={idx}>
                  {/* //! These cards need to be smaller for this page. */}
                  <GameList user={user} games={profile.games} />
                </div>
                :
                <p>This user has no games</p>
              }
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default GroupDetails;