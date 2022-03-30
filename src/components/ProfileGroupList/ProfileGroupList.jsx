import GroupCard from '../GroupCard/GroupCard'
import * as groupService from '../../services/groupService'
import { useState, useEffect } from 'react'
import ToggleForm from '../ToggleForm/ToggleForm'
import AddGroup from '../AddGroup/AddGroup'

const ProfileGroupList = ({profile }) => {
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

  const handleAddGroup = newGroupData => {
    groupService.create(newGroupData)
    .then(newGroup => setProfileGroups([...profileGroups, newGroup]))
  }

  const handleDeleteGroup = (group) => {
    removeGroupFromState(group)
    groupService.deleteGroup(group)
  }

  const handleLeaveGroup = (group) => {
    removeGroupFromState(group)
    groupService.updateGroup(group, profile._id)
  }


  return (  
    <div>
      <ToggleForm form={<AddGroup handleAddGroup={handleAddGroup} />} buttonText={'Create group'} />
      {profileGroups?.map((group, idx) =>
          <GroupCard key={idx} handleLeaveGroup={handleLeaveGroup} handleDeleteGroup={handleDeleteGroup} group={group} profile={profile} />
      )}
    </div>
  );
}

export default ProfileGroupList;