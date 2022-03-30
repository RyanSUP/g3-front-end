import { useState, useEffect } from "react"
import * as groupService from '../../services/groupService'
import { Link } from "react-router-dom"

// !!!!! DEPRECIATED

const GroupList = (props) => {
  const [groups, setGroups] = useState([])

  useEffect(()=> {
    groupService.getAllGroups()
    .then(groups => setGroups(groups))
  }, [])
  const handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
  }
  return (  
    <>
    <h2>This is a list of all the groups</h2>
    
    <div>
      <div className="card">
        <div className='row row-cols-1 row-cols-md-2 g-4'> 
          {groups?.map((group, idx) => 
            <div key={idx}>
              <Link  to={`/groups/${group._id}`} state={{group}}>
                <img style={{width: "250px"}}
                src={group.image ? group.image : "https://i.imgur.com/AeL8PpK.png"} alt="group pic" />
                <div >
                  <h3>{group.name}</h3>
                </div>
              </Link>
              {/* <button className="btn btn-outline-danger" type="submit" onClick={() => handleDeleteGroup(group._id)}>Delete</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  );
}

export default GroupList;