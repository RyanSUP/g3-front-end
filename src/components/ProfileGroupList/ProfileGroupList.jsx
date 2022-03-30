import * as groupService from '../../services/groupService'
import GroupCard from '../GroupCard/GroupCard'

const ProfileGroupList = ({profile}) => {

  const handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
  }
  
  return (  
    <>
      {profile.groups?.map((group, idx) => 
        <GroupCard key={idx} handleDeleteGroup={handleDeleteGroup} group={group} profile={profile} />
      )}
    </>
  );
}

export default ProfileGroupList;