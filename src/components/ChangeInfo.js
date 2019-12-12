import React, { Component } from "react";
import Button from "../container/Button";

export default class ChangeInfo extends Component {
  render() {
    const { name, no_telp, email, changeInfo, handleChange } = this.props;
    return (
      <>
        <div className="contaniner" style={{ color: "rgba(0,0,0,0.7)" }}>
          {/* PERSONAL INFO */}
          <div className="row justify-content-center">
            <form onSubmit={changeInfo}>
              <div className="form-group">
                <label>
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  style={{
                    width: "30vw",
                    height: "10vh",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                  }}
                  placeholder="Type here in your new name..."
                  value={name}
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  style={{
                    width: "30vw",
                    height: "10vh",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                  }}
                  placeholder="Type here in your new email..."
                  value={email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <b>No. Handphone</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  style={{
                    width: "30vw",
                    height: "10vh",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
                  }}
                  placeholder="Type here in your new no.handphone..."
                  value={no_telp}
                  name="no_telp"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Button
                  title="Save"
                  className={"button1register btn text-white pl-5 pr-5"}
                  loading={this.props.loading}
                  onClick={changeInfo}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
