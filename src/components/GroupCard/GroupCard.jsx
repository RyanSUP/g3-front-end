import { Link } from "react-router-dom"
const GroupCard = ({profile, group, handleDeleteGroup, handleLeaveGroup}) => {
  const leaveBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleLeaveGroup(group._id)}>Leave</button>
  const dltBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleDeleteGroup(group._id)}>Disband</button>

  return ( 

    <div className="card">
      <div> 
        <Link  to={`/groups/${group._id}`} state={{group}}>
          <img style={{width: "250px"}}src={group.image} alt="group pic" />
          <h3>{group.name}</h3>
        </Link>
        {group.manager === profile._id
          ?
            dltBtn
          :
            leaveBtn
        }
      </div>
  );
}
 
export default GroupCard;