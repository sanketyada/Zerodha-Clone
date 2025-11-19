import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5 p-5">
      <h1 className=" my-4 fs-3">404 Not Found</h1>
      <p className="my-4 text-muted fs-5 fw-normal">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
export default NotFound;
