import React from "react";

const ToggleBtn =({profile, handleDeleteGroup, handleLeaveGroup, group}) => {
    const leaveBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleLeaveGroup(group._id)}>Leave</button>
    const dltBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleDeleteGroup(group._id)}>Disband</button>
    return(
    <>
      {group.manager === profile._id
        ?
          dltBtn
        :
          leaveBtn
      }
    </>
  )
}

export default ToggleBtn