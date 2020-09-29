import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.scss";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="author-user pr-10">{trimmedName}</p>
      <div className="message-box dark-background">
        <p className="message-text text-light">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box">
        <p className="message-text text-dark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="author-user light-back ground pl-10">{user}</p>
    </div>
  );
};

export default Message;
