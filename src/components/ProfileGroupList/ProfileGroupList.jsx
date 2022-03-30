import * as groupService from '../../services/groupService'
import GroupCard from '../GroupCard/GroupCard'

const ProfileGroupList = ({profile}) => {

  const handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
  }

  const handleLeaveGroup = (group) => {
    groupService.updateGroup(group, profile._id)
  }
  
  return (  
    <>
      {profile.groups?.map((group, idx) => 
        <GroupCard key={idx} handleLeaveGroup={handleLeaveGroup} handleDeleteGroup={handleDeleteGroup} group={group} profile={profile} />
      )}
    </>
  );
}

export default ProfileGroupList;