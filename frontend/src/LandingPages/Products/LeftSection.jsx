import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  goglePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{}} />
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-5 mt-5">
          <h1 className="fs-4 text-muted">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <div className="">
            <a href={tryDemo}>
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="m-5">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div class="mt-3">
            <a href={goglePlay}>
              <img src="media/googlePlayBadge.svg" className="me-5" />
            </a>
            <a href={appStore}>
              {" "}
              <img src="media/appstoreBadge.svg" className="" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
