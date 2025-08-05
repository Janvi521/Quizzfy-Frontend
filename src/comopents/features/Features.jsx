
import Lottie from "lottie-react";
import quizAnimation from "../../animations/quizAnimation.json.json"
import Register from "../register/Register";
import { Link } from "react-router-dom";
function Feature(){

    return<>
      <section className="py-5 text-white" style={{ backgroundColor: "#000" }}>
        <div className="container text-center">
          <span className="badge bg-dark mb-2 px-3 py-2">
            <i className="bi bi-star-fill me-1 text-warning"></i> Features
          </span>
          <h2 className="fw-bold mb-2">
            Why{" "}
            <span
              style={{
                background: "linear-gradient(to right, #9333ea, #ef4444)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
             Quizzfy
            </span>
          </h2>
          <p className="text-secondary mb-5">
            Discover quizzes across various subjects to test and expand your
            knowledge
          </p>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle purple">
                  <i className="bi bi-brain"></i>
                </div>
                <h5>Personalized Learning</h5>
                <p>
                  Adaptive quizzes that adjust to your knowledge level and
                  learning pace
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle red">
                  <i className="bi bi-gift-fill"></i>
                </div>
                <h5>Reward System</h5>
                <p>
                  Earn points, badges, and real rewards for your achievements
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle blue">
                  <i className="bi bi-person-badge-fill"></i>
                </div>
                <h5>Teacher Dashboard</h5>
                <p>
                  Comprehensive tools for educators to create and manage quizzes
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle green">
                  <i className="bi bi-bar-chart-fill"></i>
                </div>
                <h5>Progress Tracking</h5>
                <p>Track your improvement and stay motivated</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle orange">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <h5>Competitive Leaderboards</h5>
                <p>
                  Compete with peers and climb the ranks in various categories
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon-circle violet">
                  <i className="bi bi-phone-fill"></i>
                </div>
                <h5>Mobile Friendly</h5>
                <p>Access quizzes anytime, anywhere on any device</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ready to start */}

      <div
        className="container-fluid "
        style={{ width: "90%", height: "100%" }}
      >
        <div
          className="hero-section text-white px-4 py-3 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-between"
          style={{ minHeight: "400px" }}
        >
          {/* Left Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-2 fs-3">
              Ready to Start Your <br /> Quiz Journey?
            </h2>
            <p className="mb-3 text-white-50 small">
              Join thousands of students and teachers. Sign up today and get
              access to all features.
            </p>
            <div className="d-flex gap-2">
              
              <Link  to="/signUp" element={<Register/>} className="btn btn-light btn-sm fw-semibold px-3 py-2" >Create Account</Link>
              <button className="btn btn-outline-light btn-sm fw-semibold px-3 py-2">
                Explore Quizzes
              </button>
            </div>
          </div>

          {/* Right Content (Image Placeholder) */}
          <div className=" d-flex justify-content-center">
            <div className="bg-white rounded-4">
              {" "}
              <div
                className="container-fluid px-4 my-4  bg-white rounded-4"
                style={{ width: "100%", height: "90%" }}
              >
                <Lottie
                  animationData={quizAnimation}
                  loop={true}
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Feature;