import React from "react";

import onlineIcon from "../../assets/onlineIcon.png";
import closeIcon from "../../assets/closeIcon.png";

import "./InfoBar.scss";

const InfoBar = ({ room }) => (
  <div className="info-bar">
    <div className="left-inner-container">
      <img className="online-icon" src={onlineIcon} alt="online-icon" />
      <h3 className="room-name">{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/">
        <img src={closeIcon} alt="close-icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
