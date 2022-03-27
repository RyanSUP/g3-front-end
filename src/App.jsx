/*-- Helpers --*/
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import * as authService from './services/authService'
import * as gameService from './services/gameService'
import * as profileService from './services/profileService'
import * as apiServices from './services/atlasAPIService'
import * as groupService from './services/groupService'

/*-- Pages/Components --*/
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import GameSearch from './pages/GameSearch/GameSearch'
import Profile from './pages/Profile/Profile'
import GroupList from './components/GroupList/GroupList'
import GroupDetails from './pages/GroupDetails/GroupDetails'
import MyProfile from './pages/Profile/MyProfile'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [allGames, setAllGames] = useState([])
  const [profile, setProfile] = useState({})
  const [groups, setGroups] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      gameService.getAllGames()
      .then(allGamesFromFetch => setAllGames(allGamesFromFetch))
      
      profileService.getProfile(user.profile)
      .then(returnedProfile => setProfile(returnedProfile))
    }


  }, [user])


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
    // Don't accept an empty form because it will result in querying the api for the top 30 games.. might be a good way to initially populate this page though.
    if (formData.name === '') { return }

    let results = searchDatabaseForGame(formData.name)
    // Search api if no results -- or should we search it anyway to build or db?
    if (results.length === 0) {
      results = await searchAPIForGame(formData.name)
      // If new games were found, cache them in our db 😎
      if (results.length) { cacheNewGames(results) }
    }
    setSearchResults(results)
    navigate('gameSearch')
  }

  const handleAddGroup = newGroupData => {
    groupService.create(newGroupData)
    .then(newGroup => setGroups([...groups, newGroup]))
    navigate('/myProfile')
  }
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} allGames={allGames} handleGameSearch={handleGameSearch} searchResults={searchResults}/>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/login"
          element={<Login formType={'login'} handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* // ! THIS IS A SINGLE PROFILE */}
        <Route
          path="/myProfile"
          element={<MyProfile profile={profile} user={user} handleAddGroup={handleAddGroup}/>}
        />
        {/* //! THIS IS ALL PROFILES */}
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
         <Route
          path="/profiles/:id"
          element={<Profile profile={profile} user={user} handleAddGroup={handleAddGroup}/>}
        />
                <Route
          path="/groups/:id"
          element={<GroupDetails profile={profile} user={user} handleAddGroup={handleAddGroup}/>}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/gameSearch" element={ <GameSearch user={user} allGames={allGames} handleGameSearch={handleGameSearch} searchResults={searchResults}/> }
        />
      </Routes>
    </>
  )
}

export default App
