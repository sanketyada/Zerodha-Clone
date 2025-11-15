import React from "react";

function OpenAccout() {
  return (
    <div className="container text-center mt-5 p-5">
      <h1 className=" my-4 fs-3">Open a Zerodha account</h1>
      <p className="my-4 text-muted fs-5 fw-normal">
       Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button
        style={{ width: "20%", margin: "0 auto" }}
        className="p-3 btn btn-primary fs-5 mb-5"
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccout;
