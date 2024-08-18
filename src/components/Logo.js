import React from "react";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo_white.png";
import { useNavigate } from "react-router-dom";

const Logo = ({ variant = "default" }) => {
  const navigate = useNavigate()
  let selectedLogo;

  // Determine which logo to use based on the variant prop
  switch (variant) {
    case "white":
      selectedLogo = logo2;
      break;
    case "default":
    default:
      selectedLogo = logo1;
      break;
  }
  const goHome =() =>  navigate("/")
  

  return (
    <div>
      <img onClick={goHome}
        className="cursor"
        width="140"
        src={selectedLogo}
        alt="logo"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
