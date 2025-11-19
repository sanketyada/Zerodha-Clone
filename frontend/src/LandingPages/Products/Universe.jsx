import React from "react";

function Universe() {
  return (
    <div className="container p-5 text-center">
      <h1 className="fs-4 text-muted">The Zerodha Universe</h1>
      <p className="fw-medium mt-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col-4 p-5 ">
          <div className=" mb-5">
            <img
              src="media/zerodhaFundhouse.png"
              style={{ width: "50%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div>
            <img
              src="media/streakLogo.png"
              style={{ width: "50%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <div className=" mb-5">
            <img
              src="media/sensibullLogo.svg"
              style={{ width: "50%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div>
            <img
              src="media/smallcaseLogo.png"
              style={{ width: "50%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-4 p-5 ">
          <div className=" mb-5">
            <img
              src="media/goldenpiLogo.png"
              style={{ width: "50%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div>
            <img
              src="media/dittoLogo.png"
              style={{ width: "30%" }}
              className="ms-5"
              alt=""
            />
            <p className="text-center fs-6 mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
