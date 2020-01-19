import React, { Component } from "react";
import "../../style/Settings.scss";
import Button from "../Button";
import Ceklis from "../../assets/ceklis.png";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: true,
      setting: "awal"
    };
  }

  handleEditing = () => {
    this.setState({
      editProfile: !this.state.editProfile
    });
  };

  handleClick = () => {
    if (this.state.setting === "profile") {
      this.setState({ setting: "private" });
    } else if (this.state.setting === "awal") {
      this.setState({ setting: "profile" });
    } else if (this.state.setting === "profile" || "private") {
      this.setState({ setting: "awal" });
    }
  };

  render() {
    const {
      name,
      email,
      no_telp,
      Ename,
      Eemail,
      Eno_telp,
      handleChange,
      changeProfile,
      changePrivate,
      username,
      EUsername,
      EPassword,
      loading
    } = this.props;
    return (
      <>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ background: "#eee" }}>
              <div className="modal-body">
                <img
                  className="float-right rounded-circle"
                  style={{
                    cursor: "pointer",
                    boxShadow: "0 0 11px #777"
                  }}
                  data-dismiss="modal"
                  src={Ceklis}
                  alt=""
                  width="50"
                />
                <div className="wrapper">
                  <div className="profile-card js-profile-card">
                    <div className="profile-card__img">
                      <img
                        src={this.props.avatar}
                        alt="profile card"
                        className="img-thumbnail"
                      />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt mb-3 upload-img">
                      <input
                        className="choosefile btn border-0 btn-sm"
                        type="file"
                        onChange={this.props.onChangeImg}
                      />
                      <Button
                        title="Upload"
                        className="btn btn-primary btn-sm"
                        onClick={this.props.onClickImg}
                        loading={loading}
                      />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt">
                      {this.state.setting === "awal" ? (
                        <>
                          <div className="profile-card__name">{name}</div>
                          <div className="profile-card__txt">{email}</div>
                          <div className="profile-card__txt">{no_telp}</div>
                        </>
                      ) : this.state.setting === "profile" ? (
                        <>
                          <p>Profile Setting</p>
                          <div className="profile-card__name">
                            <input
                              required
                              type="text"
                              placeholder={name}
                              value={Ename}
                              name="name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="profile-card__txt">
                            <input
                              required
                              type="email"
                              placeholder={email}
                              value={Eemail}
                              name="email"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="profile-card__txt">
                            <input
                              required
                              type="number"
                              placeholder={no_telp}
                              value={Eno_telp}
                              name="no_telp"
                              onChange={handleChange}
                            />
                          </div>

                          <Button
                            className="btn btn-sm border btn-primary"
                            onClick={changeProfile}
                            title="Save"
                            loading={loading}
                          />
                        </>
                      ) : this.state.setting === "private" ? (
                        <>
                          <p>Private Setting</p>
                          <div className="profile-card__name">
                            <input
                              required
                              type="text"
                              placeholder={username}
                              value={EUsername}
                              name="username"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="profile-card__txt">
                            <input
                              required
                              type="password"
                              value={EPassword}
                              name="password"
                              onChange={handleChange}
                            />
                          </div>

                          <Button
                            className="btn btn-sm border btn-primary"
                            onClick={changePrivate}
                            title="Save"
                            loading={loading}
                          />
                        </>
                      ) : null}
                      <button
                        className="btn btn-sm border btn-outline-primary"
                        onClick={this.handleClick}
                      >
                        {this.state.setting === "awal"
                          ? "Edit"
                          : this.state.setting === "profile"
                          ? "Tekan"
                          : this.state.setting === "private"
                          ? "private"
                          : null}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
