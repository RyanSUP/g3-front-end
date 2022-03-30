import { Link } from "react-router-dom"
const GroupCard = ({group, handleDeleteGroup}) => {
  return ( 
    <div className="card">
      <div className='row row-cols-1 row-cols-md-2 g-4'> 
          <div>
            <Link  to={`/groups/${group._id}`} state={{group}}>
              <img style={{width: "250px"}}src={group.image} alt="group pic" />
              <h3>{group.name}</h3>
            </Link>
            <button className="btn btn-outline-danger" type="submit" onClick={() => handleDeleteGroup(group._id)}>Delete</button>
          </div>
      </div>
    </div>
  );
}
 
export default GroupCard;