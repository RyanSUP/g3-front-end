import { useState, useEffect } from 'react'
import { getGroup } from '../../services/groupService';
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'
import * as groupService from '../../services/groupService'
import GameList from '../../components/GameList/GameList';
import AddGathering from '../../components/AddGathering/AddGathering';
import GatheringList from '../../components/GatheringList/GatheringList';
import ToggleForm from '../../components/ToggleForm/ToggleForm';

const GroupDetails = ({ user }) => {
  const [groupDetails, setGroupDetails] = useState({})
  const location = useLocation()
  const group = location.state.group

  useEffect(() => {
    getGroup(group._id)
      .then(groupDetails => setGroupDetails(groupDetails))
  }, [group._id])

  const handleJoin = () => {
    // add group to profile
    profileService.joinGroup(user.profile, group)
    groupService.addMember(group._id, user.profile)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Group Component */}
            <div>
              {/* Group Header */}
              <div>
                <h1>{group.name}</h1>
                {/* //! Change btn to leave / disband. */}
                {/* //! This button should be inline with the name */}
                <button className="btn btn-outline-danger" type="submit" onClick={handleJoin}>Leave</button>
              </div>
              {/* Group Profile grid */}
              <div>

              </div>
            </div>
            {/* Gathering Component */}
            <div>
              {/* //! Toggle button for add agathering form goes here */}
              <ToggleForm form={<AddGathering group={group} user={user} />} buttonText={'New gathering'} />
              {/* //! Upcoming gatherings should be overflow:scroll  */}
              <div>
                <GatheringList group={group} gatherings={groupDetails.gatherings} />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {/* Group member game list */}
            {/* //! This should be a component */}
            {groupDetails.profiles?.map((profile, idx) =>
              <div key={idx}>
                <h2> {profile.name}</h2>
                {/* //! These cards need to be smaller for this page. */}
                <GameList user={user} games={profile.games} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupDetails;