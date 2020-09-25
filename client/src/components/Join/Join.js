import { Typography, FormControl, Input, Button } from "@material-ui/core";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/chat?name=${name}&room=${room}`;
    }
  };

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <Typography variant="h4" gutterBottom className="heading">
          join vChat
        </Typography>
        <FormControl required variant="outlined">
          <Input
            placeholder="Name"
            className="join-input"
            type="text"
            required
            autoComplete
            autoFocus
            disableUnderline
            onChange={(event) => {
              setName(event.target.value);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Input
            placeholder="Room"
            className="join-input mt-20"
            type="text"
            required
            autoComplete
            disableUnderline
            onChange={(event) => setRoom(event.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button variant="contained" className="btn mt-20">
              GO CHAT!
            </Button>
          </Link>
        </FormControl>
      </div>
    </div>
  );
};
export default Join;
