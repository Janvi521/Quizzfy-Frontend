import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar"; // ✅ fix if it should be "../navbar/Navbar"
import { useSelector } from "react-redux";

function CreateQuiz2() {
  const location = useLocation();
  const quizDetail = location.state;
  const currentUser = useSelector((state)=> state.User.user)

  const [questions, setQuestions] = useState([
    {
      text: "",
      options: ["", "", "", ""],
      correctOption: null,
      points: 10,
      type: "Multiple Choice"
    }
  ]);

  // Add a new empty question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        text: "",
        options: ["", "", "", ""],
        correctOption: null,
        points: 10,
        type: "Multiple Choice"
      }
    ]);
  };

  // Update a question field
  const updateQuestion = (index, key, value) => {
    const updated = [...questions];
    updated[index][key] = value;
    setQuestions(updated);
  };

  // Update an option for a question
  const updateOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  // Update correct answer
  const selectCorrectOption = (qIndex, optIndex) => {
    const updated = [...questions];
    updated[qIndex].correctOption = optIndex;
    setQuestions(updated);
  };

  // Submit data to server using axios
  const submitQuiz = () => {
    const payload = {
    ...quizDetail,
    question: questions,
    createdBy: currentUser._id
  };
    axios
      .post("http://localhost:3000/api/submit-quiz",payload)
      .then((res) => {
        console.log("Quiz submitted:", res.data);
        alert("Quiz submitted successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Error submitting quiz");
      });
  };

  return (
    <>
      <Navbar />
      <div className="quiz-page custom-bg">
<div className="quiz-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
  {/* <Link  to="/createQuiz1" className="quiz-back-btn">←</Link> */}
    {/* <Link to="/Dashboard" className="quiz-back-button"  style={{ textDecoration: 'none' }}>&nbsp; ←  </Link> */}
  <h2 className="quiz-title" style={{ margin: 0 }}>Create New Quiz</h2>
  <h1 className="quiz-subtitle" style={{ margin: 0 }}>Add questions, set answers and configure quiz settings</h1>
  <div className="quiz-actions" style={{ display: 'flex', gap: '0.8rem' }}>
    <button className="btn-draft">Save Draft</button>
    <button className="btn-preview">Preview &nbsp; &nbsp;</button>
  </div>
</div>

        <div className="quiz-section">
          <h3 className="section-title">Quiz Questions</h3>
          <p className="section-subtitle">Create and manage your quiz questions</p>

          {questions.map((q, index) => (
            <div className="question-card" key={index}>
              <div className="question-header">
                <span>Question {index + 1}</span>
                <div className="question-meta">
                  <label>Points:</label>
                  <input
                    type="number"
                    value={q.points}
                    className="points-input"
                    onChange={(e) => updateQuestion(index, "points", e.target.value)}
                  />
                  <select
                    className="question-type"
                    value={q.type}
                    onChange={(e) => updateQuestion(index, "type", e.target.value)}
                  >
                    <option>Multiple Choice</option>
                    <option>True / False</option>
                  </select>
                  <button className="btn-delete" onClick={() => {
                    const updated = [...questions];
                    updated.splice(index, 1);
                    setQuestions(updated);
                  }}>🗑️</button>
                </div>
              </div>

              <div className="question-body">
                <label className="question-label">Question Text</label>
                <textarea
                  className="question-input"
                  rows="2"
                  value={q.text}
                  onChange={(e) => updateQuestion(index, "text", e.target.value)}
                />

                <div className="answer-options">
                  <label className="answer-label">Answer Options</label>
                  {q.options.map((opt, optIndex) => (
                    <div className="answer-option" key={optIndex}>
                      <input
                        type="radio"
                        name={`answer-${index}`}
                        checked={q.correctOption === optIndex}
                        onChange={() => selectCorrectOption(index, optIndex)}
                      />
                      <input
                        type="text"
                        className="option-input black-text"
                        style={{
    all:'unset',
    
  }}
                        value={opt}
                        onChange={(e) =>
                          updateOption(index, optIndex, e.target.value)
                        }
                        placeholder={`Option ${optIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="add-question-wrapper">
            <button className="btn-add-question" onClick={addQuestion}>+ Add Question</button>
          </div>

          <div className="quiz-footer">
            <button className="btn-prev">← Prev</button>
            <button className="btn-publish" onClick={submitQuiz}>Preview & Publish</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateQuiz2;
