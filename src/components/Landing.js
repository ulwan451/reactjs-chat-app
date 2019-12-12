import React from "react";
import "../style/Landing.css";
import Chatlogo from "../img/Chatlogo.png";
import wahyudi from "../img/wahyudi.jpg";
import ulwan from "../img/ulwan.jpg";
import rafli from "../img/rafli.jpg";
import roihan from "../img/roihan.jpg";
import rizqan from "../img/rizqan.jpg";
import waves from "../img/waves2.svg";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

export default function gabut() {
  return (
    <div className="landingCustom">
      <div className="row">
        <div className="page1 col-md-5">
          <div className="container" style={{ height: "100vh" }}>
            <div className="d-flex">
              <img src={Chatlogo} alt="" width="100" />
              <a href="/" style={{ color: "#226652" }}>
                G-ChatApp
              </a>
            </div>
            <div className="isipage">
              <Animated
                animationIn="zoomIn"
                animationOut="rollOut"
                animationInDuration={1500}
                animationOutDuration={1000}
                isVisible={true}
              >
                <div className="col-md-12 mb-3">
                  <h1 className="h1 font-weight-bold">
                    Create To Your <br></br> Account G-ChatApp <br></br> NOW!
                  </h1>
                </div>
              </Animated>
              <Animated
                animationIn="fadeInLeft"
                animationOut="rollOut"
                animationInDuration={1500}
                animationOutDuration={1000}
                isVisible={true}
              >
                <div className="col-md-12 mb-4">
                  <p className="desc text-secondary">
                    G-ChatApp is an application where there is a private, group
                    and Video Phone chat features specifically for Muslims, also
                    available for Web Applications & Mobile Applications.
                  </p>
                </div>
              </Animated>
              <div className="row ml-3">
                <div className="d-flex">
                  <Link to="/login">
                    <button className="pagebutton btn mr-5 px-4">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row footer">
                <div className="col-md-12">
                  <p className="mt-3" style={{ color: "rgba(0,0,0,0.7)" }}>
                    {" "}
                    © 2019 G-Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page2 col-md-7">
          <div className="container" style={{ height: "100vh" }}>
            <div
              className="container-fluid"
              style={{
                transform: "rotate(270deg)",
                float: "left",
                left: "0",
                position: "fixed",
                backgroundSize: "cover"
              }}
            >
              <img className="waveslanding" src={waves} alt="img-fluid" />
            </div>
            <div className="col-md">
              <div className="dropdown">
                <div className="containerr">
                  <div className="menu">
                    <i className="navigation fa fa-bars text-white py-2 px-3"></i>
                  </div>
                  <div className="opsi siji">Home</div>
                  <div
                    className="opsi loro"
                    data-toggle="modal"
                    data-target="#About"
                  >
                    About
                  </div>
                  <div
                    className="opsi telu"
                    data-toggle="modal"
                    data-target="#Team"
                  >
                    Team
                  </div>
                </div>
              </div>
            </div>
            <Animated
              animationIn="fadeInLeft"
              animationOut="rollOut"
              animationInDuration={1500}
              animationOutDuration={1000}
              isVisible={true}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "10vh",
                  right: "13vw",
                  color: "#fff"
                }}
              >
                <h5>Supported By </h5>
                <br />

                <img
                  alt=""
                  style={{
                    width: "10vw",
                    height: "15vh",
                    borderRadius: "10px"
                  }}
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DR5d2nwcAb0CkONa4bOSrQHaHa%26pid%3DApi&f=1"
                />
                <img
                  alt=""
                  style={{
                    width: "10vw",
                    height: "15vh",
                    borderRadius: "10px",
                    marginLeft: "5vw"
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqFZcaENY26kQzBnL-9v9CFfiGTFRpYNcSsSbQRa1oR3vdA4-r"
                />
              </div>
            </Animated>
          </div>
        </div>
      </div>

      {/* <!-- Modal About--> */}
      <div
        class="modal fade"
        id="About"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">...</div>
          </div>
        </div>
      </div>

      {/* <!-- Modal Team--> */}
      <div
        class="modal fade"
        id="Team"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body" style={{ height: "90vh" }}>
              <h4 className="text-secondary" align="center">
                Our Team
              </h4>
              <br />
              <div style={{ display: "flex", marginLeft: "1vw" }}>
                <div
                  style={{
                    width: "15vw",
                    height: "10vh",
                    background: "none",
                    borderRadius: "50%",
                    marginLeft: "3vw"
                  }}
                >
                  <img
                    src={wahyudi}
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "5vw"
                    }}
                    alt=""
                  />
                  <h5 style={{ position: "absolute", left: "4vw" }}>
                    M Wahyudi
                  </h5>
                  <p style={{ position: "absolute", left: "3vw", top: "25vh" }}>
                    Front End Developer
                  </p>
                </div>
                <div
                  style={{
                    width: "15vw",
                    height: "10vh",
                    background: "none",
                    borderRadius: "50%",
                    marginLeft: "10vw"
                  }}
                >
                  <img
                    src={ulwan}
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "5vw"
                    }}
                    alt=""
                  />
                  <h5 style={{ position: "absolute", left: "23vw" }}>
                    Ulwan M Nur
                  </h5>
                  <p
                    style={{
                      position: "absolute",
                      left: "22.5vw",
                      top: "25vh"
                    }}
                  >
                    Front End Developer
                  </p>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />

              <div style={{ display: "flex", marginLeft: "1vw" }}>
                <div
                  style={{
                    width: "15vw",
                    height: "10vh",
                    background: "none",
                    borderRadius: "50%",
                    marginLeft: "3vw"
                  }}
                >
                  <img
                    src={roihan}
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "5vw"
                    }}
                    alt=""
                  />
                  <h5 style={{ position: "absolute", left: "2.5vw" }}>
                    Roihan M Anam
                  </h5>
                  <h9
                    style={{
                      position: "absolute",
                      left: "3vw",
                      bottom: "38vh"
                    }}
                  >
                    Back End Developer
                  </h9>
                </div>
                <div
                  style={{
                    width: "15vw",
                    height: "10vh",
                    background: "none",
                    borderRadius: "50%",
                    marginLeft: "10vw"
                  }}
                >
                  <img
                    src={rafli}
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "5vw"
                    }}
                    alt=""
                  />
                  <h5 style={{ position: "absolute", left: "26vw" }}>Rafli</h5>
                  <h9
                    style={{
                      position: "absolute",
                      left: "22.5vw",
                      bottom: "38vh"
                    }}
                  >
                    Back End Developer
                  </h9>
                </div>
              </div>

              <div
                style={{ position: "absolute", left: "15vw", bottom: "25vh" }}
              >
                <img
                  src={rizqan}
                  style={{
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    width: "5vw"
                  }}
                  alt=""
                />
                <h5 style={{ position: "absolute", left: "0vw" }}>Rizqan</h5>
                <h9
                  style={{
                    position: "relative",
                    right: "9vw",
                    width: "20vw",
                    top: "11vh"
                  }}
                >
                  Mobile Android Developer
                </h9>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
