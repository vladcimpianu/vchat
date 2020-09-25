import React from "react";

import "./Message.scss";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="user-sent-message pr-10">{trimmedName}</p>
      <div className="message-box dark-background">
        <p className="message-text text-light">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box">
        <p className="message-text text-dark">{text}</p>
      </div>
      <p className="user-sent-message light-back ground pl-10">{user}</p>
    </div>
  );
};

export default Message;
