import React from "react";
import "../style/Landing.scss";
import { Link } from "react-router-dom";
import Share from "../assets/share.svg";
import Logos from "../assets/icon.png";

export default function gabut() {
  return (
    <div className="landingCustom">
      <div className="landingContainer">
        <div className="container">
          <div className="row  rows-landing">
            <div className="col-md-12 d-flex">
              <img src={Logos} alt="" width="60" />
              <h3 className="text-white font-weight-bold mt-3 ml-3">Index</h3>
            </div>
            <div className="col-md-6 content-left ">
              <h1 className="text-white font-weight-bold h1">
                Create To Your Account GammaChat NOW!
              </h1>
              <p className="text-left">
                With G-ChatApp we all get fast, simple and secure messaging
                applications for free. Available on Android and the web.
              </p>
              <div className="double-btn">
                <Link to="/login">
                  <button className="pagebutton two-btn btn mr-3 px-4">
                    Masuk
                  </button>
                </Link>
                <Link to="/register">
                  <button className="pagebutton btn px-4">Daftar</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <img src={Share} alt="" className="img-fluid" />
              <p className="text-left text-center mt-3">
                © 2019 GammaChat Team • Yogyakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
