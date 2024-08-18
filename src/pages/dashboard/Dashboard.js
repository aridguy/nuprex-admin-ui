import React, { useEffect, useState } from "react";
import Sidenav from "../../components/sidenav/Sidenav";
import Navbar from "../../components/navbar/Navbar";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons
import { GoPlus } from "react-icons/go";
import { IoMdArrowBack } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS
import Swal from "sweetalert2";

const Dashboard = () => {
  // innitiating animation
  useEffect(() => {
    Aos.init({});
  }, []);
  // initial states / dashboard visible by default
  const [dashboardHome, setDashboardHome] = useState(true);
  const [dashboardRider, setDashboardRider] = useState(false);

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
  };
  // open create new rider
  const openCreateRider = () => {
    setDashboardHome(false);
    setDashboardRider(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutters full-height ">
          <div className="col-md-2 p-0 ">
            <Sidenav />
          </div>
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
                    <div className="cards">
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
                    <div className="cards">
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
                    className="col-md-4"
                    data-aos="fade-right"
                    data-aos-duration="1400"
                  >
                    <div className="cards">
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
                      onClick={openCreateRider}
                      className="brand-background border text-white rider_admin_btn"
                    >
                      <GoPlus />
                      Add a Rider
                    </button>
                    <button className="mx-2 brand-background border text-white rider_admin_btn">
                      <GoPlus />
                      Add an Admin
                    </button>
                  </div>
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
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Dashboard;
// style={{width: "15em", height: "2em"}}
