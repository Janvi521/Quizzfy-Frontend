import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import EndPoint from '../../apis/EndPoint';

const Dashboard = () => {
  const currentUser = useSelector((state)=> state.User.user)
const [quizzes,setQuizzes]=useState([]);
  //console.log("currectUser",currentUser.quizAll[0]);
 // console.log("currectUser",quizzes);
const fetchAllDetails = async () => {
  try {
    const all = await axios.get(`https://quizzfy-backend-2.onrender.com/user/quizAll/${currentUser._id}`);
    setQuizzes(all.data.quizAll); 
    console.log("Populated quizAll:", all.data.quizAll);  
  } catch (error) {
    console.error("Not Found", error);
  }
};
 useEffect(() => {
  if (currentUser?._id) {
    fetchAllDetails(); 
  }
}, [currentUser]);
  

    return <>
        <Navbar/>
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-dark text-white sidebar p-3" style={{ width: '250px' }}>
                <a className=' className="navbar-brand fw-bold text-gradient dark"'>Quizzfy</a>
                <br></br>
                <br></br>
                <nav className="nav flex-column">
                    <Link  className="quizzy-nav-link" to="/Dashboard">Dashboard</Link>
                    <Link to="/quizzes"   className="quizzy-nav-link">Quizzes</Link>
                    <Link className="quizzy-nav-link" to="/events">Events</Link>
                    <Link className="quizzy-nav-link" to="/students">Students</Link>
                </nav>
                <div className="mt-4">
                    <h5>Manage</h5>
                    <br></br>
                    <Link className="nav-link text-white" to="/profile">&nbsp; &nbsp;Settings</Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 custom-bg text-white p-4" >
                <div className="quizzes-header ml-2 mr-2">
                    <h2>Quizzes</h2>
                    <p>Create, manage and analyze your quizzes</p>
                    <Link to="/createQuiz1 " className="create-btn mt-2 ">+ Create New Quiz</Link>
                </div>
                <h2>Dashboard</h2>
                <p>Welcome back,   Here’s {currentUser.name} what’s happening with your quizzes</p>
                
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5>Total Quizzes</h5>
                                <h2>{quizzes.length}</h2>
                                <span className="text-success">+12.5%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5>Active Events</h5>
                                <h2>2,543</h2>
                                <span className="text-success">+12.5%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5>Students</h5>
                                <h2>2,543</h2>
                                <span className="text-success">+12.5%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5>Avg. Completion</h5>
                                <h2>2,543</h2>
                                <span className="text-success">+12.5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Events */}
                
    <div className="events-container">
      <h2 className="events-title">Recent Events</h2>
      <p className="events-subtitle">Manage your upcoming and active quiz events</p>
{quizzes.map((quiz,index)=>{ return  <div key={index} className="event-card">
        <div className="event-icon">
          📅
        </div>
        <div className="event-details">
          <h3>{quiz.title}</h3>
          <p>📅 Today, 2:30 PM &nbsp; </p>
        </div>
        <div className="event-action purple">View Live</div>
      </div> })}
    </div>

             {/* Recent Quizzes */}
<h4 className="text-white mb-3">Recent Quizzes</h4>
<div className="recent-quiz-list mb-4">
  {quizzes.slice(-2).map((quiz,index)=>{ return <div key={index} className="quiz-item">
    <h6>{quiz.title}</h6>
    <span>{quiz.question.length} questions, 28 completions</span><br />
    <strong>Completion Rate:</strong>
    <div className="progress mt-2">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }}></div>
    </div>
  </div>
  })}
  
</div>


                {/* Create New Quiz Button */}
                <button className="btn btn-primary">Create New Quiz</button>
            </div>
        </div>
        <Footer/>
    </>
};

export default Dashboard;

