/*-- Helpers --*/
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import * as authService from './services/authService'
import * as gameService from './services/gameService'
import * as profileService from './services/profileService'
import * as apiServices from './services/atlasAPIService'

/*-- Pages/Components --*/
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import GameSearch from './pages/GameSearch/GameSearch'
import Profile from './pages/Profile/Profile'
import GroupDetails from './pages/GroupDetails/GroupDetails'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [allGames, setAllGames] = useState([])
  const [profile, setProfile] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      gameService.getAllGames()
        .then(allGamesFromFetch => setAllGames(allGamesFromFetch))

      profileService.getProfile(user.profile)
        .then(returnedProfile => setProfile(returnedProfile))
    }
  }, [user])

  const updateProfile = () => {
    console.log(1, profile)
    profileService.getProfile(user.profile)
      .then(returnedProfile => {
        console.log(2, returnedProfile)
        setProfile(returnedProfile)
        console.log(3, returnedProfile)
      })
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [searchResults, setSearchResults] = useState([])

  const searchDatabaseForGame = gameName => {
    const regexGameName = new RegExp(gameName, 'i')
    return allGames.filter(game => (game.name.search(regexGameName) > -1) ? true : false)
  }

  const searchAPIForGame = gameName => {
    // Will return empty array if no results are found
    return apiServices.searchGameByName(gameName)
      .then(res => res?.games)
  }

  const cacheNewGames = games => games.forEach(game => gameService.createGame(game))

  const handleGameSearch = async formData => {
    if (formData.name === '') { return }

    let results = searchDatabaseForGame(formData.name)
    if (results.length === 0) {
      results = await searchAPIForGame(formData.name)
      if (results.length) { cacheNewGames(results) }
    }
    setSearchResults(results)
    navigate('gameSearch')
  }




  return (
    <>
      {user
        ?
        <NavBar user={user} handleLogout={handleLogout} allGames={allGames} handleGameSearch={handleGameSearch} searchResults={searchResults} profile={profile} />
        :
        <></>
      }

      <Routes>
        <Route path="/" element={user ? <Profile profile={profile} user={user} /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login formType={'login'} handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:id"
          element={user ? <Profile profile={profile} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/groups/:id"
          element={<GroupDetails profile={profile} user={user} />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gameSearch" element={<GameSearch updateProfile={updateProfile} user={user} allGames={allGames} handleGameSearch={handleGameSearch} searchResults={searchResults} />}
        />
      </Routes>
    </>
  )
}


export default App
