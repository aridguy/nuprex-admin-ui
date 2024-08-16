import React, { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS
import { useEffect } from "react";
import Logo from "../../../components/Logo";
import Successful from "../../../components/Successful";


const Reset = () => {
  // OTP LOGICS
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only a single character in each input
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if there's a value and it's not the last input
      if (value.length === 1 && index < 3) {
        inputs.current[index + 1].focus();
      }
    }
  };
  // OTP LOGICS ends

  const isButtonDisabled = otp.some((value) => value === "");
  // innitiating animation
  useEffect(() => {
    AOS.init({});
  }, []);

  // INITIAL STATES
  const [resetPassword, setResetPassword] = useState(true);
  const [useOTP, setUseOTP] = useState(false);
  const [createNewPassword, setCreateNewPassword] = useState(false);
  const [successKeyCreated, setSuccessKeyCreated] = useState(false);
  // const [successPasswordReset, setSuccessPasswordReset] = useState(false);

  const openOTPSreen = () => {
    setResetPassword(false);
    setUseOTP(true);
    setCreateNewPassword(false);
    setSuccessKeyCreated(false);
  };
  const openCreatePassword = () => {
    setResetPassword(false);
    setUseOTP(false);
    setCreateNewPassword(true);
    setSuccessKeyCreated(false);
  };
  const openSuccessScreen = () => {
    setResetPassword(false);
    setUseOTP(false);
    setCreateNewPassword(false);
    setSuccessKeyCreated(true);
  };
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
            <div className="login_section mt-5 pt-5">
              <div
                className="mt-3 text-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Logo />
              </div>
              {/*reset password screen*/}
              {resetPassword && (
                <div id="reset_wrap">
                  <div
                    className="mt-4 text-center "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <h3 className="text-grey">Forgot Password</h3>
                    <small>Enter your email address</small>
                  </div>
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
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
                                className="form-control"
                              />
                            </p>

                            <div className="mt-3">
                              <button
                                onClick={openOTPSreen}
                                className="full-width btn btn-primary brand-background text-white btn-lg"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              )}
              {/*otp screen screen*/}
              {useOTP && (
                <div id="reset_wrap">
                  <div
                    className="mt-4 text-center "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <h3 className="text-grey">One Time Password</h3>
                    <small>Enter the OTP sent to your email address</small>
                  </div>
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="row mt-4">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div className="login_form_parent">
                          <form>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                              }}
                            >
                              {otp.map((value, index) => (
                                <input
                                  key={index}
                                  className="form-control input-number"
                                  type="number"
                                  maxLength="1"
                                  value={value}
                                  onChange={(e) => handleChange(e, index)}
                                  ref={(el) => (inputs.current[index] = el)}
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    fontSize: "20px",
                                    textAlign: "center",
                                  }}
                                />
                              ))}
                            </div>

                            <div className="mt-3">
                              <button
                                onClick={openCreatePassword}
                                style={{
                                  marginTop: "20px",
                                  padding: "10px 40px",
                                  fontSize: "16px",
                                  backgroundColor: isButtonDisabled
                                    ? "#ccc"
                                    : "#4A90E2",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "5px",
                                  cursor: isButtonDisabled
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                                disabled={isButtonDisabled}
                                className="full-width btn btn-primary brand-background text-white btn-lg mt-5"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              )}
              {/*create new password screen*/}
              {createNewPassword && (
                <div id="reset_wrap">
                  <div
                    className="mt-4 text-center "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <h3 className="text-grey">Change Password</h3>
                    <small>Enter new Password</small>
                  </div>
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="row mt-4">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div className="login_form_parent">
                          <form>
                            <p className="text-secondary">
                              New Password
                              <input
                                required
                                type="password"
                                className="form-control"
                              />
                            </p>
                            <p className="text-secondary">
                              Confirm Password
                              <input
                                required
                                type="password"
                                className="form-control"
                              />
                            </p>

                            <div className="mt-3">
                              <button
                                onClick={openSuccessScreen}
                                className="full-width btn btn-primary brand-background text-white btn-lg"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              )}
              {successKeyCreated && (
                <div id="reset_wrap">
                  <div
                    className="mt-4 text-center "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <h3 className="text-grey">Change Password</h3>
                    <small>Enter new Password</small>
                  </div>
                  <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div className="row mt-4">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div className="success_wrap text-center mt-3">
                          <Successful />
                          <h3 className=" lead text-center mt-3">
                            You have successfully changed <br /> your password.
                            Click login to enter your account
                          </h3>
                          <button
                            onClick={() => {
                              window.location.href = "/";
                            }}
                            className="mt-4 full-width btn btn-primary brand-background text-white btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
// <p className="text-secondary mt-2">
//   Password
//   <input
//     required
//     type="password"
//     placeholder="************"
//     className="border form-control"
//   />
// </p>;


