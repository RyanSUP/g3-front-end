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

  const handleAddGathering = newGatheringData => {
    groupService.addGathering(group._id, newGatheringData)
    .then(newGathering => setLeGatherings([...leGatherings, newGathering]))
  }

  const updateGatheringList = (gatheringUpdates, gatheringId, deleteFlag) => {

    const idx = leGatherings.findIndex(gathering => gatheringId === gathering._id)
    console.log(idx)
    const newGatherings = [...leGatherings]
    if(deleteFlag) {
      newGatherings.splice(idx, 1)
    } else {
      newGatherings[idx].name = gatheringUpdates.name
      newGatherings[idx].date = gatheringUpdates.date
      newGatherings[idx].location = gatheringUpdates.location
    }   
    setLeGatherings([...newGatherings])
  }

  return (
    <div className='gathering-list'key={toggleKey}>
      <ToggleForm form={<AddGathering handleAddGathering={handleAddGathering} />} buttonText={'New gathering'} />
        {leGatherings?.map((gathering, idx) => 
          <ToggleForm 
              key={idx + gathering.name} 
              buttonText={'edit'} 
              altComponent={<GatheringDetails gathering={gathering} />}
              form={<UpdateGathering updateGatheringList={updateGatheringList} group={group} gathering={gathering} />} 
            />
        )}
    </div>
  );
}

export default GatheringList;