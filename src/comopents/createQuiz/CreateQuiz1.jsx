import { useRef, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function CreateQuiz1() {
  const navigate = useNavigate();
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    description: '',
    category: 'React',
    difficultyLevel: 'Medium',
    timeLimit: '',
    passingScore: '',
    randomizeQuestions: false,
    immediateResults: true
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/createQuiz2',{state:newQuiz});
    
  }

  return <>
    <Navbar />
    <div className=" custom-bg  mt-4">
      <div className="quiz-builder-header mt-4">
        <Link to="/Dashboard" className="quiz-back-button"  style={{ textDecoration: 'none' }}>&nbsp; ←  </Link>
        <h1 className="quiz-title-heading">Create New Quiz</h1>
        <div className="quiz-header-actions">
          {/* <button className="btn-save-draft">Save Draft</button> */}
          {/* <button className="btn-preview-quiz">Preview</button> */}
        </div>
      </div>
<form  onSubmit={handleSubmit}>
  <div>
      <div className="quiz-content-sections">
        <div className="quiz-info-panel">
          <h2 className="section-heading">Quiz Details</h2>
          <p className="section-subtext">Basic information about your quiz</p>
          <label className="quiz-label">Quiz Title
            <input   value={newQuiz.title} onChange={(event) => setNewQuiz({ ...newQuiz, title: event.target.value })} type="input" className="quiz-input" />
          </label>
          <label className="quiz-label">Description
            <textarea    value={newQuiz.description} onChange={(event) => setNewQuiz({ ...newQuiz, description: event.target.value })} className="quiz-textarea"></textarea>
          </label>
          <div className="quiz-input-row">
            <label className="quiz-label">Category
              <select value={newQuiz.category} onChange={(event) => setNewQuiz({ ...newQuiz, category: event.target.value })} className="quiz-select">
                <option>React</option>
                <option>Artificial Intelligence</option>
                <option>Arts</option>
                <option>Blockchain</option>
                <option>Cloud Computing</option>
                <option>Commerce</option>
                <option>Cybersecurity</option>
                <option>Data Science</option>
                <option>DevOps</option>
                <option>Education</option>
                <option>Engineering</option>
                <option>Game Development</option>
                <option>Law</option>
                <option>Machine Learning</option>
                <option>Management</option>
                <option>Mathematics</option>
                <option>Medicine</option>
                <option>Mobile App Development</option>
                <option>Science</option>
                <option>Web Development</option>

              </select>
            </label>
            <label className="quiz-label">Difficulty Level
              <select  value={newQuiz.difficultyLevel} onChange={(event) => setNewQuiz({ ...newQuiz, difficultyLevel: event.target.value })} className="quiz-select">
                <option>Easy</option>
                <option >Medium</option>
                <option>Hard</option>
              </select>
            </label>
          </div>
        </div>

        <div className="quiz-settings-panel">
          <h2 className="section-heading">Quiz Settings</h2>
          <p className="section-subtext">Configure how your quiz works</p>
          <label className="quiz-label">Time Limit (minutes)
            <input value={newQuiz.timeLimit} onChange={(event) => setNewQuiz({ ...newQuiz, timeLimit: event.target.value })} type="number" className="quiz-input" />
          </label>
          <label className="quiz-label">Passing Score (%)
            <input  value={newQuiz.passingScore} onChange={(event) => setNewQuiz({ ...newQuiz, passingScore: event.target.value })} type="number" className="quiz-input" />
          </label>

          <div className="quiz-toggle-wrapper">
            <label className="quiz-toggle">
              <span>Randomize Questions</span>
              <input checked={newQuiz.randomizeQuestions} onChange={(event) => setNewQuiz({ ...newQuiz, randomizeQuestions: event.target.checked })} type="checkbox"  />
              <span className="quiz-slider"></span>
            </label>
            <label className="quiz-toggle">
              <span>Immediate Results</span>
              <input checked={newQuiz.immediateResults} onChange={(event) => setNewQuiz({ ...newQuiz, immediateResults: event.target.checked })} type="checkbox"  />
              <span className="quiz-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="quiz-footer-buttons">
        <Link to="/Dashboard" className="btn-prev"  style={{ textDecoration: 'none' }}>‹ Prev</Link>
        <button type="submit" className="btn-next">Next ›</button>
      </div>
      </div>
      </form>
    </div>
    <Footer />
  </>

}

export default CreateQuiz1;
