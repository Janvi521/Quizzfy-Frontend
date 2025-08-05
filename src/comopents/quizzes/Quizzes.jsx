import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Quizzes() {

    return <>
        <Navbar />

        <div className="d-flex   ">
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


            <div className="quizzes-page   custom-bg " style={{ width: '1300px' }}>
                <div className="quizzes-header ml-2 mr-2">
                    <h2>Quizzes</h2>
                    <p>Create, manage and analyze your quizzes</p>
                    <Link to="/createQuiz1" className="create-btn mt-2 ">+ Create New Quiz</Link>
                </div>

                <div className="quiz-library">
                    <div className="library-header">
                        <h4>Quiz Library</h4>
                        <div className="filters">
                            <button className="active">All Quizzes</button>
                            <button>Published</button>
                            <button>Drafts</button>
                        </div>
                        <div className="search-filter">
                            <input type="text" placeholder="Search quizzes..." />
                            <select>
                                <option>All Categories</option>
                                <option>Science</option>
                                <option>Math</option>
                            </select>
                        </div>
                    </div>

                    <div className="quiz-list">
                        {/* Quiz Item */}
                        <div className="quiz-card">
                            <div className="quiz-info">
                                <h5>Introduction to Biology <span className="badge green">Published</span></h5>
                                <p>Basic concepts of biology for beginners</p>
                                <div className="meta">
                                    <span>📄 15 questions</span>
                                    <span>⏱ 20 min</span>
                                    <span>👥 32 completions</span>
                                    <span>🕒 Created just now</span>
                                    
                                </div>
                            </div>
                            <div className="quiz-actions text-white">
                                {/* <button className="view-btn">View</button> */}
                                
                                <Link to="/quizLibrary" className="btn btn-primary btn-sm">View</Link>
<button className="btn btn-outline-secondary btn-sm">⋮</button>


                            </div>
                        </div>

                        {/* Copy more quiz cards as needed */}
                        <div className="quiz-card">
                            <div className="quiz-info">
                                <h5>Advanced Mathematics <span className="badge green">Published</span></h5>
                                <p>Basic concepts of biology for beginners</p>
                                <div className="meta">
                                    <span>📄 15 questions</span>
                                    <span>⏱ 20 min</span>
                                    <span>👥 32 completions</span>
                                    <span>🕒 Created just now</span>
                                </div>
                            </div>
                            <div className="quiz-actions">
                                <button className="view-btn">View</button>
                                <button className="menu-btn">⋮</button>
                            </div>
                        </div>

                        <div className="quiz-card">
                            <div className="quiz-info">
                                <h5>Chemistry Fundamentals <span className="badge yellow">Draft</span></h5>
                                <p>Basic concepts of biology for beginners</p>
                                <div className="meta">
                                    <span>📄 15 questions</span>
                                    <span>⏱ 20 min</span>
                                    <span>👥 32 completions</span>
                                    <span>🕒 Created just now</span>
                                </div>
                            </div>
                            <div className="quiz-actions">
                                <button className="view-btn">View</button>
                                <button className="menu-btn">⋮</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Quizzes;