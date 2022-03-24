import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import { GameSearch } from './pages/GameSearch/GameSearch'
import * as authService from './services/authService'
import * as gameService from './services/gameService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [allGames, setAllGames] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      // make gameService request to get all games
      gameService.getAllGames()
        .then(allGamesFromFetch => setAllGames(allGamesFromFetch))

    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/games"
          element={user ? <GameSearch /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
