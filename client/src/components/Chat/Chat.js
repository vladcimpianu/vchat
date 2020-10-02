import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../InfoBar/InfoBar";
import ChatInput from "../ChatInput/ChatInput";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import OnlineUsers from "../OnlineUsers/OnlineUsers";

import "./Chat.scss";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "https://vchat-server-side.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <InfoBar room={room} name={name} />
        <MessagesContainer messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <OnlineUsers users={users} />
    </div>
  );
};
export default Chat;
