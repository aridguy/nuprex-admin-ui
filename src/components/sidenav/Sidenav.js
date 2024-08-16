import React from "react";
import Logo from "../Logo";

const Sidenav = () => {
  return (
    <div className="sidenav-bg full-height pt-5">
      <div className="px-4">
        <Logo variant="white" />
      </div>
      <div className="routes"></div>
    </div>
  );
};

export default Sidenav;
