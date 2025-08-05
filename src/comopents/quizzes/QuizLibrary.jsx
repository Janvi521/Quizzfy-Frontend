import React from "react";
import { Link } from "react-router-dom";
const QuizLibrary = () => {
  return (
    <div className="container-fluid quizzy-dashboard">
      <div className="row">
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
                            <Link className="quizzy-nav-link" to="/profile">&nbsp; &nbsp;Settings</Link>
                        </div>
                    </div>

        {/* Main content */}
        <div className="col-md-10  p-4  custom-bg ">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Introduction to Biology</h3>
            <div className="quizzy-buttons">
              <button className="btn btn-outline-light btn-sm">Edit</button>
              <button className="btn btn-outline-light btn-sm mx-2">Share</button>
              <button className="btn btn-primary btn-sm">Preview</button>
            </div>
          </div>
          <p className=" mb-4">Basic concepts of biology for beginners</p>

          {/* Stats */}
          <div className="row g-4 mb-4">
            {[
              { label: "Total Completions", value: "28" },
              { label: "Completion Time", value: "12:45" },
              { label: "Average Score", value: "78.5%" },
              { label: "Top Score", value: "95%" },
            ].map((stat, index) => (
              <div className="col-md-3" key={index}>
                <div className="card quizzy-card p-3 text-center">
                  <p className="mb-1 ">{stat.label}</p>
                  <h4>{stat.value}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 mb-4">
            {/* Recent Completions */}
            <div className="col-md-6">
              <div className="card quizzy-card p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Recent Completions</h5>
                  <button className="btn btn-outline-light btn-sm">View All Results</button>
                </div>
                <table className="table table-dark table-borderless table-sm mb-0">
                  <thead className="text-muted small">
                    <tr>
                      <th>Student</th>
                      <th>Score</th>
                      <th>Time Spent</th>
                      <th>Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Alex Johnson", "85%", "15:24", "2 hours ago"],
                      ["Emma Wilson", "92%", "18:24", "2 hours ago"],
                      ["Michael Cohen", "92%", "18:24", "2 hours ago"],
                      ["Sophia Garcia", "92%", "18:24", "2 hours ago"],
                    ].map(([name, score, time, completed], index) => (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{score}</td>
                        <td>{time}</td>
                        <td>{completed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Question Performance */}
            <div className="col-md-6">
              <div className="card quizzy-card p-3">
                <h5 className="mb-3">Question Performance</h5>
                {[
                  "1. What is the basic unit of life?",
                  "2. Which organelle is responsible for...?",
                  "3. What is the process of cell division...?",
                  "4. Which of the following is NOT a...?",
                  "5. What is the main function of mito...?",
                ].map((question, index) => (
                  <div className="mb-3" key={index}>
                    <p className="mb-1 small">{question}</p>
                    <div className="progress quizzy-progress">
                      <div className="progress-bar" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="card quizzy-card p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Share This Quiz</h6>
                <p className=" small mb-0">Share this quiz with students or colleagues</p>
              </div>
              <button className="btn btn-outline-light">
                🔗 Share Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLibrary;
