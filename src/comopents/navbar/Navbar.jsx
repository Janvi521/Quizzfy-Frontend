
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary shadow-sm">
        <div className="container">
          {/* Logo on Left */}
          <Link  to="/" className="navbar-brand fw-bold text-gradient dark" href="#">
            <h3 className="mb-0"><strong>Quizzfy</strong></h3>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center + Right Section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Quiz">Quiz</Link>
              </li>
              <li className="nav-item">
{/*                 <a className="nav-link text-white" href="#">Topics</a> */}
              </li>
              <li className="nav-item">
{/*                 <a className="nav-link text-white" href="#">Rewards</a> */}
              </li>
              <li className="nav-item">
{/*                 <a className="nav-link text-white" href="#">About</a> */}
              </li>
            </ul>

            {/* Right Side Buttons */}
            <div className="d-flex">
              
{/*               <Link to="/signIn"  className="btn btn-outline-light ms-lg-2" >Sign In</Link> */}
              <Link to="/" className="btn btn-outline-light ms-lg-2 gradient-backGround">Sign Out</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
