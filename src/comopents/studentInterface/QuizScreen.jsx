

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState,useRef } from "react";
import Confetti from "react-confetti"
import EndPoint from "../../apis/EndPoint";
import axios from "axios";
import "./result.css"
import useWindowSize from 'react-use/lib/useWindowSize';


function QuizScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  

  const { question: quizData, accessCode,student : name,email} = location.state || {};
  console.log("question: ",quizData," student :",name.name)

  const [student, setStudent] = useState({ name: "", email: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  if (!quizData || !quizData.question || quizData.question.length === 0) {
    return <p className="text-white">No questions found. Please go back.</p>;
  }

  const questions = quizData.question;
  const currentQuestion = questions[currentIndex];

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = answer;
    setSelectedAnswers(updatedAnswers);
    console.log("jjjjjjjjj:",selectedAnswers)
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScore();
    }
  };

 const calculateScore = async () => {
  let correct = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) correct++;
  });

  const percentage = Math.round((correct / questions.length) * 100);
  setScore(percentage);

  try {
    await axios.post(`${EndPoint.StUDENT_DATAIL_BYQUIZ}/${quizData._id}`, {
      name: name.name,
      email: name.email,
      score: percentage,
    //   accessCode,
    //   answers: selectedAnswers,
    });

    console.log("✅ Submitted to backend");
  } catch (err) {
    console.error("❌ Error sending data to backend:", err);
  }
};
const [showConfetti, setShowConfetti] = useState(false);
const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
const cardRef = useRef(null);

// useEffect(() => {
//   const updateCardSize = () => {
//     if (cardRef.current) {
//       const { offsetWidth, offsetHeight } = cardRef.current;
//       setDimensions({ width: offsetWidth, height: offsetHeight });
//       console.log("📏 Card size:", offsetWidth, offsetHeight); // optional for debug
//     }
//   };

//   updateCardSize(); // initial call
//   window.addEventListener("resize", updateCardSize); // handle window resize

//   const timer = setTimeout(() => setShowConfetti(false), 4000);

//   return () => {
//     clearTimeout(timer);
//     window.removeEventListener("resize", updateCardSize);
//   };
// }, []);
useEffect(() => {
  if (score !== null) {
    const updateCardSize = () => {
      if (cardRef.current) {
        const { offsetWidth, offsetHeight } = cardRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
        console.log("📏 Card size:", offsetWidth, offsetHeight); // for debug
      }
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);

    setShowConfetti(true); // ✅ start confetti after size is known

    // const timer = setTimeout(() => setShowConfetti(false), 8000);

    return () => {
    //   clearTimeout(timer);
    //   window.removeEventListener("resize", updateCardSize);
    };
  }
}, [score]); // ✅ Run this only when score is set

if (score !== null) {
  return (

    
    <div  className="container-fluid " >
        <div
            className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden rounded-4"
            style={{ zIndex: 0 }}
          >
            <Confetti
            //   width={dimensions.width}
            //   height={dimensions.height}
              numberOfPieces={200}
              gravity={0.2}
            //  recycle={false}
              tweenDuration={300}
            />
          </div>
        
    <div className="d-flex justify-content-center align-items-center min-vh-100 custom-bg text-white">
         
      <div
        className="result-card text-center p-4 rounded-4 shadow-lg position-relative"
        ref={cardRef}
        style={{ background: "#1e1e2f", maxWidth: "500px", width: "90%" }}
      >
        {/* Confetti inside the card only */}
        {showConfetti && dimensions.width > 0 && dimensions.height > 0 && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden rounded-4"
            style={{ zIndex: 0 }}
          >
            <Confetti
              width={dimensions.width}
              height={dimensions.height}
              numberOfPieces={20}
              gravity={0.2}
            //  recycle={false}
              tweenDuration={300}
            />
          </div>
        )}

        {/* Actual card content */}
        <div className="position-relative" style={{ zIndex: 1 }}>
          <div className="badge-icon mb-3 fs-1">🏅</div>
          <h2 className="text-success fw-bold">Congrats {name.name}</h2>
          <p >You’ve completed the quiz successfully!</p>
          <div className="my-4">
            {/* <h2>👤 {name.name}</h2> */}
            {/* <h6>📧 {name.email}</h6> */}
          </div>
          <div
            className="border border-warning rounded-3 p-3 mb-3"
            style={{ backgroundColor: "#2a2a40" }}
          >
            <h1 className="display-3 fw-bold text-warning mb-0">{score}%</h1>
            <p className="text-muted mb-0">Your Score</p>
          </div>
          <Link  to="/"   className="btn btn-success px-4 mt-2">Continue</Link>
        
        </div>
      </div>
    </div>
</div>
  );
}


  return (
    <div className="container-fluid custom-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-dark border" style={{ borderRadius: '50%' }}>&lt;</button>
        <h5 className="m-0">Science & Technology Quiz</h5>
        <div></div>
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <small style={{ fontSize: '1.1rem' }}>Question {currentIndex + 1} of {questions.length}</small>
          <small style={{ fontSize: '1.1rem' }}>{Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete</small>
        </div>
        <div className="progress" style={{ height: '10px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%`, backgroundColor: '#A020F0' }}
          ></div>
        </div>
      </div>

      {/* {currentIndex === 0 && (
        <div className="mb-4">
          <input
            type="text"
            className="form-control bg-dark text-white mb-2"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            className="form-control bg-dark text-white"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleInputChange}
            required
          />
        </div>
      )} */}

      <div className="flex-grow-1 d-flex flex-column justify-content-between">
        <div className="card mb-3" style={{ backgroundColor: '#1e1e1e', border: 'none', padding: '30px' }}>
          <div className="card-body" style={{ fontSize: '1.3rem' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge" style={{ backgroundColor: '#A020F0', fontSize: '1rem' }}></span>
              <div className="d-flex align-items-center">
                <span style={{ color: 'red', fontWeight: 'bold' }}></span>
                {/* <span className="ms-3 small">Medium</span> */}
              </div>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{currentQuestion?.q}</p>
          </div>
        </div>

        <div className="row g-3 mb-4">
          {currentQuestion?.options.map((opt, idx) => (
            <div className="col-md-6" key={idx}>
              <button
                className="btn w-100 text-start"
                style={{
  backgroundColor:
    selectedAnswers[currentIndex] === opt ? '#A020F0' : '#1e1e1e',
  border: selectedAnswers[currentIndex] === opt ? '2px solid #fff' : 'none',
  color: '#fff',
  fontSize: '1.2rem',
  padding: '15px',
}}

                onClick={() => handleAnswerSelect(opt)}
              >
                <strong>{String.fromCharCode(65 + idx)}</strong> {opt}
              </button>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary px-4 py-2" style={{ backgroundColor: '#333', border: 'none', fontSize: '1.1rem'  }}   onClick={handleNext} >Skip </button>
          <button className="btn px-4 py-2" style={{ backgroundColor: '#A020F0', color: '#fff', fontSize: '1.1rem' }} onClick={handleNext}>
            {currentIndex === questions.length - 1 ? "Submit" : "Next Question >"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;

