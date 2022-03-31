import AddPicture from "../../components/AddPicture/AddPicture";
import { BigHead } from '@bigheads/core'
import { useState, useEffect } from 'react'
const ProfileAvatar = ({profile, user}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const [avatar, setAvatar] = useState({})
  const toggleDisplay = () => setDisplayState(displayState * -1)

  useEffect(()=>{
    if(profile?.avatar) {
      console.log(profile)
      setAvatar(JSON.parse(profile.avatar)) 
    }
  },[profile])

  return (
    <>
    <div>
      {displayState === -1
      ?
        <>
          <BigHead {...avatar} />
          <button className='btn rounded-circle position-relative' onClick={()=> toggleDisplay()}>
            {/* <img id="profilePic" src=
              {profile.avatar? profile.avatar : "https://i.imgur.com/GcUK8zl.png"} alt="avatar" 
            /> */}
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