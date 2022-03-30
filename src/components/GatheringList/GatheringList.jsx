import ToggleForm from '../ToggleForm/ToggleForm';
import GatheringDetails from '../GatheringDetails/GatheringDetails'
import UpdateGathering from '../UpdateGathering/UpdateGathering'
const GatheringList = ({group, gatherings }) => {


  return (
    <>
      {gatherings?.map((gathering, idx) => 
        <ToggleForm 
          key={idx} 
          buttonText={'edit'} 
          altComponent={<GatheringDetails gathering={gathering} />}
          form={<UpdateGathering group={group} gathering={gathering} />} 
        />
      )}
    </>
  );
}

export default GatheringList;