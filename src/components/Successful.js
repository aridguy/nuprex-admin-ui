import React from "react";
import SuccessIcon from "../assets/status-success-solid_svgrepo.com.svg";

const Successful = () => {
  return (
    <div>
      <img
        width={80}
        className="text-center"
        src={SuccessIcon}
        alt="succesful"
        lazy="loading"
      />
    </div>
  );
};

export default Successful;
