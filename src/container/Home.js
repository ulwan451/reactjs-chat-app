import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "../style/Home.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import ChatRoom from "../components/ChatRoom";
import "../style/Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user: "",
      username: "",
      password: "",
      name: "",
      email: "",
      no_telp: "",
      avatar: null,
      hidden: true,
      //
      idLogin: "",
      idUser: "",
      chat: [],
      message: [],
      dataChat: [],
      text: "",
      idChat: "",
      search: "",
      isLoading: "",
      nameId: "",
      idDelete: ""
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadRefresh = this.uploadRefresh.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.getUser = this.getUser.bind(this);
    this.selectAvatar = this.selectAvatar.bind(this);
    this.uploadAvatar = this.uploadAvatar.bind(this);
    this.changeData = this.changeData.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }
  intervalID;
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeText = t => {
    this.setState({
      text: t.target.value
    });
  };

  idChat = async chats => {
    const dataId = await chats.id;
    const nameId = await chats.name;
    this.setState({
      idChat: dataId,
      nameId: nameId
    });
    this.getMessage();
  };

  idDelete = async del => {
    const ambPesan = await del.id;
    console.log(ambPesan, "pesan");
    this.setState({
      idDelete: ambPesan
    });
  };

  getMessage = () => {
    const id = this.state.idChat;
    // console.log("idChat =>", id);
    const idLogin = this.state.idLogin.id;
    Axios.get(
      `https://calm-mesa-84057.herokuapp.com/message/${idLogin}/${id}`
    ).then(res => {
      const dataChat = res.data.message;
      this.intervalID = setTimeout(this.getMessage.bind(this), 5000);
      // console.log("pesannnnnnnn", res.data.message);
      this.setState({
        dataChat: dataChat
      });
    });
  };

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({});
    }
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  sendMessage = a => {
    a.preventDefault();

    const postpesan = {
      receiver_id: this.state.idChat,
      sender_id: this.state.idLogin.id,
      text: this.state.text
    };
    Axios.post("https://calm-mesa-84057.herokuapp.com/message/send", postpesan)
      .then(res => {
        console.log("sendPesan", res);
        this.getMessage();
        this.setState({
          text: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadRefresh = () => {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    const avatarEng = this.state.avatar;
    const names = this.state.name;
    const no_telps = this.state.no_telp;
    const emails = this.state.email;
    const usernames = this.state.username;
    const passwords = this.state.password;
    this.setState({
      user: myUser,
      avatar: avatarEng,
      name: names,
      no_telp: no_telps,
      email: emails,
      username: usernames,
      password: passwords
    });
  };

  componentDidMount() {
    this.getMessage();
    const id = this.state.idLogin.id;
    Axios.get(`https://calm-mesa-84057.herokuapp.com/message/${id}`)
      .then(res => {
        console.log("contact", res);
        const chats = res.data;
        this.setState({
          chat: chats
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
    console.log("willmount");
  }

  componentWillMount() {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    this.setState({
      user: myUser,
      idLogin: myUser
    });
  }

  getUser = () => {
    const idUser = this.state.user.id;
    Axios.get(`https://calm-mesa-84057.herokuapp.com/tampil/${idUser}`)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res);
        this.setState({
          avatar: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  selectAvatar = e => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const avatar = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onloadend = () => {
      this.setState({
        avatar: avatar,
        base64: reader.result
      });
      this.uploadAvatar();
    };
  };

  uploadAvatar = () => {
    const id = this.state.user.id;
    this.setState({
      isLoading: true
    });
    Axios.put("https://calm-mesa-84057.herokuapp.com/avatar/edit", {
      avatar: this.state.base64,
      id
    })
      .then(res => {
        this.getUser();
        console.log(res);
        this.intervalID = setTimeout(this.uploadRefresh.bind(this), 5000);
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
      });
  };
  changeData = i => {
    i.preventDefault();
    const dataInput = {
      username: this.state.username,
      password: this.state.password,
      id: this.state.user.id
    };
    this.setState({
      isLoading: true
    });
    Axios.put("https://calm-mesa-84057.herokuapp.com/private/edit", dataInput)
      .then(res => {
        console.log(res);
        this.getUser();
        this.intervalID = setTimeout(this.uploadRefresh.bind(this), 5000);
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
      });
  };

  changeInfo = b => {
    b.preventDefault();
    const dataInput2 = {
      name: this.state.name,
      email: this.state.email,
      no_telp: this.state.no_telp,
      id: this.state.user.id
    };
    this.setState({
      isLoading: true
    });
    Axios.put("https://calm-mesa-84057.herokuapp.com/user/edit", dataInput2)
      .then(res => {
        console.log(res);
        this.getUser();
        this.intervalID = setTimeout(this.uploadRefresh.bind(this), 5000);
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
      });
  };

  deleteMessage = () => {
    const id = this.state.idDelete;
    console.log(id, "chat");
    Axios.delete(`https://calm-mesa-84057.herokuapp.com/message/delete/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const contactChat = this.state.chat.filter(list => {
      return (
        list.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const out = () => {
      localStorage.clear();
      console.log(localStorage.getItem("access_token"));
      if (!localStorage.getItem("access_token", "user")) {
        return <Redirect to="/" />;
      }
    };

    return (
      <Fragment>
        <ChatRoom
          // PERSONAL INFO
          out={out}
          name={this.state.user.name}
          no_telp={this.state.user.no_telp}
          email={this.state.user.email}
          // UPLOAD AVATAR
          onChange={this.selectAvatar}
          onClick={this.uploadAvatar}
          avatar={this.state.user.avatar}
          // MODAL PRIVATE
          changeData={this.changeData}
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
          toggleShow={this.toggleShow}
          type={this.state.hidden ? "password" : "text"}
          // MODAL INFO
          changeInfo={this.changeInfo}
          handleChange2={this.handleChange}
          name2={this.state.name}
          email2={this.state.email}
          no_telp2={this.state.no_telp}
          loading={this.state.isLoading}
          //CONTACT
          value={this.state.search}
          onChange2={this.updateSearch}
          contact={contactChat.map(list => (
            <div key={list.id} onClick={() => this.idChat(list)}>
              <ul className="list-group">
                <li className="list-group-item">
                  <div
                    style={{
                      textAlign: "left",
                      position: "relative",
                      top: "6vh",
                      zIndex: "0",
                      left: "1.4vw",
                      fontSize: "20px"
                    }}
                  >
                    <span className="fa fa-user"></span>
                  </div>

                  <div className="imgContact">
                    <img
                      style={{
                        backgroundSize: "cover",
                        zIndex: "5",
                        borderRadius: "50vw"
                      }}
                      src={list.avatar}
                      alt=""
                      width="53vw"
                      height="53vh"
                    />
                  </div>
                  <Link to={`/home/${list.name}`}>
                    <button
                      className="border-0"
                      style={{
                        position: "absolute",
                        left: "7vw",
                        top: "7vh",
                        fontSize: "18px",
                        outline: "none",
                        background: "none"
                      }}
                    >
                      {list.name}
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
          //MESSAGE CHAT
          nameId={this.state.nameId}
          kanan={this.state.dataChat.map(chat => (
            <ul key={chat.id}>
              <span>
                {this.state.user.id === chat.receiver_id ? (
                  <li
                    className="leftchat"
                    ref={el => {
                      this.messagesEnd = el;
                    }}
                  >
                    {chat.text}
                    <div>
                      <em>{chat.created_at}</em>
                    </div>
                  </li>
                ) : (
                    <li
                      className="rightchat"
                      ref={el => {
                        this.messagesEnd = el;
                      }}
                    >
                      {chat.text}
                      <div>
                        <em>{chat.created_at}</em>
                      </div>
                      <div>
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn"
                          data-toggle="modal"
                          data-target="#delete"
                          onClick={() => this.idDelete(chat)}
                        >
                          <i class="fas fa-minus-circle text-danger"></i>
                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="delete" tabIndex={-1}>
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-body">
                                Do you want to delete this message ?
                            </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  data-dismiss="modal"
                                >
                                  No
                              </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                  onClick={() => this.deleteMessage(chat)}
                                >
                                  Yes
                              </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
              </span>
            </ul>
          ))}
        />

        <form onSubmit={this.sendMessage} className="inputMessage">
          <div className="input-group mb-3" id="inputMessage2">
            <span id="iconKeyboard" className="fas fa-keyboard"></span>
            <input
              id="inputMessage3"
              value={this.state.text}
              className="card-body"
              placeholder="Write a message ..."
              onChange={this.handleChangeText}
              aria-describedby="button-addon1"
            />

            <div className="input-group-prepend">
              <button
                style={{ width: "4.4vw", color: "#fff" }}
                className="button1login btn-sm"
                type="submit"
                id="button-addon1"
              >
                <span className="fas fa-paper-plane"></span>
              </button>
            </div>
          </div>
        </form>
        <p
          style={{
            position: "fixed",
            top: "96vh",
            left: "45vw",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          © 2019 G-Team
        </p>
      </Fragment>
    );
  }
}
