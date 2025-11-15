import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mx-4 p-2 my-3">
          <img src="media/logo.svg" style={{ width: "65%" }} className="my-3" />
          <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <div className="row my-3">
            <a  href="" className="col"><i class="fa-solid fa-x"></i></a>
            <a  href="" className="col"><i class="fa-brands fa-facebook"></i></a>
            <a  href="" className="col"><i class="fa-brands fa-instagram"></i></a>
            <a href=""  className="col"><i class="fa-brands fa-linkedin"></i></a>
            <hr /> <a href=""  className="col"><i class="fa-brands fa-whatsapp"></i></a>
            <a href=""  className="col"><i class="fa-brands fa-telegram"></i></a>
            <a href=""  className="col"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div className="col  mx-4 p-2">
          <p>Account</p>
          <ul className="list navbar-nav me-auto">
            <a  href="">Open demat account</a >
            <a  href="">Minor demat account</a >
            <a href="" >NRI demat account</a >
            <a href="" >Commodity</a >
            <a  href="">Dematerialisation</a >
            <a href="" >Fund transfer</a >
            <a  href="">MTF</a >
            <a  href="">Referral program</a >
          </ul>
        </div>
        <div className="col mx-4 p-2">
          <p>Account</p>
          <ul className="list navbar-nav me-auto">
            <a href="" >Open demat account</a >
            <a href="">Minor demat account</a >
            <a  href="">NRI demat account</a >
            <a  href="">Commodity</a >
            <a href="" >Dematerialisation</a >
            <a href="" >Fund transfer</a >
            <a  href="">MTF</a >
            <a href="" >Referral program</a >
          </ul>
        </div>
        <div className="col mx-4 p-2">
          <p>Account</p>
          <ul className="list navbar-nav me-auto">
            <a href="" >Open demat account</a >
            <a href="" >Minor demat account</a >
            <a  href="">NRI demat account</a >
            <a  href="">Commodity</a >
            <a href="" >Dematerialisation</a >
            <a  href="">Fund transfer</a >
            <a  href="">MTF</a >
            <a  href="">Referral program</a >
          </ul>
        </div>
        <div className="col mx-4 p-2">
          <p>Account</p>
          <ul className="list navbar-nav me-auto">
            <a href="" className="text-muted" >Open demat account</a >
            <a href="" >Minor demat account</a >
            <a href="" >NRI demat account</a >
            <a href="" >Commodity</a >
            <a href="" >Dematerialisation</a >
            <a  href="">Fund transfer</a >
            <a href="" >MTF</a >
            <a href="" >Referral program</a >
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
