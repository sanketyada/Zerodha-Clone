import React from "react";
import OpenAccout from "../OpenAccount";

function Hero() {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row">
        <h1 className="fs-3">Charges</h1>
        <h2 className="fs-5 text-muted">List of all charges and taxes</h2>
      </div>
      <div className="row p-5 mt-5">
        <div className="col">
          <img src="media/pricing0.svg" alt="" style={{ width: "65%" }} />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted fw-medium">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/intradayTrades.svg" alt="" style={{ width: "65%" }} />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted fw-medium">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media/pricing0.svg" alt="" style={{ width: "65%" }} />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted fw-medium">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <OpenAccout/>
    </div>
  );
}

export default Hero;
