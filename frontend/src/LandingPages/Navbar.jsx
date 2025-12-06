import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom " style={{backgroundcolor:"#fff"}}>
        <div class="container p-2">
          <Link
          to={"/"}
          className="navbar-brand" href="#">
            <img src="media/logo.svg" style={{width:"25%"}} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbarleft" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                to={"/signUp"}
                 class="nav-link active  fw-medium text-muted" aria-current="page" href="#">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link
                to={"/about"}
                 class="nav-link active fw-medium text-muted" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                to={"/product"}
                class="nav-link active fw-medium text-muted" href="#">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                to={"/priceing"}
                 class="nav-link active fw-medium text-muted" href="#">
                  Priceing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                to={"/support"}
                 class="nav-link active fw-medium text-muted" href="#">
                  Support
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
