import React from "react";

function Awards() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col p-5">
            <img src="media/largestBroker.svg" alt="" />
          </div>
          <div className="col p-5 mt-3">
            <h1 className="">Largest stock Broker in India</h1>
            <p className="mb-5">
              2+ million Zerodha client contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Future and Options</li>
                  <li>Commodity and deratives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Stocks and IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Security </li>
                </ul>
              </div>
            </div>
            <img src="media/pressLogos.png" alt="" style={{width:"90%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
