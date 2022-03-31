import GroupCard from '../GroupCard/GroupCard'
import * as groupService from '../../services/groupService'
import { useState, useEffect } from 'react'
import ToggleForm from '../ToggleForm/ToggleForm'
import AddGroup from '../AddGroup/AddGroup'
import { Link } from "react-router-dom"

const ProfileGroupList = ({profile }) => {
  const [profileGroups, setProfileGroups] = useState([])
  const [toggleKey, setToggleKey] = useState(0)
  
  useEffect(()=> {
    if(profile) setProfileGroups(profile.groups)
  }, [profile])
  
  useEffect(()=> {
    setToggleKey(toggleKey + 1)
  }, [profileGroups])

  const removeGroupFromState = group => {
    const groupIndex = profileGroups?.findIndex(pGroup => pGroup._id === group)
    let newGroups = [...profileGroups]
    newGroups.splice(groupIndex, 1)
    setProfileGroups(newGroups)
  }
  
  //! Pushing an empty object into setProfileGroups?
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
      <ToggleForm key={toggleKey} form={<AddGroup handleAddGroup={handleAddGroup} />} buttonText={'Create group'} />
      {profileGroups?.map((group, idx) =>
        <Link className='text-decoration-none text-reset' to={`/groups/${group._id}`} state={{group}}>
          <GroupCard key={idx} handleLeaveGroup={handleLeaveGroup} handleDeleteGroup={handleDeleteGroup} group={group} profile={profile} />
        </Link>
      )}
    </div>
  );
}

export default ProfileGroupList;