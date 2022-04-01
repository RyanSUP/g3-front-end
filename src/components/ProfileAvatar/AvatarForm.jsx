import AddPicture from "../AddPicture/AddPicture";
import { useState } from 'react'

const AvatarForm = ({profile, user}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const toggleDisplay = () => setDisplayState(displayState * -1)


  return (
    <>
    <div>
      {displayState === -1
      ?
        <>
          <button className='btn rounded-circle position-relative' onClick={()=> toggleDisplay()}>
              <i className="fa-solid fa-camera fs-3"></i>
          </button>
        </>
      :
        <>
          <AddPicture user={user} profile={profile} />
          <button className='btn btn-primary' onClick={()=> toggleDisplay()}>cancel</button>
        </>        
      }
    </div>
    </>
  );
}
 
export default AvatarForm;

