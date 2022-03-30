import ToggleForm from '../ToggleForm/ToggleForm';
import GatheringDetails from '../GatheringDetails/GatheringDetails'
import UpdateGathering from '../UpdateGathering/UpdateGathering'
const GatheringList = ({group, gatherings }) => {


  return (
    <>
      {gatherings?.map((gathering, idx) => 
          <GatheringDetails gathering={gathering} />
      )}
    </>
  );
}

export default GatheringList;