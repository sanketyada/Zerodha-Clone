import React from "react";

function Brokrage() {
  return (
    <div className="container p-5 text-center">
      <div className="row border p-2">
        <div className="col text-primary fw-medium fs-5">Brokerage calculator</div>
        <div className="col text-primary fw-medium fs-5">List of charges</div>
      </div>
      <div className="row border">
        <div className="col">
          <ul>
            <li className="mt-3 list-unstyled">Online account</li>
            <li className="mt-3 list-unstyled">Offline account</li>
            <li className="mt-3 list-unstyled">NRI account (offline only)</li>
            <li className="mt-3 list-unstyled">Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="mt-3 list-unstyled">Free</li>
            <li className="mt-3 list-unstyled">Free</li>
            <li className="mt-3 list-unstyled">₹500</li>
            <li className="mt-3 list-unstyled">₹500</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
