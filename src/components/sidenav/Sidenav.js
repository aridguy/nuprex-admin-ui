import React from "react";
import Logo from "../Logo";
import Dashicon from "../../assets/dashboard-ico.png";
import Orders from "../../assets/order-ico.png";
import Riders from "../../assets/rider-ico.png";
import Customers from "../../assets/customer-ico.png";
import Admin from "../../assets/admin-ico.png";
import Chat from "../../assets/chat-ico.png";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav-bg full-height pt-5 p-0">
      <div className="px-4">
        <Logo variant="white" />
      </div>
      <div className="routes mt-5">
        <Link to="/dashboard/home" className="text-decoration-none">
          <div className="pages px-4 p-2 dashboard_route_hover">
            <div className="cursor">
              <img width={22} src={Dashicon} alt="dashboard-ico" />{" "}
              <small className="text-white px-2">Dashboard</small>
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="pages px-4 mt-4 p-2 dashboard_route_hover">
            <div className="cursor">
              <img width={22} src={Orders} alt="orders-ico" />{" "}
              <small className="text-white px-2">Orders</small>
            </div>
          </div>
        </Link>
        <Link to="/riders">
          <div className="pages px-4 mt-4 p-2 dashboard_route_hover">
            <div className="cursor">
              <img width={22} src={Riders} alt="riders-ico" />{" "}
              <small className="text-white px-2">Riders</small>
            </div>
          </div>
        </Link>
        <div className="pages px-4 mt-4 p-2 dashboard_route_hover">
          <div className="cursor">
            <img width={22} src={Customers} alt="customers-ico" />{" "}
            <small className="text-white px-2">Customers</small>
          </div>
        </div>

        <div className=" px-4 mt-4 p-2 dashboard_route_hover">
          <div className="cursor">
            <img width={22} src={Admin} alt="admin-ico" />{" "}
            <small className="text-white px-2">Admin</small>
          </div>
        </div>

        <div className="pages px-4 mt-4 p-2 dashboard_route_hover">
          <div className="cursor">
            <img width={22} src={Chat} alt="chat-ico" />{" "}
            <small className="text-white px-2">Chat</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
