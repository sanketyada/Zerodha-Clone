import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row " id="SupportFeatured">
        <div className="col-6 p-5">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topic to create a ticket
          </h1>
          <input className="mb-3" placeholder="How Do I activate  F&O" />
          <br />
          <a href="">Track account Opening </a>
          <a href="">Track segment activation</a>
          <a href="">Intraday Margin</a>
          <a href="">Kite User Manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4 ">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeover and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverage -MIS & Co</a>
            </li>
          </ol>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
