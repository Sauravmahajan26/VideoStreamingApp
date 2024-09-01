import React from "react";
import logo from "../assets/Uscreen.jpg";

function Logo() {
  return (
    <span className="fs-4">
      <img
        src={logo}
        alt="Uscreen"
        style={{ width: "150px", height: "50px" }}
      />
    </span>
  );
}

export default Logo;
