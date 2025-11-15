import React from "react";

function Stats() {
  return (
    <div>
      <div className="container  p-5">
        <div className="row">
          <div className="col-6 p-5 ">
            <h2 className="mb-4">Trust with confidence</h2>
            <div className="mb-2 mt-2">
              <h4>Customer-first always</h4>
              <p className="text-muted">
                That's why 1.3+ crors customers trust Zerodha with $3.5+ lakhs
                crores worth of equity investment.
              </p>
            </div>
            <div className="mb-2 mt-2">
              <h4>No spam or gimmicks </h4>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like
              </p>
            </div>
            <div className="mb-2 mt-2">
              <h4>The Zerodha universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mb-2 mt-2">
              <h4>Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          <div className="col-6 p-5  ">
            <img src="media/ecosystem.png" style={{ width: "90%" }} alt="" />
            <div className="text-center">
              <a href="" className="mx-5" style={{textDecoration:"none"}}>
                Explore Our Products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href=""  style={{textDecoration:"none"}}>
                Try Cat Demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
