import React from "react";
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div>
      <img className="" width="140" src={logo} alt="logo" lazy="loading" />
    </div>
  );
};

export default Logo;
