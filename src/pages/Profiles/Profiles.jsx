import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
        <div className="container py-5 px-3">
          <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g1 px-4'>
          {profiles.map(profile=>
          <div class="col">
            <img className='card-img-top'
            src='https://picsum.photos/200'
            alt='placeholder image'
            />
          
            
              <p className=' card card-body card-pname' style={{width: '15rem'}} key={profile._id}>{profile.name}</p>
            </div>
          )}
            </div>
          </div>
        </>
      :
        <p>No profiles yet</p>
      } 
    </>
  );
};

export default Profiles