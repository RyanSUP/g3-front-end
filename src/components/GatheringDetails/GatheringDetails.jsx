const GatheringDetails = ({gathering}) => {

  return (
    <>
      <h3>{gathering.name}</h3>
      <p>Location: {gathering.location}</p>
      <p>Date: {gathering.date}</p>
    </>
  );
}
 
export default GatheringDetails;
