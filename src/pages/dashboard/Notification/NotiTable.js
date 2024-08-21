import React from "react";
import "../../../App.css";

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Sidenav from "../../../components/sidenav/Sidenav";
import Navbar from "../../../components/navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';

const NotiTable = () => {
  const Navigate = useNavigate("/");
  return (
    <div className="container-fluid">
      <div className="row no-gutter full-height">
        <Sidenav />
        <div className="col-md-2 p-0"></div>
        <div className="col-md-10 p-0 dashboard-bg">
          <Navbar />
          <div className="p-4">
            <div className="workbench-container">
              <div className="d-flex justify-content-between align-items-center">
                <small className="lead text-muted">Notification</small>
                <small
                  onClick={() => Navigate("/dashboard/home")}
                  className="float-end cursor backAddRiderBtn"
                >
                  <IoMdArrowBack /> Back
                </small>
              </div>
              <div className="table-responsive workbench-bg p-4 full-height mt-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotiTable;
