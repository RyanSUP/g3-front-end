import GatheringDetails from '../GatheringDetails/GatheringDetails'
import UpdateGathering from '../UpdateGathering/UpdateGathering'
import ToggleForm from '../ToggleForm/ToggleForm';
import { useState, useEffect } from 'react'
import AddGathering from '../AddGathering/AddGathering';
import * as groupService from '../../services/groupService'
import * as gatheringService from '../../services/gatheringService'

const GatheringList = ({group, gatherings, profile}) => {
  const [leGatherings, setLeGatherings] = useState(profile.groups)
  const [toggleKey, setToggleKey] = useState(0)


  useEffect(()=>{
    if(gatherings) { setLeGatherings(gatherings) }
  }, [gatherings])

  useEffect(()=> {
    setToggleKey(toggleKey + 1)
  }, [leGatherings])
  // Keep all gatherings in state
  // gathering details is passed a function to update

  const handleAddGathering = newGatheringData => {
    groupService.addGathering(group._id, newGatheringData)
    .then(newGathering => setLeGatherings([...leGatherings, newGathering]))
  }

  return (
    <>
      <ToggleForm key={toggleKey} form={<AddGathering handleAddGathering={handleAddGathering} />} buttonText={'New gathering'} />
      {leGatherings?.map((gathering, idx) => 
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