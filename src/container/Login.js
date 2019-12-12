import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";
import Chatlogo from "../img/Chatlogo.png";
import matebook from "../img/matebook.png";
import { Animated } from "react-animated-css";
import LoadingScreen from "react-loading-screen";
import "../style/Login.css";
import "../style/Input.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true,
      access_token: "",
      passwordEr: "",
      user: ""
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.signIn = this.sigIn.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    const { passwordEr } = this.state;
    if (!this.state.passwordEr) {
      this.setState({
        passwordEr: (
          <Animated
            animationIn="bounceInDown"
            animationOut="zoomOutDown"
            animationInDuration={3000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <p
              className="p-2 text-center"
              style={{
                fontWeight: "lighter",
                borderRadius: "5px",
                fontSize: "15px",
                background: "#f8d7da",
                width: "300px",
                color: "#721c24"
              }}
            >
              Incorrect password or username!
            </p>
          </Animated>
        )
      });
    }
    if (passwordEr) {
      this.setState({ passwordEr: passwordEr });
    }
  };

  sigIn = i => {
    i.preventDefault();
    const isValidate = this.validate();
    if (isValidate) {
      console.log(this.state);
    }
    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      isLoading: true
    });

    Axios.post("https://calm-mesa-84057.herokuapp.com/login", dataInput)
      .then(res => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.setState({
          access_token: res.data.access_token,
          isLoading: false
          // redirect: true
        });
      })
      .catch(err => {
        console.log(err);
        alert("Login Gagal");
        this.setState({
          isLoading: false
        });
      });
  };
  render() {
    const { username, password, isLoading } = this.state;

    if (localStorage.getItem("access_token", "user")) {
      return <Redirect to="/home" out={this.signOut} />;
    } else if (isLoading) {
      return (
        <>
          <div className="centered">
            <p className="text-center text-primary mt-5 pt-5">
              <LoadingScreen
                loading={true}
                bgColor="#fff"
                spinnerColor="teal"
                textColor="teal"
                logoSrc={Chatlogo}
                text="Please wait ..."
              ></LoadingScreen>
            </p>
          </div>
        </>
      );
    }

    return (
      <Fragment>
        <div>
          <header className="headerlogin"></header>
          <div className="container">
            <div className="row">
              {/* START CONTENT LEFT */}
              <div className="col-md-5">
                <Animated
                  animationIn="fadeInLeft"
                  animationOut="rollOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <div className="login">
                    <form onSubmit={this.sigIn}>
                      <Link to="/">
                        <img
                          src={Chatlogo}
                          alt=""
                          width="130"
                          height="130"
                          className="chatlogo"
                        />
                      </Link>

                      <p className="font-weight-bold">
                        Sign in to G-ChatApp Account
                      </p>

                      {/* INPUTAN-USERNAME */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1 mt-5">
                            <input
                              className="input_field"
                              type="text"
                              name="username"
                              value={username}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="input_label d-flex">
                              <span className="input-content">
                                <i className="fas fa-user mr-2"></i>
                                Username
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      {/* INPUTAN-PASSWORD */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1 mt-3">
                            <input
                              className="input_field"
                              type={this.state.hidden ? "password" : "text"}
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                              required
                            />

                            <label className="input_label">
                              <span className="input-content">
                                <i className="fas fa-lock mr-2"></i>Password
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <i
                        onClick={this.toggleShow}
                        id="eye"
                        className="show fas fa-eye"
                        style={{
                          float: "right",
                          position: "relative",
                          bottom: "6vh",
                          right: "7.5vw",
                          zIndex: "5"
                        }}
                      ></i>

                      {/* BUTTON AND TEXT */}
                      <div className="createAccountlogin">
                        <button
                          type="submit"
                          className="button1login btn text-white pl-5 pr-5 "
                        >
                          Log In
                        </button>

                        <p className="text-dark">
                          Don't have an account?
                          <Link to="/register">
                            <span
                              className="ml-1 font-weight-bold"
                              style={{ color: "#1fab89" }}
                            >
                              Sign up
                            </span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </Animated>
              </div>
              {/* FININSH CONTENT LEFT */}
              {/* START CONTENT RIGHT */}

              <div className="col-md-6">
                <div className="textlogin text-light">
                  <h4 className="font-weight-bold">G-ChatApp</h4>

                  <p className="text-light">
                    G-ChatApp is an application where there is a private, group
                    and Video Phone chat features specifically for Muslims, also
                    available for
                    <span className="font-weight-bold"> Web Applications </span>
                    &
                    <span className="font-weight-bold">
                      {" "}
                      Mobile Applications.
                    </span>
                  </p>

                  {/* CARAUSEL */}
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-interval="2000"
                      >
                        <img
                          className="handphonelogin mt-3 ml-5 pl-5 img-fluid"
                          src={matebook}
                          alt=""
                          height="230"
                          width="300"
                        />
                      </div>
                      <div className="carousel-item" data-interval="2000">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsendtask.io%2Fwp-content%2Fuploads%2F2018%2F03%2Fiphone-x-in-hand.png&f=1&nofb=1"
                          alt=""
                          width="300"
                          height="200"
                          className="handphoneregister mt-3 ml-5 pl-5 img-fluid"
                        />
                      </div>
                    </div>

                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/* CARAUSEL */}
                  <p>{this.state.passwordEr}</p>
                </div>
              </div>
            </div>
          </div>
          {/* FININSH CONTENT RIGHT */}
        </div>
      </Fragment>
    );
  }
}

export default Login;
