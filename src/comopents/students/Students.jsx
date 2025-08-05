import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Students = () => {
  const students = [
  { name: "Aarav Sharma", class: "10A", quizzes: 12, score: "85%", lastActive: "2 hours ago", avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Priya Verma", class: "10A", quizzes: 11, score: "90%", lastActive: "1 hour ago", avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Rahul Mehra", class: "10A", quizzes: 10, score: "78%", lastActive: "3 hours ago", avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Sneha Iyer", class: "10A", quizzes: 12, score: "92%", lastActive: "30 minutes ago", avatar: "https://i.pravatar.cc/40?img=4" },
  { name: "Karan Malhotra", class: "10A", quizzes: 9, score: "81%", lastActive: "5 hours ago", avatar: "https://i.pravatar.cc/40?img=5" },
  { name: "Ishita Singh", class: "10A", quizzes: 13, score: "88%", lastActive: "1 hour ago", avatar: "https://i.pravatar.cc/40?img=6" },
  { name: "Rohan Das", class: "10A", quizzes: 12, score: "80%", lastActive: "45 minutes ago", avatar: "https://i.pravatar.cc/40?img=7" },
  { name: "Meera Joshi", class: "10A", quizzes: 14, score: "95%", lastActive: "15 minutes ago", avatar: "https://i.pravatar.cc/40?img=8" },
  { name: "Aniket Reddy", class: "10A", quizzes: 11, score: "77%", lastActive: "4 hours ago", avatar: "https://i.pravatar.cc/40?img=9" },
  { name: "Tanya Kapoor", class: "10A", quizzes: 13, score: "89%", lastActive: "2 hours ago", avatar: "https://i.pravatar.cc/40?img=10" },
  { name: "Vikram Bansal", class: "10A", quizzes: 10, score: "83%", lastActive: "3 hours ago", avatar: "https://i.pravatar.cc/40?img=11" },
  { name: "Divya Nair", class: "10A", quizzes: 12, score: "87%", lastActive: "50 minutes ago", avatar: "https://i.pravatar.cc/40?img=12" },
  
];

  return (
    <>
      <Navbar />
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
                                      <Link className="quizzy-nav-link" to="/profile">&nbsp; &nbsp;Settings</Link>
                                  </div>
                              </div>

            {/* Main Content */}
    <div className="container-fluid bg-dark text-white py-4 px-5  custom-bg" style={{ minHeight: '100vh' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3>Students</h3>
            <p className="text-white">Manage your students and track their progress</p>
          </div>
          <button className="btn btn-purple">👤 Invite Students</button>
        </div>

        <div className="bg-black rounded p-4">
          <h5 className="mb-3">Student Directory</h5>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="btn-group">
              <button className="btn btn-secondary active">All Students</button>
              <button className="btn btn-secondary">10A</button>
              <button className="btn btn-secondary">10B</button>
            </div>
            <div className="d-flex gap-2">
              <input type="text" placeholder="Search students..." className="form-control" />
              <select className="form-select w-auto">
                <option>Name</option>
                <option>Score</option>
                <option>Last Active</option>
              </select>
            </div>
          </div>

          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Quizzes Taken</th>
                <th>Average Score</th>
                <th>Last Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={s.avatar} alt="avatar" className="rounded-circle me-2" width="32" height="32" />
                    {s.name}
                  </td>
                  <td>{s.class}</td>
                  <td>{s.quizzes}</td>
                  <td>{s.score}</td>
                  <td>{s.lastActive}</td>
                  <td><i className="bi bi-three-dots-vertical"></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
      <Footer />
    </>
  );
};

export default Students;
