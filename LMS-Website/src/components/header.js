import {Link} from 'react-router-dom';
function Header() {
    return (
    /* eslint-disable jsx-a11y/anchor-is-valid */ 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" >
        <div className="container-fluid ">
          <Link className="navbar-brand mx-5 mt-2" to="/">Learning Management System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5 " id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/user-mycourses" className="nav-link">Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="#">Logout</Link></li> 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;