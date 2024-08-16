import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";

const Navbar = () => {
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
            /> <small>Tolani Bello <HiChevronDown /></small>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
