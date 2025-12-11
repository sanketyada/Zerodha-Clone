import React from "react";

function Team() {
  return (
    <div className="container  ">
      <div className="row">
        <h1 className="fw-medium fs-3 text-center m-0">People</h1>
      </div>
      <div className="row " style={{ lineHeight: "1.8", textAlign: "left" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="/media/nithinKamath.jpg"
            alt=""
            style={{ width: "60%" }}
            className="rounded-circle"
          />
          <h2 className="fs-5 mt-3">Nithin Kamath</h2>
          <p className="">Founder, CEO</p>
        </div>
        <div className="col-6 p-5 mt-5 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).s.
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
