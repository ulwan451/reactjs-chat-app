import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";
import { Animated } from "react-animated-css";
import "../style/Login.scss";
import Button from "../components/Button";
import Logos from "../assets/icon.png";
import Loading from "../components/Loading";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hidden: true,
      access_token: "",
      passwordEr: "",
      isLoading: false,
      user: "",
      google:
        "data:image/png;base64,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"
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
                width: "100%",
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
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.setState({
          access_token: res.data.access_token,
          isLoading: false
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

    if (localStorage.getItem("access_token")) {
      return <Redirect to="/chatpage" out={this.signOut} />;
    } else if (isLoading) {
      return <Loading />;
    }

    return (
      <Fragment>
        <div className="container register">
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <p className="left-title">
                <Link to="/">
                  <img src={Logos} alt="" width="40" />
                </Link>
              </p>
              <h1 className="font-weight-bold title-register">Sign In</h1>
              <p className="text-muted">Sign in, to start your chatting.</p>
              <form onSubmit={this.sigIn}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <button className="btn border" type="button">
                      <i className="fas fa-id-card-alt"></i>{" "}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    required
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <button className="btn border" type="button">
                      <i className="fas fa-lock"></i>
                    </button>
                  </div>
                  <input
                    type={this.state.hidden ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn border"
                      type="button"
                      onClick={this.toggleShow}
                    >
                      {this.state.hidden ? (
                        <i className="fas fa-eye-slash"></i>
                      ) : (
                        <i className="fas fa-eye"></i>
                      )}
                    </button>
                  </div>
                </div>
                <a href="/register">Lupa Password</a>
                <p>{this.state.passwordEr}</p>
                <Button
                  onClick={this.signUp}
                  title="Masuk Akun Saya"
                  className={"button1login btn btn-register py-2 mt-1"}
                  loading={this.state.isLoading}
                />
                <div className="form-group form-check mt-3">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">Keep me logged in</label>
                </div>

                <hr />
                <Button
                  title={
                    <Link to="/chatpage">
                      <div>
                        <img
                          src={this.state.google}
                          alt=""
                          width="20"
                          className="mr-2"
                        />
                        Masuk dengan Google
                      </div>
                    </Link>
                  }
                  className="btn btn-register-google py-2"
                />
                <Link to="/register">
                  <Button
                    title="Daftar akun Baru"
                    className="btn btn-register-google py-2 mt-2"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
