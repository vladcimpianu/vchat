import { Input, Button } from "@material-ui/core";
import React from "react";

import "./ChatInput.scss";

export default function ChatInput({ message, setMessage, sendMessage }) {
  return (
    <div className="form">
      <Input
        className="chat-input"
        type="text"
        placeholder="Type a message..."
        autoFocus
        disableUnderline
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <Button
        className="send-btn"
        onClick={(e) => sendMessage(e)}
        variant="contained"
        size="small"
        color="primary"
        endIcon={<i class="material-icons">send</i>}
      >
        Send Message
      </Button>
    </div>
  );
}
