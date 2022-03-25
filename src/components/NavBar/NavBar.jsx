import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand">G3</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/profiles">Profiles</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="dropdown-item"><Link to="/myProfiles">My Profile</Link></li>
                      <li className="dropdown-item"><Link to="/changePassword">Change Password</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li className="dropdown-item"><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Find Games" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar
