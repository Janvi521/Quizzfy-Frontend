import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EndPoint from "../../apis/EndPoint";
import axios from "axios";
function HomeNavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

    
  const handleSearch =  async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return ; 
    try{
        const accessCode = searchTerm;
        
        const result =   await axios.get(`${EndPoint.QUIZ_BY_ID}/${accessCode}`);
        const quizData = result.data.quizz;
       
        navigate("/studentInfo", { state: { question: quizData ,accessCode: searchTerm} });

        console.log("Quiz BY Access code",result.data.quizz);

    }catch(err){
        console.log("NOT FIND QUIZ",err)

    }
    
  };



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold text-gradient dark">
          <h3 className="mb-0"><strong>Quizzfy</strong></h3>
        </Link>

        {/* Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center + Right */}
        <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
{/*             <li className="nav-item"><Link className="nav-link text-white" to="/Quiz">Quiz</Link></li> */}
            <li className="nav-item"><a className="nav-link text-white" href="#">Topics</a></li>
{/*             <li className="nav-item"><a className="nav-link text-white" href="#">Rewards</a></li> */}
            <li className="nav-item"><a className="nav-link text-white ms-5" href="#">About</a></li>
          </ul> 

          {/* 🔍 Search Bar with hint under input and button beside */}
          <div className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start me-lg-3 my-2 my-lg-0" style={{ position: "relative", maxWidth: "300px" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter  Access code "
                 value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                 
              />
              <button className="btn btn-outline-light" onClick={handleSearch} >
                Search
              </button>
            </div>
           
          </div>

          {/* Right Auth Buttons */}
          <div className="d-flex flex-lg-row flex-column gap-2 my-2 my-lg-0" >
            <Link to="/signIn" className="btn btn-outline-light ms-lg-2">Sign In</Link>
            <Link to="/signUp" className="btn btn-outline-light ms-lg-2 gradient-backGround">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}



export default HomeNavbar
