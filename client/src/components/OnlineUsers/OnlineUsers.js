import { Typography } from "@material-ui/core";
import React from "react";
import onlineIcon from "../../theme/assets/onlineIcon.png";

import "./OnlineUsers.scss";

const OnlineUsers = ({ users }) => {
  return (
    <div className="online-users-container">
      {users ? (
        <div className="active-container">
          <Typography variant="h6">People in this room: </Typography>
          <div>
            {users.map(({ name }) => (
              <div key={name} className="active-item">
                <img alt="Online Icon" src={onlineIcon} />
                &nbsp;{name}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div>
        <Typography variant="h6">
          vChat App
          <span role="img" aria-label="emoji">
            &nbsp;💬
          </span>
        </Typography>
        <Typography variant="caption">
          Made with
          <span role="img" aria-label="emoji">
            &nbsp;❤️
          </span>{" "}
          using ReactJS, ExpressJS, NodeJS and Socket.IO
        </Typography>
      </div>
    </div>
  );
};

export default OnlineUsers;
