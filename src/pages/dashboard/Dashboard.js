import React from "react";
import Sidenav from "../../components/sidenav/Sidenav";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row no-gutters full-height ">
          <div className="col-md-2 p-0 ">
            <Sidenav />
          </div>
          <div className="col-md-10 p-0 dashboard-bg full-height">
          <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
