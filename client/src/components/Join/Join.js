import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.scss";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join vChat</h1>
        <div>
          <input
            placeholder="Name"
            className="join-input"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="join-input mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="btn mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Join;
