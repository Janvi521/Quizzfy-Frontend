import Lottie from "lottie-react";
import femaleCharacterWaving from "../../animations/femaleCharacterWaving.json";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function StudentLogin() {
    const navigate = useNavigate();
    const location = useLocation();
    const {question,accessCode} = location.state;
   // console.log("Location data here: Question = ",question," accessCode =  ",accessCode);
    const [state,setState] =useState({
        name:"",
        email:""
    })
    const handleSubmit = (event) => {
    event.preventDefault();

    if (state.name && state.email) {
      console.log("name:", state.name, "email:", state.email);
      
      navigate("/QuizScreen", {
        state: {
          question,
          accessCode,
          student: {
            name: state.name,
            email: state.email
          }
        }
      });
    } 
  };

    return (
        <>
            <div className="custom-bg   d-flex align-items-center " style={{}}>
                <div
                    className="container-fluid px-4   rounded-4"
                    style={{ width: "50%", height: "10%" }}
                >
                    <Lottie
                        animationData={femaleCharacterWaving}
                        loop={true}
                        className="w-40"
                    />
                </div>
                <form onClick={handleSubmit}>
                    <div
                    className="card p-5 ml-4 ps-5 p-4"
                    style={{
                        backgroundColor: "#0d0101ff",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "700px",
                        boxShadow: "0 0 15px rgba(61, 146, 232, 0.69)",
                        marginRight: "300px",
                    }}
                >
                    <h2 className="text-center mb-4 text-white">
                        <strong>Welcome to the</strong>{" "}
                        <span className="navbar-brand fw-bold text-gradient dark">
                            Quizzfy
                        </span>
                    </h2>

                    {/* Name Input */}
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="form-label"
                            style={{ color: "#ccc" }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            style={{
                                backgroundColor: "#bebebeff",
                                color: "black",
                                border: "none",
                            }}
                            onChange={(event)=>{
                                setState({...state,name:event.target.value})
                            }}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="form-label"
                            style={{ color: "#ccc" }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            style={{
                                backgroundColor: "#b9b2b2ff",
                                color: "black",
                                border: "none",
                            }}
                            onChange={(event)=>setState({...state,email:event.target.value})}
                        />
                    </div>

                    {/* Start Button */}
                    <div className="d-grid">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "#a855f7",
                                color: "white",
                            }}

                        >  Start Quiz ➤</button>
                    </div>
                </div></form>
                
            </div>
        </>
    );
}

export default StudentLogin;
