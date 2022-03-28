import { useState, useEffect } from 'react'
import { getGroup } from '../../services/groupService';
import { useLocation } from "react-router-dom";

const GroupDetails = (props) => {
  const [groupDetails, setGroupDetails] = useState({})
  const location = useLocation()
  const group = location.state.group
  useEffect(()=> {
    getGroup()
    .then(groupDetails => setGroupDetails(groupDetails))
  }, [])
  return (  
    <>
    <h1>{group.name}</h1>
    <img style={{width: "500px"}}src={group.image} alt="group pic" />
    </>
  );
}

export default GroupDetails;