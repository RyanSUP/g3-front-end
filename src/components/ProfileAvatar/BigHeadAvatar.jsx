import AddPicture from "../../components/AddPicture/AddPicture";
import { BigHead } from '@bigheads/core'
import { useState, useEffect } from 'react'
const ProfileAvatar = ({profile, user}) => {
  const [avatar, setAvatar] = useState({})

  useEffect(()=>{
    if(profile?.avatar) {
      console.log(profile)
      setAvatar(JSON.parse(profile.avatar)) 
    }
  },[profile])

  return (
    <>
      <BigHead style={{width:'30%'}} {...avatar} />
    </>
  );
}
 
export default ProfileAvatar;