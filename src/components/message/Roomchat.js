import React, { useRef, useEffect } from "react";
import "../../style/Roomchat.scss";
import avatar from "../../assets/avatar.png";
import Getar from "../../assets/distance@3x.png";
import { Link } from "react-router-dom";
export default function Roomchat({
  content,
  contactChat,
  idChat,
  dataChat,
  idMessage,
  textMessage,
  handleChangeText,
  sendMessage,
  idDelete,
  deleteMessage,
  nameId,
  valueSearch,
  onChangeSearch
}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [dataChat]);

  return (
    <div
      className={content ? "col-md-10 content-chat" : "col-md-12 content-chat"}
      ref={messagesEndRef}
    >
      <div className="container mt-3">
        <h3 className="font-weight-bold">Chat</h3>
        <div className="container-chat clearfix shadow-sm">
          <div className="row">
            <div className="col-md-4">
              <div className="people-list" id="people-list">
                <div className="input-group my-4 pb-2 px-3">
                  <div className="input-group-append">
                    <button className="btn border" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    name="username"
                    required
                    className="form-control"
                    placeholder="Search your Contact ..."
                    autoComplete="off"
                    value={valueSearch}
                    onChange={onChangeSearch}
                  />
                </div>
                <ul className="list">
                  {contactChat.map((c, index) => (
                    <li
                      className="clearfix shadow"
                      key={index}
                      onClick={() => idChat(c)}
                    >
                      <img
                        className="img-fluid contact-profile"
                        src={c.avatar}
                        alt="profile"
                      />
                      <div className="about">
                        <Link to={`/chatpage/${c.name}`}>
                          <div className="name">{c.name}</div>
                        </Link>
                        <div className="status">
                          <i className="fa fa-circle online" /> online
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="chat">
                <div className="chat-header clearfix">
                  <img
                    src={avatar}
                    width="60"
                    alt="avatar"
                    className="rounded-circle"
                  />
                  <div className="chat-about">
                    <div className="chat-with">Chat with {nameId}</div>
                  </div>

                  <i className="icon-telp">
                    <img
                      className="rounded-circle"
                      src={Getar}
                      alt=""
                      width="40"
                      style={{
                        cursor: "pointer",
                        boxShadow: "0 0 11px #777"
                      }}
                    />
                  </i>
                </div>
                {/* end chat-header */}
                <div className="chat-history">
                  {dataChat.map(chat => (
                    <ul key={chat.id}>
                      {idMessage === chat.receiver_id ? (
                        <li className="clearfix" ref={messagesEndRef}>
                          <div className="message-data align-right">
                            <span className="message-data-time">
                              10:14 AM, Today
                            </span>
                            &nbsp; &nbsp;
                            <span className="message-data-name">sender</span>
                            <i className="fa fa-circle me" />
                          </div>
                          <div className="message other-message float-right text-white">
                            {chat.text}
                          </div>
                        </li>
                      ) : (
                        <li ref={messagesEndRef}>
                          <div className="message-data">
                            <span className="message-data-name">
                              <i className="fa fa-circle online" /> receiver
                            </span>
                            <span className="message-data-time">
                              10:20 AM, Today
                            </span>
                          </div>
                          <div className="message my-message">
                            <button
                              type="button"
                              className="btn"
                              data-toggle="modal"
                              data-target="#delete"
                              onClick={() => idDelete(chat)}
                            >
                              <i className="fas fa-minus-circle text-danger"></i>
                            </button>
                            {chat.text}
                          </div>
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
                                    className="btn btn-light"
                                    data-dismiss="modal"
                                  >
                                    No
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={() => deleteMessage(chat)}
                                  >
                                    Yes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* //akhirmodal */}
                        </li>
                      )}
                    </ul>
                  ))}
                </div>
                {/* end chat-history */}
                <div className="chat-message clearfix">
                  <textarea
                    name="message-to-send"
                    id="message-to-send"
                    placeholder="Type your message"
                    rows={3}
                    value={textMessage}
                    onChange={handleChangeText}
                  />
                  <i className="fa fa-file-o mr-2" />
                  <i className="fa fa-file-image-o mr-2" />
                  <i className="far fa-grin-beam"></i>{" "}
                  <button onClick={sendMessage}>Send</button>
                </div>
                {/* end chat-message */}
              </div>
              {/* end chat */}
            </div>
          </div>
        </div>
        {/* end container */}
      </div>
    </div>
  );
}
