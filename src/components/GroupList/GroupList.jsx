import { useState, useEffect } from "react"
import * as groupService from '../../services/groupService'
import { Link } from "react-router-dom"
import GroupCard from "../GroupCard/GroupCard"
import BigHeadAvatar from "../ProfileAvatar/BigHeadAvatar"

const GroupList = (props) => {
  const [groups, setGroups] = useState([])


  useEffect(()=> {
    groupService.getAllGroups()
    .then(groups => setGroups(groups))
  }, [])

  return (  
    <>
    <h2 className="text-center m-4">ALL GROUPS</h2>
    
    <div>
      <div className="container">
        <div className='row row-cols-1 row-cols-md-3 justify-content-center'> 
          {groups?.map((group) => 
            <Link key={group._id} className='text-decoration-none text-reset' to={`/groups/${group._id}`} state={{group}}>
              <div className="groupcard card shadow m-3" >
                <div className="row g-0 h-100">
                  <div className=" d-flex col-md-4 align-items-center flex-wrap">
                  <img id='our-img-thumbnail' className="" src={group.image} alt="group pic" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title text-right">{group.name}</h2>
                      <div className="d-flex p-2 flex-wrap">
                        {group.profiles.map((profile, idx) => <BigHeadAvatar size={{width:'30%'}} key={idx} profile={profile} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </>
  );
}

export default GroupList;