import BigHeadAvatar from '../ProfileAvatar/BigHeadAvatar'
const GroupCard = ({profile, group, handleDeleteGroup, handleLeaveGroup}) => {
  const leaveBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleLeaveGroup(group._id)}>Leave</button>
  const dltBtn = <button className="btn btn-outline-danger" type="submit" onClick={() => handleDeleteGroup(group._id)}>Disband</button>

  return (
    <div className="card mb-3 rounded-3" >
      <div className="row g-0">
        <div className=" d-flex col-md-4 align-items-center">
         <img className='img-thumbnail' src={group.image} alt="group pic" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h2 className="card-title">{group.name}</h2>
              {group.manager === profile._id
              ?
                dltBtn
              :
                leaveBtn
              }
            </div>
            <div className="d-flex p-2 flex-wrap">
              {group.profiles.map(profile => <BigHeadAvatar profile={profile} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GroupCard;