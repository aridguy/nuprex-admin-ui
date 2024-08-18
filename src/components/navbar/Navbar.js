import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS

const Navbar = () => {
  // innitiating animation
  useEffect(() => {
    Aos.init({});
  }, []);
  // default states
  const [profileInfo, setProfileInfo] = useState(false);
  const toggleLogout = () =>  setProfileInfo(prevState => !prevState);
  return (
    <div className="container bg-white navbar px-3">
      <div className="search_wrap">
        <CiSearch className="cursor" />
        <input
          className="searchbox"
          type="search"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="float-end mr-3">
        <div className="d-flex gap-4">
          <div>
            <MdOutlineNotificationAdd className="cursor notification" />
          </div>
          <div>
            <img
              width={34}
              loading="lazy"
              className="border rounded-circle"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="profile-pic"
            />{" "}
            <small>
              Tolani Bello <HiChevronDown onClick={toggleLogout} />
            </small>
            {profileInfo && (
              <div data-aos="fade-right" data-aos-duration="600">
                <div className="logout_toggler px-3">
                  <small className="lead cursor move-profile">Profile</small>
                  <hr />
                  <small className="lead cursor text-danger move-logout">Logout</small>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
