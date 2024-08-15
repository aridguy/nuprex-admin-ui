import logo from "./assets/logo.png";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 onboarding_bg"
            data-aos="fade-right"
            data-aos-duration="600"
          ></div>
          <div className="col-md-6">
            <div className="login_section mt-5 pt-3">
              <div
                className="mt-3 text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  className=""
                  width="140"
                  src={logo}
                  alt="logo"
                  lazy="loading"
                />
              </div>
              <div
                className="mt-4 text-center "
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="text-grey">Login to your Account</h3>
                <small>See what is going on with your business</small>
              </div>
              <div className="" data-aos="fade-right" data-aos-duration="1000">
                <div className="row mt-4">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="login_form_parent">
                      <form>
                        <p className="text-secondary">
                          Email
                          <input
                            required
                            type="email"
                            placeholder="tolanibello@nuprex.com.ng"
                            className="form-control"
                          />
                        </p>
                        <p className="text-secondary mt-2">
                          Password
                          <input
                            required
                            type="password"
                            placeholder="************"
                            className="border form-control"
                          />
                        </p>
                        <div className="">
                          <small className="">
                            <input type="checkbox" /> Remember Me
                          </small>
                          <small className="brand cursor float-end">
                            Forgot Password?
                          </small>
                        </div>
                        <div className="mt-3">
                          <button className="full-width btn brand-background text-white btn-lg">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
