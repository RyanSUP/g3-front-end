import * as groupService from '../../services/groupService'

const GatheringList = ({group, gatherings }) => {
  
  const handleDelete = (groupId, gatheringId) => {
    groupService.deleteGathering(groupId, gatheringId)
  }
  
  function handleUpdateGathering(group, gathering) {
    groupService.updateGathering(group, gathering)
  }

  return (
    <>
      {gatherings?.map(gathering => 
        <div key={gathering._id}>
          <h4>{gathering.name}</h4>
          <p>{gathering.location}</p>
          <p>{gathering.date}</p>
          <button className="btn btn-outline-warning" type="submit" onClick={() => handleUpdateGathering (group._id, gathering._id)}>Edit</button>
          <button onClick={()=> handleDelete(group._id, gathering._id)} >Delete</button>
        </div>
      )}
    </>
  );
}

export default GatheringList;