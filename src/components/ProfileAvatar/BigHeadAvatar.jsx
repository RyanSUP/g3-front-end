import AddPicture from "../../components/AddPicture/AddPicture";
import { BigHead } from '@bigheads/core'
import AvatarForm from "./AvatarForm";
import { useState, useEffect } from 'react'
import ToggleForm from "../ToggleForm/ToggleForm";

const BigHeadAvatar = ({profile, user, size}) => {
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
          <BigHead style={size} {...avatar} />
        :
          <img src={profile.avatar} style={size} />
      }
    </>
  );
}
 
export default BigHeadAvatar;