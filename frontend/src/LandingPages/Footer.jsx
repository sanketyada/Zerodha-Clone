import React from "react";

function Footer() {
  return (
    <footer className="bg-body-secondary">
      <div className="container  border-top p-5 ">
        <div className="row">
          <div className="col-3 mx-4 p-2 my-3">
            <img
              src="media/logo.svg"
              style={{ width: "65%" }}
              className="my-3"
            />
            <p>
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            <div className=" my-3 Social-Links  ">
              <a href="" className="">
                <i class="fa-solid fa-x"></i>
              </a>
              <a href="" className="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <br />
             <hr />
              <a href="" className="">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="" className="">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="" className="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col  mx-4 p-2">
            <p className="fw-medium">Account</p>
            <ul className="list navbar-nav me-auto">
              <a href="">Open demat account</a>
              <a href="">Minor demat account</a>
              <a href="">NRI demat account</a>
              <a href="">Commodity</a>
              <a href="">Dematerialisation</a>
              <a href="">Fund transfer</a>
              <a href="">MTF</a>
              <a href="">Referral program</a>
            </ul>
          </div>
          <div className="col mx-4 p-2">
            <p className="fw-medium">Support</p>
            <ul className="list navbar-nav me-auto">
              <a href="">Contact us</a>
              <a href="">Support portal</a>
              <a href="">How to file a complaint?</a>
              <a href="">Status of your complaints</a>
              <a href="">Bulletin</a>
              <a href="">Circular</a>
              <a href="">Z-Connect blog</a>
              <a href="">Downloads</a>
            </ul>
          </div>
          <div className="col mx-4 p-2">
            <p className="fw-medium">Company</p>
            <ul className="list navbar-nav me-auto">
              <a href="">About</a>
              <a href="">Philosophyt</a>
              <a href="">Press & media</a>
              <a href="">Careers</a>
              <a href="">Zerodha Cares (CSR)</a>
              <a href="">Zerodha.tech</a>
              <a href="">Open source</a>
            </ul>
          </div>
          <div className="col mx-4 p-2">
            <p className="fw-medium">Quick links</p>
            <ul className="list navbar-nav me-auto">
              <a href="">Upcoming IPOs</a>
              <a href="">Brokerage charges</a>
              <a href="">Market holidays</a>
              <a href="">Economic calendar</a>
              <a href="">Calculators </a>
              <a href="">Markets</a>
              <a href="">Markets</a>
            </ul>
          </div>
        </div>
        <div className="row mt-5 text-small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <a href="">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. <br />
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every mon
          </p>
          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="">NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href=""> create a ticket here.</a>
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
