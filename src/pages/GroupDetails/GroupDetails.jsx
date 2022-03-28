import { useState, useEffect } from 'react'
import { getGroup } from '../../services/groupService';
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'
import * as groupService from '../../services/groupService'
import GameList from '../../components/GameList/GameList';


const GroupDetails = ({ user }) => {
  const [groupDetails, setGroupDetails] = useState({})
  const location = useLocation()
  const group = location.state.group
  useEffect(() => {
    getGroup()
      .then(groupDetails => setGroupDetails(groupDetails))
  }, [])
  const handleJoin = () => {
    // add group to profile
    profileService.joinGroup(user.profile, group)
    groupService.addMember(group._id, user.profile)
  }

  return (
    <>
      <h1>{group.name}</h1>
      <img style={{ width: "500px" }} src={group.image} alt="group pic" />
      {/* {group.profiles.map((profile, idx) =>
        <h2 key={idx}> {profile.name}</h2>
      )} */}

      <button className="btn btn-outline-success" type="submit" onClick={handleJoin}>Join</button>
    </>
  );
}

export default GroupDetails;