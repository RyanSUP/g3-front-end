import {useState, useEffect} from 'react'
const GatheringDetails = ({gathering}) => {
  const [details, setDetails] = useState(gathering)
  const [toggleKey, setToggleKey] = useState(0)
  const detailComponent =(
  <>
    <h4>{gathering.name}</h4>
    <p>{gathering.location}</p>
    <p>{gathering.date}</p>
  </>)

  useEffect(()=>{
    setToggleKey(toggleKey + 1)
  },[details])

  return (
    <>
      {detailComponent}
    </>
  );
}
 
export default GatheringDetails;

// <ToggleForm 
// key={idx} 
// buttonText={'edit'} 
// altComponent={<GatheringDetails gathering={gathering} />}
// form={<UpdateGathering group={group} gathering={gathering} />} 
// />