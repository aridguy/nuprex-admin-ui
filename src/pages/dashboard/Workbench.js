import React from "react";
import "../../App.css";
import Sidenav from "../../components/sidenav/Sidenav";
import Navbar from "../../components/navbar/Navbar";
import TableHead from "./tables/TableHead";
import Table from "./tables/Table";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Workbench = () => {
    const Navigate = useNavigate("/")
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
                <small className="lead text-muted">Workbench</small>
                <small onClick={() => Navigate("/dashboard/home")} className="float-end cursor backAddRiderBtn">
                  <IoMdArrowBack /> Back
                </small>
              </div>
              <div className="table-responsive workbench-bg p-4 full-height mt-3">
                <table className="table table-striped workbench-table">
                  <TableHead />
                  <Table />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workbench;
