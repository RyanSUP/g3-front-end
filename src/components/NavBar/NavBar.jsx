import { Link } from 'react-router-dom'
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const NavBar = ({ user, handleLogout, allGames, handleGameSearch, searchResults }) => {
  return (
<<<<<<< HEAD
    <>  
      <nav className="navbar navbar-expand-lg" style={{background: '#81b5a8'}}>
=======
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
>>>>>>> main
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to="/">G3</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/profiles">Profiles</Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </div>
                {/* //! ONLY TEXT IS CLICKABLE, USER SHOULD BE ABLE TO CLICK ENTIRE BOX */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item"><Link to="/myProfile">My Profile</Link></li>
                  <li className="dropdown-item"><Link to="/changePassword">Change Password</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="dropdown-item"><Link to="/login" onClick={handleLogout}>LOG OUT</Link></li>
                </ul>
              </li>
            </ul>
            <>
              <GameSearchForm handleGameSearch={handleGameSearch} />
            </>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
