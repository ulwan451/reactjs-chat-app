import React from "react";
import "../../style/ChatPage.scss";
import { Link } from "react-router-dom";
import Logos from "../../assets/icon.png";

export default class Sidebar extends React.Component {
  render() {
    const { name } = this.props;
    const out = () => {
      localStorage.clear();
    };

    return (
      <>
        <div className={this.props.togglesidebar ? "col-md-2" : "col-none"}>
          <div
            className={this.props.togglesidebar ? "sidebar-chat" : "col-none"}
          >
            <div className="profile text-center">
              <img
                src={this.props.avatar}
                alt=""
                width="80"
                className="img-fluid rounded-circle img-thumbnail"
              />
              <p className="font-weight-bold text-dark">
                {name} <i className="fas fa-sort-down"></i>
              </p>
            </div>
            <ul className="list-sidebar">
              <li className="aktif">
                <i className="fas fa-comment-alt"></i>CHAT
              </li>
              <li data-toggle="modal" data-target="#exampleModal">
                <i className="fas fa-cog"></i>SETTING
              </li>
              <Link to="/">
                <li onClick={out}>
                  <i className="fas fa-power-off"></i>LOGOUT
                </li>
              </Link>
              <li className="bottom-text d-flex">
                <p>©2019-gamma</p>
                <img src={Logos} alt="" width="50" />
              </li>
            </ul>
          </div>
        </div>
        <div className="top fixed-top m-3" style={{ cursor: "pointer" }}>
          <div onClick={this.props.ToggleSidebar}>
            {this.props.btn === true ? (
              <i className="fa fa-align-left"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </div>
        </div>
      </>
    );
  }
}
