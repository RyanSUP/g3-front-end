import { useState, useEffect }from "react";


const GroupBtn = ({profile, group, handleDeleteGroup, handleLeaveGroup, handleJoin, toggleState}) => {
  const leaveBtn = <button className="btn btn-outline-danger h-25" type="submit" onClick={() => handleLeaveGroup(group._id)}>Leave</button>
  const dltBtn = <button className="btn btn-outline-danger h-25" type="submit" onClick={() => handleDeleteGroup(group._id)}>Disband</button>
  const joinBtn = <button className="btn btn-outline-success h-25" type="submit" onClick={() => handleJoin(group._id)}>Join</button>
  const [theBtn, setTheBtn] = useState()
  
  useEffect(() => {
    if (group.manager === profile.profile) {
      console.log('Im the manager')
      console.log(profile.profile === group?.manager)
      console.log(profile.profile)
      console.log(group)
      setTheBtn(dltBtn)
    } 
    else if (group.profiles.find(p => profile.profile === p._id)){
      console.log('Take me to the weekend')
      setTheBtn(leaveBtn)
    }
    else {
      console.log('im not suppose to be here')
      setTheBtn(joinBtn)
    }
  }, [group, profile, toggleState])
  
  return(
    <>
    {theBtn}
    </>
  )
}

export default GroupBtn