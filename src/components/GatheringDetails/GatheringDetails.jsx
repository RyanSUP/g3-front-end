const GatheringDetails = ({gathering}) => {

  return (
    <>
      <h4>{gathering.name}</h4>
      <p>{gathering.location}</p>
      <p>{gathering.date}</p>
    </>
  );
}

export default GatheringDetails;