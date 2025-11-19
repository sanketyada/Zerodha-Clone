import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4 mt-5">
          <h1 className="fs-4 text-muted">{productName}</h1>
          <p className="fw-normal text-muted fs-6">{productDescription}</p>
          <a href={learnMore}>
            {learnMore} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
