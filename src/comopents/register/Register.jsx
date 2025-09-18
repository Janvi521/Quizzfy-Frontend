import React, { useRef, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, Link } from "react-router-dom";
import {toast,ToastContainer} from "react-toastify";
import validator from "validator";
import {jwtDecode} from "jwt-decode"
import axios from "axios";
import EndPoint from "../../apis/EndPoint";

function Register() {
  
  const navigate = useNavigate();

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const studentRef = useRef(null);
  const teacherRef = useRef(null);

  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (selectedRole) => {
    setRole(selectedRole);

    
    studentRef.current.style.backgroundColor = "white";
    teacherRef.current.style.backgroundColor = "white";

    if (selectedRole === "student") {
      studentRef.current.style.backgroundColor = "#549678ff";
    } else {
      teacherRef.current.style.backgroundColor = "#5085ffff";
    }
  };

  const validateForm = () => {
    const name = nameInput.current.value.trim();
    const email = emailInput.current.value.trim();
    const password = passwordInput.current.value.trim();

    if (!role) {
      alert("Please select a role");
      return false;
    }

    if (!name) {
      nameErrorRef.current.innerHTML = "Name is required";
      return false;
    } else {
      nameErrorRef.current.innerHTML = "";
    }

    if (!email) {
      emailErrorRef.current.innerHTML = "Email is required";
      return false;
    } else if (!validator.isEmail(email)) {
      emailErrorRef.current.innerHTML = "Email is invalid";
      return false;
    } else {
      emailErrorRef.current.innerHTML = "";
    }

    if (!password) {
      passwordErrorRef.current.innerHTML = "Password is required";
      return false;
    } else {
      passwordErrorRef.current.innerHTML = "";
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const payload={
      name:nameInput.current.value,
      email:emailInput.current.value,
      password:passwordInput.current.value,
      role
    }
    try{
      const result = await axios.post(EndPoint.SIGN_UP,payload)
      console.log("registration succefully ", result.data);
      navigate("/dashboard");
    }catch(er){
      console.log("Registration Error:",er);
      toast.error( er?.response?.data?.error ||"something went wrong");
    }
    setIsLoading(false);
  };

  const responseSuccessGoogle = async (response) => {
    if(!role){
      alert("Please select a role first");
    }
    try{
      const decoded=jwtDecode(response.credential);
      const payload ={
        name:decoded.name,
        email:decoded.email,
        profilePic:decoded.picture,
        googleToken:response.credential,
        role
      };
      const res= await axios.post(EndPoint.GOOGLE_SIGN_UP,payload)
      console.log("Decod google User ",decoded);

    }catch(er){
console.error("Google Signup Error:", er);
toast.error(err?.response?.data?.error || "Something went wrong");
    }


    console.log("Google Login Success:", response);
  };

  const responseErrorGoogle = (error) => {
    console.log("Google Login Failed:", error);
  };

  return <>
  <ToastContainer/>
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        {/* Left Section */}
        <div
          className="col-md-7 d-flex justify-content-center align-items-center text-white"
          style={{
            backgroundImage: `url('/assets/Screenshot 2025-07-20 115705.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-gradient" style={{ fontSize: "50px", fontWeight: "bold" }}>
            Quizzfy
          </h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="col-md-5 d-flex flex-column justify-content-center px-5 bg-white text-dark">
          <div className="p-4 rounded shadow" style={{ maxWidth: "500px", width: "100%" }}>
            <h3 className="fw-bold mb-2">Create Account</h3>
            <p className="text-muted mb-4">
              Choose your account type and start your journey with us
            </p>

            <div className="d-flex justify-content-between gap-3 mb-4">
              <button type="button" className="btn p-0 border-0 bg-transparent flex-fill" onClick={() => handleClick("student")}> 
                <div ref={studentRef} className="border rounded p-3 text-center" style={{ cursor: "pointer" }}>
                  <img src="https://img.icons8.com/ios-filled/50/graduation-cap.png" alt="student" style={{ width: "30px", height: "30px" }} />
                  <h6 className="mt-2 fw-bold">Student</h6>
                  <p className="text-muted small">Take quizzes and track your progress</p>
                </div>
              </button>

              <button type="button" className="btn p-0 border-0 bg-transparent flex-fill" onClick={() => handleClick("teacher")}> 
                <div ref={teacherRef} className="border rounded p-3 text-center" style={{ cursor: "pointer" }}>
                  <img src="https://img.icons8.com/ios-filled/50/classroom.png" alt="teacher" style={{ width: "30px", height: "30px" }} />
                  <h6 className="mt-2 fw-bold">Teacher</h6>
                  <p className="text-muted small">Create quizzes and manage students</p>
                </div>
              </button>
            </div>

{/*             <div className="mb-3 text-center">
              <GoogleLogin 
              onSuccess={responseSuccessGoogle}
               onError={responseErrorGoogle} />
            </div>

            <p className="text-center">___________ or ___________</p> */}

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input ref={nameInput} type="text" className="form-control border-0 border-bottom" placeholder="Name..." />
              <small ref={nameErrorRef} className="text-danger"></small>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input ref={emailInput} type="email" className="form-control border-0 border-bottom" placeholder="Email Address..." />
              <small ref={emailErrorRef} className="text-danger"></small>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input ref={passwordInput} type="password" className="form-control border-0 border-bottom" placeholder="Password..." />
              <small ref={passwordErrorRef} className="text-danger"></small>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                I agree to the Terms of Use
              </label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn text-white" style={{ background: "#6d28d9" }} disabled={isLoading}>
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>

            <div className="text-center">
              <h6 className="mb-0">
                Already have an account? <Link to="/signIn">Sign In →</Link>
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Register;

