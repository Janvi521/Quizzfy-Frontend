
function question(){
    return <>
    <div class="container-fluid p-4">
    {/* <!-- Header --> */}
    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-light btn-sm" style="border-radius: 50%;">←</button>
      <h4 class="mx-auto">Science & Technology Quiz</h4>
    </div>

    {/* <!-- Progress Bar --> */}
    <p style="font-size: 0.9rem;">Question 1 of 10</p>
    <div class="progress mb-3" style="height: 6px;">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 10%;"></div>
    </div>

    <div class="row">
      {/* <!-- Left: Question Area --> */}
      <div class="col-md-8">
        <div class="p-4 mb-3" style="background-color: #1a1a1a; border-radius: 10px;">
          <div class="d-flex justify-content-between mb-2">
            <span style="color: #d57aff; font-size: 0.85rem;">💯 100 points</span>
            <span style="color: red; font-size: 0.85rem;">⏱ 00:00</span>
            <span class="badge bg-secondary">Medium</span>
          </div>
          <h5>Which of the following energy sources cannot be replenished naturally on a human timescale, making it an example of a non-renewable resource?</h5>
        </div>

        {/* <!-- Options --> */}
        <div class="row mb-2">
          <div class="col-md-6 mb-2">
            <button class="btn w-100 text-start" style="background-color: #262626; color: white; border-radius: 10px;">🅐 Solar Power</button>
          </div>
          <div class="col-md-6 mb-2">
            <button class="btn w-100 text-start" style="background-color: #262626; color: white; border-radius: 10px;">🅑 Wind Power</button>
          </div>
          <div class="col-md-6 mb-2">
            <button class="btn w-100 text-start" style="background-color: #262626; color: white; border-radius: 10px;">🅒 Natural Gas</button>
          </div>
          <div class="col-md-6 mb-2">
            <button class="btn w-100 text-start" style="background-color: #262626; color: white; border-radius: 10px;">🅓 Hydroelectric Power</button>
          </div>
        </div>

        {/* <!-- Skip and Next --> */}
        <div class="d-flex justify-content-between mt-3">
          <button class="btn btn-outline-secondary">⤼ Skip</button>
          <button class="btn" style="background-color: #a855f7; color: white;">Next Question ➤</button>
        </div>
      </div>

      {/* <!-- Right: Quiz Stats --> */}
    
    </div>
  </div>
    </>
}

export default question;