import { useState, useEffect } from "react"
import * as groupService from '../../services/groupService'
import { Link } from "react-router-dom"


const GroupList = () => {
  const [groups, setGroups] = useState([])

  useEffect(()=> {
    groupService.getAllGroups()
    .then(groups => setGroups(groups))
  }, [])
  return (  
    <>
    <h2>This is a list of all the groups</h2>
<div className="row row-cols-1 row-cols-md-2 g-4">
        {groups?.map((group, idx) => 
        <Link to={`/groups/${group._id}`} key={idx} state={{group}}>
          <h3>{group.name}</h3>
          <img style={{width: "250px"}}src={group.image} alt="group pic" />
        </Link>
        )}
  </div>
  </>
  );
}

export default GroupList;