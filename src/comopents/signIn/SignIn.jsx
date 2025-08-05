import React, { useRef, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify"; 
import EndPoint from "../../apis/EndPoint";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-config/UserSlice";


const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const  emailErrorRef =useRef(null);
  const passwordErrorRef =useRef(null);

  const [signUpInfo, setSignUpInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const save = () => {
    
    const email = emailInput.current.value.trim();
    const password = passwordInput.current.value.trim();
    if (!email) {
      emailErrorRef.current.innerHTML = "Email is required";
      return;
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

  const handleSubmit =async (e)=>{
      e.preventDefault();
      
      if(!save()) return toast.error("Please enter email and password");  ;
      setSubmitted(true);
      const playLoad ={
        
        email:emailInput.current.value,
        password:passwordInput.current.value
      }
      try{
        const response = await axios.post(EndPoint.SIGN_IN,playLoad);
        console.log("API result:", response.data.result);

       dispatch(setUser(response.data.result));
   
        navigate("/dashboard");
        
      }
      catch(err){

        console.log(" sign-In  Failed", err);
        toast.error(err?.response?.data?.error|| "Something went wrong!");
      }
      setSubmitted(false);
    }

const responseSuccessGoogle = (response) => {
    console.log("Login Success:", response);
  };

  const responseErrorGoogle = (error) => {
    console.log("Login Failed:", error);
  };

  return <>
    <ToastContainer />
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        {/* Left Side */}
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

        {/* Form Side */}
<form onSubmit={handleSubmit} className="col-md-5 d-flex flex-column justify-content-center px-5 bg-white text-dark">
       
          <div className="bg-white p-4 rounded shadow" style={{ maxWidth: "500px", width: "100%" }}>
            <strong className="fs-3">Welcome Back</strong>
            <p className="text-muted mb-4">Enter your credentials to access your account</p>

            <div className="mb-3 text-center">
              <GoogleLogin onSuccess={responseSuccessGoogle} onError={responseErrorGoogle} />
            </div>

            <p className="text-center">___________ or ___________</p>

           

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                ref={emailInput}
                type="email"
                className="form-control border-0 border-bottom"
                placeholder="Email Address..."
              />
              <small ref={emailErrorRef} className="text-danger"></small>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                ref={passwordInput}
                type="password"
                className="form-control border-0 border-bottom"
                placeholder=".........."
              />
              <small ref={passwordErrorRef} className="text-danger" ></small>
            </div>

            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn text-white"
                style={{ background: "#6d28d9" }}
                
              >
                Sign In
              </button>
            </div>

            <div className="text-center">
              <h6 className="mb-0">
                Don't have an account? <Link to="/signUp">Sign Up →</Link>
              </h6>
            </div>
          </div>
        
        </form>
      </div>
    </div>
</>
};

export default SignIn;
