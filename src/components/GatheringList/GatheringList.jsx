import * as groupService from '../../services/groupService'

const GatheringList = ({group, gatherings }) => {
  const handleDelete = (groupId, gatheringId) => {
    groupService.deleteGathering(groupId, gatheringId)
  }

  return (
    <>
      {gatherings?.map(gathering => 
        <div key={gathering._id}>
          <h4>{gathering.name}</h4>
          <p>{gathering.location}</p>
          <p>{gathering.date}</p>
          <button onClick={()=> handleDelete(group._id, gathering._id)} >Delete</button>
        </div>
      )}
    </>
  );
}

export default GatheringList;