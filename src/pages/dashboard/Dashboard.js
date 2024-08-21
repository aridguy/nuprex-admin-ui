import React, { useEffect, useState } from "react";
// import Sidenav from "../../components/sidenav/Sidenav";
import Navbar from "../../components/navbar/Navbar";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons
import { GoPlus } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS
import Swal from "sweetalert2";
import TableHead from "./tables/TableHead";
import Table from "./tables/Table";
import Sidenav from "../../components/sidenav/Sidenav";
// import { IoIosStarOutline } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


const Dashboard = () => {
  // innitiating animation
  const Navigate = useNavigate("/");
  useEffect(() => {
    Aos.init({});
  }, []);
  // initial states / dashboard visible by default
  const [dashboardHome, setDashboardHome] = useState(true);
  const [dashboardRider, setDashboardRider] = useState(false);
  const [dashboardAdmin, setDashboardAdmin] = useState(false);
  const [openCompletedDelivery, setOpenCompletedDelivery] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  // WORKBENCH & NOTIFICATION
  const [workbench, setWorkbench] = useState(true);
  const [notifications, setNotifications] = useState(false);

  // THE RIDERS SCREEN RIDERS CODE GENERATE
  const [riderCode, setRiderCode] = useState("");
  const [buttonText, setButtonText] = useState("Generate Code");

  const generateCode = (e) => {
    e.preventDefault();
    if (buttonText === "Generate Code") {
      // Generate code and update state
      const randomCode = Math.floor(1000000 + Math.random() * 9000000);
      const generatedCode = `RD-${randomCode}`;
      setRiderCode(generatedCode);
      setButtonText("Submit");
    } else if (buttonText === "Submit") {
      // Trigger the SweetAlert2 modal
      Swal.fire({
        title: "Good job!",
        html: "You have successfully added <br /> Kehinde Ojapa as a Rider!",
        icon: "success",
      });
      // Optionally reset the button text or perform other actions
      // setButtonText('Generate Code');
    }
  };
  // go back to dashboard
  const backToDashboard = () => {
    setDashboardHome(true);
    setDashboardRider(false);
    setDashboardAdmin(false);
    setOpenActivities(false);
    setOpenCompletedDelivery(false);
  };
  // open create new rider
  const openCreateRider = () => {
    setDashboardHome(false);
    setDashboardRider(true);
    setDashboardAdmin(false);
  };
  const openCreateAdmin = () => {
    setDashboardHome(false);
    setDashboardRider(false);
    setDashboardAdmin(true);
  };

  const createAdminButton = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Good job!",
      html: "Adekanmi Zainab has been <br /> created as an Admin Successfully!",
      icon: "success",
    });
  };
  // completed delivery UI
  // const ToggleCompletedDelivery = () => {
  //   setDashboardAdmin(false);
  //   setDashboardHome(false);
  //   setDashboardRider(false);
  //   setOpenCompletedDelivery(true);
  // };
  // view activities UI
  const OpenTheActivitiesUi = () => {
    setDashboardAdmin(false);
    setDashboardHome(false);
    setDashboardRider(false);
    setOpenCompletedDelivery(false);
    setOpenActivities(true);
  };
  const activities = [
    {
      id: 1,
      status: "Order Received",
      detail: "Waiting for Rider to pickup",
      time: "03:45pm",
    },
    {
      id: 2,
      status: "Rider Accepted your Order",
      detail: "Your task has been assigned to a rider",
      time: "03:45pm",
    },
    {
      id: 3,
      status: "Rider on the way",
      detail: "Your package is picked up and in transit",
      time: "04:44pm",
    },
    {
      id: 4,
      status: "Package has arrived",
      detail: "Rider is at delivery location",
      time: "04:56pm",
    },
    {
      id: 5,
      status: "Package delivered successfully",
      detail: "Your package has been delivered",
      time: "04:56pm",
    },
  ];

  const ToggleNotification = () => {
    setNotifications(true);
    setWorkbench(false);
  };
  const ToggleWorkbench = () => {
    setNotifications(false);
    setWorkbench(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutters full-height ">
          <Sidenav />
          <div className="col-md-2 p-0 "></div>
          <div className="col-md-10 p-0 dashboard-bg full-height">
            <Navbar />
            {/*DASHBOARD HOME SCREEN*/}
            {dashboardHome && (
              <div className="container">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <small className="">Hello, Tolani 👏</small>
                  </div>
                  <div className="col-md-5">
                    <div className="filter_dates float-end">
                      <div>
                        <input
                          style={{
                            borderColor: "2px solid #FF6B00",
                            background: "#FFE3D5",
                            outlineColor: "#FF6B00",
                          }}
                          type="date"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>
                <div className="row mt-3">
                  <div
                    className="col-md-4"
                    data-aos="fade-right"
                    data-aos-duration="600"
                  >
                    <div
                      className="cards cursor"
                      onClick={() => Navigate("/orders")}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mt-1">
                          <small className="">Orders</small>
                          <h1 className="display-2">23</h1>
                        </div>
                        <div>
                          <div className="icon-circle">
                            <FaCheckCircle className="check-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div
                      className="cards cursor"
                      onClick={() => Navigate("/customers")}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mt-1">
                          <small className="">Total Customers</small>
                          <h1 className="display-2">210</h1>
                        </div>
                        <div>
                          <div className="icon-circle">
                            <FaCheckCircle className="check-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 "
                    data-aos="fade-right"
                    data-aos-duration="1400"
                  >
                    <div
                      className="cards cursor"
                      onClick={() => Navigate("/riders")}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mt-1">
                          <small className="">Riders</small>
                          <h1 className="display-2">30</h1>
                        </div>
                        <div>
                          <div className="icon-circle">
                            <FaCheckCircle className="check-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div>
                    <button
                      data-aos="fade-right"
                      onClick={openCreateRider}
                      className="brand-background border text-white rider_admin_btn"
                    >
                      <GoPlus />
                      Add a Rider
                    </button>
                    <button
                      data-aos="fade-right"
                      onClick={openCreateAdmin}
                      className="mx-2 brand-background border text-white rider_admin_btn"
                    >
                      <GoPlus />
                      Add an Admin
                    </button>
                  </div>
                </div>
                {/* the table navigation bar */}
                <div className=" mt-3">
                  <div className="noti_bg">
                    <small onClick={ToggleWorkbench} className="noti_text cursor">Workbench</small>{" "}
                    <small
                      onClick={ToggleNotification}
                      className="noti_text px-4 cursor"
                    >
                      Notification
                    </small>
                    <Link to="/notification">
                      <button className="border viewAllBtn text-white float-end">
                        View All
                      </button>
                    </Link>
                  </div>
                  {workbench && (
                    <div>
                      <TableHead />
                      <Table />
                    </div>
                  )}
                  {notifications && (
                    <div>
                      <div className="table-responsive workbench-bg p-4 full-height ">
                        <table className="table table-striped workbench-table">
                          <thead className="bg-white text-muted ">
                            <tr className="">
                              <th className="text-muted">
                                <small>Notification</small>
                              </th>
                              <th className="text-muted">
                                <small>ID</small>
                              </th>
                              <th className="text-muted">
                                <small>Date</small>
                              </th>
                              <th className="text-muted">
                                <small>Time</small>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white text-muted">
                            <tr className="cursor">
                              <td className="text-muted">
                                New Rider Kehinde Ojapa has been added
                              </td>
                              <td className="text-muted">#093738376</td>
                              <td className="text-muted">01/01/24</td>
                              <td className="text-muted">9:35 am</td>
                            </tr>
                      
                        
                            <tr className="cursor">
                              <td className="text-muted">
                                New Rider Kehinde Ojapa has been added
                              </td>
                              <td className="text-muted">#093738376</td>
                              <td className="text-muted">01/01/24</td>
                              <td className="text-muted">9:35 am</td>
                            </tr>
                            <tr className="cursor">
                              <td className="text-muted">
                                New Rider Kehinde Ojapa has been added
                              </td>
                              <td className="text-muted">#093738376</td>
                              <td className="text-muted">01/01/24</td>
                              <td className="text-muted">9:35 am</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/*ADD RIDERS SCREEN*/}
            {dashboardRider && (
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <small>Add a Rider</small>
                      <small
                        onClick={backToDashboard}
                        className="float-end cursor backAddRiderBtn"
                      >
                        <IoMdArrowBack /> Back
                      </small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="riders_form_bg mt-2">
                      <div
                        className="form_box"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <form className="">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-2"></div>
                              <div className="col-md-4 mt-4">
                                <p>
                                  <small className="text-muted">
                                    First Name
                                  </small>
                                  <input
                                    className="form-control"
                                    type="text"
                                    required
                                    name="first name"
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">Gender</small>{" "}
                                  <br />
                                  <select
                                    className="form-control text-muted"
                                    required
                                  >
                                    <option value="Male disabled">
                                      Choose gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </p>
                                <p>
                                  <small className="text-muted">
                                    Email Address
                                  </small>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    required
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">Vehicle</small>{" "}
                                  <br />
                                  <select
                                    className="form-control text-muted"
                                    required
                                  >
                                    <option value="Male disabled">
                                      Choose Vehicle
                                    </option>
                                    <option value="Male">Bicycle (002)</option>
                                    <option value="Female">
                                      Motorcycle (E03774D)
                                    </option>
                                    <option value="Female">
                                      Van (AT0004ED)
                                    </option>
                                    <option value="Female">
                                      VAN (E074YTRE)
                                    </option>
                                  </select>
                                </p>
                              </div>
                              <div className="col-md-4 mt-4">
                                <p>
                                  <small className="text-muted">
                                    Last Name
                                  </small>
                                  <input
                                    className="form-control"
                                    type="text"
                                    required
                                    name="last name"
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">
                                    Phone Number
                                  </small>{" "}
                                  <br />
                                  <small>
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="phone"
                                    />
                                  </small>
                                </p>
                                <p>
                                  <small className="text-muted">Address</small>
                                  <input
                                    className="form-control"
                                    type="address"
                                    required
                                    name="address"
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">
                                    Rider's Code
                                  </small>
                                  <br />
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={riderCode}
                                    readOnly
                                    required
                                    name="riders code"
                                  />
                                </p>
                                <button
                                  className="btn btn-primary float-end btn-lg"
                                  onClick={generateCode}
                                >
                                  {buttonText}
                                </button>
                              </div>
                              <div className="col-md-2"></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*ADD ADMIN SCREEN*/}
            {dashboardAdmin && (
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <small>Add New Admin</small>
                      <small
                        onClick={backToDashboard}
                        className="float-end cursor backAddRiderBtn"
                      >
                        <IoMdArrowBack /> Back
                      </small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="riders_form_bg mt-2">
                      <div
                        className="form_box"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <form className="">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4"></div>
                              <div className="col-md-4 mt-4">
                                <p>
                                  <small className="text-muted">
                                    Email Address
                                  </small>
                                  <input
                                    className="form-control"
                                    type="email"
                                    required
                                    name="email"
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">Name</small>
                                  <input
                                    className="form-control"
                                    type="text"
                                    required
                                    name="name"
                                  />
                                </p>
                                <p>
                                  <small className="text-muted">Role</small>{" "}
                                  <br />
                                  <select
                                    className="form-control text-muted"
                                    required
                                  >
                                    <option value="Male disabled">
                                      Choose Role
                                    </option>
                                    <option value="Admin">Admin</option>
                                    <option value="Super Admin">
                                      Super Admin
                                    </option>
                                  </select>
                                </p>
                                <button
                                  onClick={createAdminButton}
                                  className="btn btn-primary block full-width"
                                >
                                  {" "}
                                  <GoPlus /> Add User
                                </button>
                              </div>
                              <div className="col-md-4"></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*ORDERS DETAILS UI*/}
            {openCompletedDelivery && (
              <div className="container mt-1">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <small>Olabanji's Orders</small>
                      <small
                        onClick={backToDashboard}
                        className="float-end cursor backAddRiderBtn"
                      >
                        <IoMdArrowBack /> Back
                      </small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="riders_form_bg mt-2">
                      <div
                        className="client_order_details text-center pt-5"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <p className="lead">Completed Delivery</p>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                          <div className="">
                            <div
                              data-aos="fade-right"
                              data-aos-delay="1000"
                              className=""
                            >
                              <small className="text-muted">Service:</small>{" "}
                              <small className="float-end text-muted">
                                Pickup
                              </small>{" "}
                              <br />
                              <small className="text-muted">
                                Current Location:
                              </small>{" "}
                              <small className="float-end text-muted">
                                Mohammed street, akoka
                              </small>{" "}
                              <br />
                              <small className="text-muted">
                                Destination:
                              </small>{" "}
                              <small className="float-end text-muted">
                                Ajah, amoke, Elegede
                              </small>{" "}
                              <br />
                              <small className="text-muted">Amount:</small>{" "}
                              <small className="float-end text-muted">
                                N9,000
                              </small>{" "}
                              <br />
                              <small className="text-muted">Date:</small>{" "}
                              <small className="float-end text-muted">
                                22, Aug, 2022
                              </small>{" "}
                              <br />
                              <small className="text-muted">Time:</small>{" "}
                              <small className="float-end text-muted">
                                12, 45pm
                              </small>{" "}
                              <br />
                              <small className="text-muted">Rider:</small>{" "}
                              <small className="float-end text-muted">
                                Kehinde Ojapa
                              </small>{" "}
                              <br />
                              <small className="text-muted">Rating:</small>{" "}
                              <small className="float-end text-muted">
                                <span className="text-warning">★★★★★</span>
                              </small>{" "}
                              <br />
                              <small className="text-muted">
                                TransactionID:
                              </small>{" "}
                              <small className="float-end text-muted">
                                33455643657
                              </small>{" "}
                              <br />
                              <button
                                onClick={OpenTheActivitiesUi}
                                className="float-end mt-3 border btn btn-primary"
                              >
                                View Activities
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/*ORDERS DETAILS UI*/}
            {openActivities && (
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-12 text-muted">
                    <div>
                      <small>Olabanji's Orders</small>
                      <small
                        onClick={backToDashboard}
                        className="float-end cursor backAddRiderBtn"
                      >
                        <IoMdArrowBack /> Back
                      </small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="riders_form_bg">
                      <div className="row mt-2">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                          <div className="activities-container">
                            <h5 className="text-center mb-4">Activities</h5>
                            <div className="activity-timeline">
                              {activities.map((activity) => (
                                <div
                                  key={activity.id}
                                  className="activity-item"
                                >
                                  <div className="activity-icon-container">
                                    <BsCheckCircleFill className="activity-icon" />
                                  </div>
                                  <div className="activity-content">
                                    <small className="activity-status">
                                      {activity.status}
                                    </small>{" "}
                                    <br />
                                    <small className="activity-detail">
                                      {activity.detail}
                                    </small>
                                  </div>
                                  <div className="activity-time">
                                    <small>{activity.time}</small>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="rider-info">
                              <div className="rider-details">
                                <img
                                  src="https://via.placeholder.com/40"
                                  alt="Rider"
                                  className="rider-avatar"
                                />
                                <div className="rider-name">
                                  <small>Kehinde Ojapa</small>
                                </div>
                              </div>
                              <div className="rider-rating">
                                <span className="rating-stars">★★★★★</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Dashboard;
// style={{width: "15em", height: "2em"}}
