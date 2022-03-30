import * as groupService from '../../services/groupService'
import GroupCard from '../GroupCard/GroupCard'

const ProfileGroupList = ({groups}) => {

  const handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
  }
  
  return (  
    <>
      {groups?.map((group, idx) => 
        <GroupCard key={idx} handleDeleteGroup={handleDeleteGroup} group={group} />
      )}
    </>
  );
}

export default ProfileGroupList;