import React, { Component } from "react";
import Button from "../container/Button";

export default class ChangeData extends Component {
  render() {
    const {
      username,
      password,
      changeData,
      handleChange,
      type,
      toggleShow
    } = this.props;
    return (
      <>
        <div className="contaniner" style={{ color: "rgba(0,0,0,0.7)" }}>
          <div className="row justify-content-center">
            <form onSubmit={changeData}>
              <div className="form-group">
                <label>
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  style={{
                    width: "30vw",
                    height: "10vh",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                  }}
                  className="form-control"
                  placeholder="Type here in your new username..."
                  value={username}
                  name="username"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Password</b>
                </label>
                <input
                  type={type}
                  style={{
                    width: "30vw",
                    height: "10vh",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                  }}
                  className="form-control"
                  placeholder="Type here in your new pasword..."
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                />
                <i
                  onClick={toggleShow}
                  className="show fas fa-eye"
                  style={{
                    float: "right",
                    marginTop: "-35px",
                    marginRight: "10px"
                  }}
                ></i>
                <div className="form-group">
                  <Button
                    title="Save"
                    className={"button1register btn text-white pl-5 pr-5"}
                    loading={this.props.loading}
                    onClick={changeData}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
