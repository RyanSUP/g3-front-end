import BigHeadAvatar from '../ProfileAvatar/BigHeadAvatar'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
const SimpleGroup = ({profile, group}) => {

  return (
    <div className="card mb-3 text-decoration-none" id="groupCardIndex" >
      <div className="row g-0">
        <div className=" d-flex col-md-4 align-items-center">
        <img className='img-thumbnail' src={group.image} alt="group pic" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h2 className="card-title">{group.name}</h2>
            </div>
            <div className="d-flex p-2 flex-wrap">
              {group.profiles.map(profile => 
              <BigHeadAvatar profile={profile}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleGroup