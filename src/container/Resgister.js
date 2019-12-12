import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import Axios from "axios";
import "../style/Register.css";
import "../style/Input.css";
import Chatlogo from "../img/Chatlogo.png";
import Button from "./Button";
import matebook from "../img/matebook.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      hidden: true,
      redirect: false,
      email: "",
      no_telp: "",
      registerfield: "",
      username: "",
      isLoading: false
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = i => {
    i.preventDefault();

    const dataInput2 = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      no_telp: this.state.no_telp,
      username: this.state.username
    };

    this.setState({
      isLoading: true
    });

    Axios.post("https://calm-mesa-84057.herokuapp.com/register", dataInput2)

      .then(res => {
        console.log(dataInput2, res);
        const { registerfield } = this.state;
        this.setState({
          isLoading: false
        });
        if (!this.state.registerfield) {
          this.setState({
            registerfield: (
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
                    background: "#d4edda",
                    width: "300px",
                    color: "#155724"
                  }}
                >
                  Register Success
                </p>
              </Animated>
            )
          });
        }
        if (registerfield) {
          this.setState({ registerfield: registerfield });
        }
      })

      .catch(err => {
        console.log(err);
        const { registerfield } = this.state;
        this.setState({
          isLoading: false
        });
        if (!this.state.registerfield) {
          this.setState({
            registerfield: (
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
                  Register failed
                </p>
              </Animated>
            )
          });
        }
        if (registerfield) {
          this.setState({ registerfield: registerfield });
        }
      });
  };
  render() {
    const { name, password, email, no_telp, username } = this.state;

    return (
      <Fragment>
        <div>
          <header className=" headerregister"></header>
          <div className="container">
            <div className="row">
              {/* START CONTENT LEFT */}

              <div className="col-md-5">
                <Animated
                  animationIn="bounceIn"
                  animationOut="rollOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <div className="register">
                    <form onSubmit={this.signUp}>
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
                        Create your MuslimChat Account
                      </p>
                      {/* INPUTAN-NAME */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1">
                            <input
                              className="input_field"
                              type="text"
                              name="name"
                              value={name}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="input_label d-flex">
                              <span className="input-content">
                                <i
                                  style={{ fontSize: "15px" }}
                                  className="fas fa-portrait mr-2"
                                ></i>
                                Name
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      {/* INPUTAN-EMAIL */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1">
                            <input
                              className="input_field"
                              type="email"
                              name="email"
                              value={email}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="input_label d-flex">
                              <span className="input-content">
                                <i className="fas fa-envelope mr-2"></i>
                                Email
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>

                      {/* INPUTAN-NUMBER */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1">
                            <input
                              className="input_field"
                              type="number"
                              name="no_telp"
                              value={no_telp}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="input_label d-flex">
                              <span className="input-content">
                                <i className="fas fa-phone-alt mr-2"></i> Number
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>

                      {/* INPUTAN-USERNAME */}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <span className="input1">
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
                          <span className="input1">
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
                      <div className="createAccount mt-3">
                        <Button
                          onClick={this.signUp}
                          title="Sign Up"
                          className={"button1register btn text-white pl-5 pr-5"}
                          loading={this.state.isLoading}
                        />
                        <p className="text-dark">
                          Have an account!
                          <Link to="/login">
                            <span
                              className="ml-1 font-weight-bold"
                              style={{
                                color: "#1fab89",
                                textDecoration: "none"
                              }}
                            >
                              Log In
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
                <div className="textloginregister text-light">
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
                          height="250"
                          width="300"
                        />
                      </div>
                      <div className="carousel-item" data-interval="2000">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsendtask.io%2Fwp-content%2Fuploads%2F2018%2F03%2Fiphone-x-in-hand.png&f=1&nofb=1"
                          alt=""
                          width="300"
                          height="230"
                          className="handphoneregister mt-3 pl-5 ml-5 img-fluid"
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
                  <p>{this.state.registerfield}</p>
                </div>
              </div>
            </div>
            {/* FININSH CONTENT RIGHT */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
