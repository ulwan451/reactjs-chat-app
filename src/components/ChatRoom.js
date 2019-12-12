import React from "react";
import { Link } from "react-router-dom";
import "../style/ChatRoom.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "../container/Button";
import ChangeInfo from "./ChangeInfo";
import ChangeData from "./ChangeData";
export default class ChatRoom extends React.Component {
  render() {
    return (
      <>
        <div className="pageChat">
          <div className="headerChat"></div>

          <div className="pageCustom">
            <div className="pageContact">
              <div className="headerContact">
                <div
                  className="iconProfile"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  {/* <span className="fa fa-user"></span> */}
                  <img
                  alt=""
                    style={{ borderRadius: "50%", zIndex: "999" }}
                    width="43"
                    height="40"
                    src={this.props.avatar}
                  />
                  <span
                    className="fa fa-user"
                    id="iconFixProfile"
                    style={{ zIndex: "0", position: "fixed", left: "7.4vw" }}
                  ></span>
                </div>
                <div
                  className="nameUser"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <p id="nameUserRes">{this.props.name}</p>
                </div>
              </div>

              <div className="contentContact">
                <p style={{ fontSize: "28px", fontFamily: "arial" }}>Contact</p>
                  <div style={{ background:"lavender",width:"26vw",borderRadius:"10px",border:"1px solid #ccc", marginBottom:"3vh", marginLeft:"2.5vw", display:"flex" }}>
                  <input
                    className="card" 
                    style={{ width:"23vw", background:"none", paddingLeft:"1vw" }}
                    placeholder="Search your friend ..."
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange2}
                    />
                    <span style={{ marginTop:"1vh", marginLeft:"1vw" }} className="fa fa-search"></span>
                  </div> 
                  {this.props.contact}
                </div>
            </div>

            <div className="pageMessage">
              <div className="headerMessage">
                <p className="nameContactOrg" style={{ width:"20vw", height: "7vh", paddingLeft:"2vw", color:"#fff", alignItems:"center", alignContent:"center", justifyContent:"left", display:"flex", background:"none" }}>{this.props.nameId}</p>
                <div className="iconBar" id="dropdown">
                  <span className="fas fa-ellipsis-v"> </span>
                  <div id="dropdown-content">
                    <button
                      id="btn-dropdown"
                      type="button"
                      className="btn btn-light btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                    >
                      <span className="fas fa-user-lock"></span> Change Privacy
                    </button>
                    <br/>
                    <p></p>
                    <button
                      id="btn-dropdown"
                      type="button"
                      className="btn btn-light btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal2"
                    >
                      <span className="far fa-id-card"></span> Change Info
                    </button>
                    <br/>
                    <p></p>
                    <button
                      id="btn-dropdown"
                      type="button"
                      className="btn btn-light btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal3"
                    >
                      <span className="fas fa-exclamation-circle"></span> Help
                    </button>

                    <div class="dropdown-divider"></div>
                    <Link to="/">
                      <button
                        id="btn-dropdown"
                        className="btn btn-light btn-sm"
                        onClick={this.props.out}
                      >
                        <font color="red">
                          <span className="fas fa-sign-out-alt"></span> Log Out
                        </font>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="contentMessage">{this.props.kanan}</div>
            </div>
          </div>
        </div>

        {/* <!-- Modal Profile--> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ background:"lavender" }}>
      <span className="fa fa-user" ></span><h5 style={{ fontFamily:"arial", position:"absolute", left:"3vw", top:"2vh" }}>Profile</h5>
      </div>
      <div class="modal-body" style={{ color:"rgba(0,0,0,0.7)" }}>
      <div className="imgProfileAccount">
                                <img 
                                src={this.props.avatar} 
                                style={{ border: "2px solid rgba(0,0,0,0.3)" }}
                                alt=""
                                className="rounded-circle"
                                width="150"
                                height="150" />                   
                              </div>
                              <p style={{ position: "absolute", top:"10vh", left:"14vw", color:"rgba(0,0,0,0.3)", zIndex:"0" }}>Add Your Image</p>
                              <br/>

                              <Row>
                                <Col></Col>
                                <Col> 
                                <input
                                
                                className="choosefile btn border-0 btn-sm"
                                type="file"
                                onChange={this.props.onChange}
                                style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.19)" }}
                                />
                                <Button title="Upload" className="btnUploadImg btn-info" loading={this.props.loading}  onClick={this.props.onClick} />
                                
                                </Col>
                                <Col></Col>
                              </Row>
                              <br/>
                            
                                <p style={{ fontSize:"15px", position:"relative", top:"2vh", fontWeight:"bold" }}>Name</p>
                               
                              <div className="card-body" id="card-body" style={{ background:"#fff", boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", textAlign:"left" }}>
                             
                                <Row>
                                  <Col sm={8}><h5>{this.props.name}</h5></Col>
                                  
                                </Row>
                                
                              </div>
                              
                              <p style={{ fontSize:"15px", position:"relative", top:"2vh", fontWeight:"bold" }}>Email</p>
                              
                              <div className="card-body" id="card-body" style={{ background:"#fff", boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", textAlign:"left" }}>
                             
                                <Row>
                                  <Col><h5>{this.props.email}</h5></Col>
                    
                                </Row>
                               
                              </div>
                             
                              <p style={{ fontSize:"15px", position:"relative", top:"2vh", fontWeight:"bold" }}>No. Handphone</p>
                            
                              <div className="card-body" id="card-body" style={{ background:"#fff", boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", textAlign:"left" }}>
                              
                                <Row>
                                  <Col><h5>{this.props.no_telp}</h5></Col>
                    
                                </Row>
                              </div>  
      </div>
      
    </div>
  </div>
</div>

{/* <!-- Modal Change Privacy --> */}
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ background:"lavender" }}>
      <span className="fas fa-user-lock" ></span><h5 style={{ fontFamily:"arial", position:"absolute", left:"3vw", top:"2vh" }}>Change Info</h5>
      </div>
      <div class="modal-body">
      <ChangeData 
                  changeData={this.props.changeData}
                  handleChange={this.props.handleChange}
                  username={this.props.username}
                  password={this.props.password}
                  toggleShow={this.props.toggleShow}
                  type={this.props.type}
                  loading={this.props.loading}
                />
      </div>
      
    </div>
  </div>
</div>

{/* <!-- Modal Change Info --> */}
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ background:"lavender" }}>
      <span className="far fa-id-card" ></span><h5 style={{ fontFamily:"arial", position:"absolute", left:"3vw", top:"2vh" }}>Change Info</h5>
      </div>
      <div class="modal-body">
        <ChangeInfo 
                  changeInfo={this.props.changeInfo}
                  handleChange={this.props.handleChange2}
                  name={this.props.name2}
                  email={this.props.email2}
                  no_telp={this.props.no_telp2}
                  loading={this.props.loading}
                />
      </div>
      
    </div>
  </div>
</div>

{/* <!-- Modal Help--> */}
<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header" style={{ background:"lavender" }}>
        <span className="fas fa-exclamation-circle" ></span><h5 style={{ fontFamily:"arial", position:"absolute", left:"3vw", top:"2vh" }}>Help</h5> 
      </div>
      <div class="modal-body">
      You can ask your problem to us and you can also give advice and criticism.
      <br/>
      <br/>
      <br/>
      <p>Send To :</p>
        <div style={{ textAlign:"center", fontSize:"24px" }}>
          <span className="fas fa-headphones"> <p style={{ fontFamily:"arial", fontSize:"15px" }}>@G-ChatApp</p></span>
        </div>
      </div>
      
    </div>
  </div>
</div>
      </>
    );
  }
}
