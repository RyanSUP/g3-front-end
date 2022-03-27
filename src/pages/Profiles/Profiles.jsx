import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import GroupList from '../../components/GroupList/GroupList'
import { Link } from 'react-router-dom'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1 id='profile-text'>All Users</h1>
      {profiles.length ? 
        <>
        <div className="container py-5 px-3">
          <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g1 px-4'>
          {profiles.map(profile=>
              <div class="col">
          <Link to={`/profiles/${profile._id}`} key={profile._id} state={{profile}} >
          <div class="col">
            <img className='card-img-top'
            src='https://picsum.photos/200'
            alt='placeholder image'
            />
              <p className=' card card-body card-pname' style={{width: '15rem'}}>{profile.name}</p>
            </div>
            </Link>
          )}
            </div>
          </div>
        </>
      :
        <p>No profiles yet</p>
      }
      <GroupList />
    </>
  );
};

export default Profiles