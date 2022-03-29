import { useState } from 'react'
import * as groupService from '../../services/groupService'
import UpdateGathering from '../UpdateGathering/UpdateGathering'
const GatheringDetails = ({gathering, group}) => {
  const [editState, setEditState] = useState(1)

  function switchState() {
    setEditState(editState * -1)
  }

  return (
    <div key={gathering._id}>
      {editState > 0
        ?
          <>          
            <h4>{gathering.name}</h4>
            <p>{gathering.location}</p>
            <p>{gathering.date}</p>
          </>
        :
          <>
            <UpdateGathering group={group} gathering={gathering}/>
          </>
      }
      <button onClick={()=> switchState()} >Edit</button>
    </div>
  );
}
 
export default GatheringDetails;