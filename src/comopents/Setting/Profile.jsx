import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Profile = () => {
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
        <div className="flex-grow-1 custom-bg text-white p-5"     >
          <div className="d-flex  justify-content-between align-items-center mb-4">
            <h2>Settings</h2>
            <button className="btn btn-outline-light">+ Create Quiz</button>
          </div>

          {/* <p className="text-muted">Manage your account settings and preferences</p> */}

          {/* Tabs */}
          <div className="d-flex  gap-3 mb-4">
            <button className="btn btn-purple ">Profile</button>
            <button className="btn btn-purple">Account</button>
            <button className="btn btn-purple">Notifications</button>
            <button className="btn btn-purple">Appearance</button>
            <button className="btn btn-purple">Privacy</button>
            <button className="btn btn-purple">Billing</button>
          </div>

          {/* Profile Information Card */}
          <div className=" p-4 rounded   " style={{background:"#202d4eff"}}>
            <h4 className="mb-4">Profile Information</h4>
            {/* <p className="text-muted">Update your profile information and public details</p> */}

            <div className="row align-items-center mb-4">
              <div className="col-md-2 text-center">
                <div className="rounded-circle bg-secondary mx-auto bg-light" style={{ width: '80px', height: '80px' }}></div>
                <button className="btn btn-sm btn-outline-light mt-2">Change Photo</button>
              </div>

              <div className="col-md-5">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control  text-white border-0" defaultValue="janvi" style={{background:"#070737ff"}}  />
              </div>

              <div className="col-md-5">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control  text-white border-0" defaultValue="ojha"   style={{background:"#070737ff"}}  />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control  text-white border-0" defaultValue="janvi@gmail.com"   style={{background:"#070737ff"}}   />
              </div>
              <div className="col-md-6">
                <label className="form-label">Role</label>
                <input type="text" className="form-control  text-white border-0" defaultValue="Teacher"   style={{background:"#070737ff"}}  />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Bio</label>
              <textarea rows="3" className="form-control  text-white border-0"   style={{background:"#070737ff"}} >
 Passionate about making learning fun and engaging through interactive quizzes.
              </textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>

          {/* Footer Help */}
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
