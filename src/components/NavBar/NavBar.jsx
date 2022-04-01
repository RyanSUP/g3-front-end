import { Link } from 'react-router-dom'
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const NavBar = ({ handleLogout, handleGameSearch, profile }) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#164a4a' }}>
        <div className="container-fluid">
          <Link className="nav-link active brandNav" aria-current="page" to="/">G3</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/profiles">Social</Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item"><Link to={`/profiles/${profile._id}`} state={{ profile }}><div>My Profile</div></Link></li>
                  <li className="dropdown-item"><Link to="/changePassword"><div>Change Password</div></Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="dropdown-item"><Link to="/login" onClick={handleLogout}><div>LOG OUT</div></Link></li>
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
