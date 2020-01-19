import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "../style/ChatPage.scss";
import Roomchat from "../components/message/Roomchat";
import Settings from "../components/message/Settings";
import Sidebar from "../components/message/Sidebar";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      dataChat: [],
      idChat: "",
      nameId: "",
      text: "",
      avatar: "",
      idDelete: "",
      username: "",
      password: "",
      name: "",
      email: "",
      no_telp: "",
      search: "",
      isLoading: false,
      btn: true,
      content: true,
      togglesidebar: true
    };
  }

  // toggle sidebar in dashboard
  ToggleSidebar() {
    this.setState({
      btn: !this.state.btn,
      content: !this.state.content,
      togglesidebar: !this.state.togglesidebar
    });
  }

  componentDidMount() {
    const id = this.state.idLogin.id;
    Axios.get(`https://calm-mesa-84057.herokuapp.com/message/${id}`)
      .then(res => {
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
  }

  UNSAFE_componentWillMount() {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    this.setState({
      user: myUser,
      idLogin: myUser
    });
  }

  idChat = async chats => {
    const dataId = await chats.id;
    const nameId = await chats.name;
    this.setState({
      idChat: dataId,
      nameId: nameId
    });
    this.getMessage();
  };

  getMessage = () => {
    const id = this.state.idChat;
    const idLogin = this.state.idLogin.id;
    Axios.get(
      `https://calm-mesa-84057.herokuapp.com/message/${idLogin}/${id}`
    ).then(res => {
      const dataChat = res.data.message;
      setTimeout(() => {
        this.getMessage.bind(this);
      }, 5000);
      this.setState({
        dataChat: dataChat
      });
    });
  };

  handleChangeText = t => {
    this.setState({
      text: t.target.value
    });
  };

  sendMessage = a => {
    a.preventDefault();

    const postpesan = {
      receiver_id: this.state.idChat,
      sender_id: this.state.idLogin.id,
      text: this.state.text
    };

    Axios.post("https://calm-mesa-84057.herokuapp.com/message/send", postpesan)
      .then(res => {
        this.getMessage();
        this.setState({
          text: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  idDelete = async del => {
    const ambPesan = await del.id;
    const nameId = await del.name;
    this.setState({
      idDelete: ambPesan,
      nameId: nameId
    });
  };

  deleteMessage = () => {
    const id = this.state.idDelete;
    Axios.delete(`https://calm-mesa-84057.herokuapp.com/message/delete/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  selectAvatar = e => {
    e.preventDefault();
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
        console.log(res);

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

  changePrivate = i => {
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

  changeProfile = b => {
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  render() {
    if (!localStorage.getItem("access_token")) {
      return <Redirect to="/" />;
    }
    const contactChat = this.state.chat.filter(list => {
      return (
        list.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              btn={this.state.btn}
              togglesidebar={this.state.togglesidebar}
              ToggleSidebar={this.ToggleSidebar.bind(this)}
              avatar={this.state.user.avatar}
              name={this.state.user.name}
            />
            <Settings
              username={this.state.user.username}
              name={this.state.user.name}
              no_telp={this.state.user.no_telp}
              email={this.state.user.email}
              onChangeImg={this.selectAvatar}
              onClickImg={this.uploadAvatar}
              avatar={this.state.user.avatar}
              handleChange={this.handleChange}
              changePrivate={this.changePrivate}
              EUsername={this.state.username}
              EPassword={this.state.password}
              changeProfile={this.changeProfile}
              Ename={this.state.name}
              Eemail={this.state.email}
              Eno_telp={this.state.no_telp}
              loading={this.state.isLoading}
            />
            <Roomchat
              content={this.state.content}
              dataChat={this.state.dataChat}
              idChat={this.idChat}
              textMessage={this.state.text}
              handleChangeText={this.handleChangeText}
              sendMessage={this.sendMessage}
              idDelete={this.idDelete}
              deleteMessage={this.deleteMessage}
              idMessage={this.state.user.id}
              nameId={this.state.nameId}
              valueSearch={this.state.search}
              onChangeSearch={this.updateSearch}
              contactChat={contactChat}
            />
          </div>
        </div>
      </>
    );
  }
}
