import React from "react";

const TableHead = () => {
  return (
    <div>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead className="bg-white text-muted">
          <tr>
            <th className="text-muted">Service</th>
            <th className="text-muted">ID</th>
            <th className="text-muted">Date</th>
            <th className="text-muted">Time</th>
            <th className="text-muted">Current Location</th>
            <th className="text-muted">Destination</th>
            <th className="text-muted">Status</th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default TableHead;
