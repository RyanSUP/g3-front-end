import AddPicture from "../../components/AddPicture/AddPicture";
import { useState } from 'react'
const ProfileAvatar = ({profile, user}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const toggleDisplay = () => setDisplayState(displayState * -1)

  return (
    <>
    <div>
      {displayState === -1
      ?
        <>
          
          <button className='btn rounded-circle position-relative' onClick={()=> toggleDisplay()}>
            <img id="profilePic" src=
              {profile.avatar? profile.avatar : "https://i.imgur.com/GcUK8zl.png"} alt="avatar" 
            />
            <div className="position-absolute bottom-0 end-0">
              <i className="fa-solid fa-camera"></i>
            </div>
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
 
export default ProfileAvatar;