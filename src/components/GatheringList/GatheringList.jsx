import GatheringDetails from '../GatheringDetails/GatheringDetails'
const GatheringList = ({group, gatherings }) => {


  return (
    <>
      {gatherings?.map((gathering, idx) => 
        <GatheringDetails key={idx} group={group} gathering={gathering} />
      )}
    </>
  );
}

export default GatheringList;