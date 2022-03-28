import * as groupService from '../../services/groupService'

const GatheringList = ({ gatherings }) => {
  // const handleDelete = () => {
  //   groupService.deleteGathering()
  // }
  return (
    <>
    {gatherings?.map(gathering => 
      <div key={gathering._id}>
        <h4>{gathering.name}</h4>
        <p>{gathering.location}</p>
        <p>{gathering.date}</p>
        </div>
      )}
      </>
  );
}

export default GatheringList;