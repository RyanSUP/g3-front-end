const GatheringDetails = ({gathering}) => {

  return (
    <>
      <h4>{gathering.name}</h4>
      <p>Location: {gathering.location}</p>
      <p>Date: {gathering.date}</p>
    </>
  );
}
 
export default GatheringDetails;
