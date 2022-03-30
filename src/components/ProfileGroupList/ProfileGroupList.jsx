import * as groupService from '../../services/groupService'
import GroupCard from '../GroupCard/GroupCard'
import { useState, useEffect } from 'react'

const ProfileGroupList = ({profile}) => {
  const [profileGroups, setProfileGroups] = useState([])

  useEffect(()=> {
    if(profile) setProfileGroups(profile.groups)
  }, [profile])

  const removeGroupFromState = group => {
    const groupIndex = profileGroups?.findIndex(pGroup => pGroup._id === group)
    let newGroups = [...profileGroups]
    newGroups.splice(groupIndex, 1)
    setProfileGroups(newGroups)
  }

  const handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
  }

  const handleLeaveGroup = (group) => {
    removeGroupFromState(group)
    groupService.updateGroup(group, profile._id)
  }
  
  return (  
    <>
      {profileGroups?.map((group, idx) => 
        <GroupCard key={idx} handleLeaveGroup={handleLeaveGroup} handleDeleteGroup={handleDeleteGroup} group={group} profile={profile} />
      )}
    </>
  );
}

export default ProfileGroupList;