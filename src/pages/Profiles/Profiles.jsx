import { React, useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import GroupList from '../../components/GroupList/GroupList'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
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
              {profiles.map(profile =>
                <div key={profile._id} className="col">
                  <Link className="card text-decoration-none mx-auto my-3" to={`/profiles/${profile._id}`}  state={{ profile }} >
                    <img className='card-img-top'
                      src='https://picsum.photos/300/400?random=1'
                      alt='placeholder'
                      width="100%"
                    />
                    <div className='card-body'>
                    <p className='card-title fs-3 text-dark card-pname' style={{ width: '15rem' }}>{profile.name}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
        :
        <p>No profiles yet</p>
      }
      <GroupList />
      <div className="top-btn">
      <ScrollToTop smooth/>
      </div>
    </>
  )
}

export default Profiles