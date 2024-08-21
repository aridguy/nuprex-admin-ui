import React from "react";

const TableHead = () => {
  return (
    <div>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead className="bg-white text-muted ">
          <tr>
            <th className="text-muted">
              <small>Service</small>
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
            <th className="text-muted">
              <small>Current Location</small>
            </th>
            <th className="text-muted">
              <small>Destination</small>
            </th>
            <th className="text-muted">
              <small>Status</small>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableHead;
