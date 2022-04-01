import AddPicture from "../../components/AddPicture/AddPicture";
import { BigHead } from '@bigheads/core'
import ProfileAvatar from "./ProfileAvatar";
import { useState, useEffect } from 'react'

const BigHeadAvatar = ({profile, user}) => {
  const [avatar, setAvatar] = useState({})
  const [isBigHead, setIsBigHead] = useState()
  useEffect(()=>{
    if(profile?.avatar) {
      if(profile.avatar.charAt(0) === '{') {
        setIsBigHead(true)
        setAvatar(JSON.parse(profile?.avatar)) 
      } else {
        setIsBigHead(false)
      }
    }
  },[profile])

  return (
    <>
      {isBigHead
        ?
          <BigHead style={{width:'30%'}} {...avatar} />
        :
          <img className='rounded-circle' src={profile.avatar} style={{width:'30%'}} />
      }
    </>
  );
}
 
export default BigHeadAvatar;