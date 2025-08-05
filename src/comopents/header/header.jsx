import Register from "../register/Register";
import { Link } from "react-router-dom";


function Header(){
    return <>
   {/* Hero Section */}
      <header
        className="hero-section d-flex align-items-center text-center text-white"
        style={{
          background:
            "url('/assets/Screenshot 2025-07-20 115705.png') center center / cover no-repeat",
          backgroundSize: "100%",
          height: "80vh",
           backgroundColor: "#000" 
        }}
      >
        <div className="container" >
          <h1 className="display-4 fw-bold">
            Learn, Quiz, <span className="text-gradient">Earn Rewards</span>
          </h1>
          <p className="lead mt-3">
            Discover thousands of quizzes and track your progress on the
            ultimate quiz platform.
          </p>
          <div className="mt-4">
            <Link to="/studentInfo" className="btn btn-primary px-4">
              Join Now
            </Link>
            <a href="#" className="btn btn-outline-light px-4 ms-3">
              Learn More
            </a>
          </div>
        </div>
      </header>
    </>
}

export default Header;