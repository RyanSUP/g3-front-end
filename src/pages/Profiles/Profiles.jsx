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
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
          <Link to={`/profiles/${profile._id}`} key={profile._id} state={{profile}} >
            <p >{profile.name}</p>
            </Link>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
      <GroupList />
    </>
  )
}
 
export default Profiles