function Categery(){
    return <>
     <div className="container text-center my-5 bg-dark  " style={{ backgroundColor: "#000" }}>
        <span className="badge bg-dark px-3 py-2 mb-3">📚 Categories</span>
        <h1 className="fw-bold">
          <span style={{ color: "white" }}>
            {" "}
            Explore <span className="gradient-text  ">Quiz Categories</span>
          </span>
        </h1>
        <p className="text-secondary">
          Discover quizzes across various subjects to test and expand your
          knowledge
        </p>

        <div className="row g-4 mt-4">
          {/* Science & Tech */}
          <div className="col-md-4">
            <div className="category-card border-primary">
              <div className="icon-circle bg-primary">
                <i
                  className="bi bi-lightbulb-fill"
                  style={{ fontSize: "2rem", color: "gold" }}
                ></i>
              </div>
              <h5 style={{ color: "white" }}>Science & Tech</h5>
              <p className="text-secondary">
                Test your knowledge in science & tech with our challenging
                quizzes
              </p>
              <a href="#" className="text-primary fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>

          {/* Mathematics */}
          <div className="col-md-4">
            <div className="category-card border-success">
              <div className="icon-circle bg-success">
                <i className="bi bi-calculator"></i>
              </div>
              <h5 style={{ color: "white" }}>Mathematics</h5>
              <p className="text-secondary">
                Test your knowledge in mathematics with our challenging quizzes
              </p>
              <a href="#" className="text-success fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>

          {/* Chemistry */}
          <div className="col-md-4">
            <div
              className="category-card"
              style={{
                borderTopColor: "#a855f7",
                borderTopWidth: "4px",
                borderTopStyle: "solid",
              }}
            >
              <div
                className="icon-circle"
                style={{ backgroundColor: "#a855f7" }}
              >
                <i
                  className="bi bi-flask"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </div>
              <h5 style={{ color: "white" }}>Chemistry</h5>
              <p className="text-secondary">
                Test your knowledge in chemistry with our challenging quizzes
              </p>
              <a href="#" style={{ color: "#a855f7" }} className="fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>

          {/* Biology */}
          <div className="col-md-4">
            <div
              className="category-card"
              style={{
                borderTopColor: "#ec4899",
                borderTopWidth: "4px",
                borderTopStyle: "solid",
              }}
            >
              <div
                className="icon-circle"
                style={{ backgroundColor: "#ec4899" }}
              >
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h5 style={{ color: "white" }}>Biology</h5>
              <p className="text-secondary">
                Test your knowledge in biology with our challenging quizzes
              </p>
              <a href="#" style={{ color: "#ec4899" }} className="fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>

          {/* General Knowledge */}
          <div className="col-md-4">
            <div className="category-card border-warning">
              <div className="icon-circle bg-warning text-dark">
                <i className="bi bi-globe2"></i>
              </div>
              <h5 style={{ color: "white" }}>General Knowledge</h5>
              <p className="text-secondary">
                Test your knowledge in general knowledge with our challenging
                quizzes
              </p>
              <a href="#" className="text-warning fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>

          {/* Current Affairs */}
          <div className="col-md-4">
            <div className="category-card border-danger">
              <div className="icon-circle bg-danger">
                <i className="bi bi-newspaper"></i>
              </div>
              <h5 style={{ color: "white" }}>Current Affairs</h5>
              <p className="text-secondary">
                Test your knowledge in current affairs with our challenging
                quizzes
              </p>
              <a href="#" className="text-danger fw-bold">
                Explore Quizzes →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Categery;