import { Link } from "react-router-dom"
import ToggleBtn from "../GroupCardBtn/GroupCardBtn"
const GroupCard = ({group}) => {

  return ( 
  <> 
    <div className="card">
      <div>
        
        <Link  to={`/groups/${group._id}`} state={{group}}>
          <img style={{width: "250px"}}src={group.image} alt="group pic" />
          <h3>{group.name}</h3>
        </Link>
        <ToggleBtn/>
=======

      </div>
    </div>
    </>
  );
}


export default GroupCard;

 


    // {/* <div className="card">
    //   <div> 
    //     <Link  to={`/groups/${group._id}`} state={{group}}>
    //       <img style={{width: "250px"}}src={group.image} alt="group pic" />
    //       <h3>{group.name}</h3>
    //     </Link>
    //     {group.manager === profile._id
    //       ?
    //         dltBtn
    //       :
    //         leaveBtn
    //     }
    //   </div>
      
    // </div> */}

