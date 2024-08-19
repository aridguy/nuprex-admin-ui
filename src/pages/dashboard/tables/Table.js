import React from "react";

const Table = () => {
  return (
    <div>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <tbody className="bg-white text-muted">
          <tr>
            <td className="text-muted">Pickup</td>
            <td className="text-muted">#093738376</td>
            <td className="text-muted">01/01/24</td>
            <td className="text-muted">9:35 am</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">
              {" "}
              <span className="badge bg-success">Success</span>
            </td>
          </tr>
          <tr>
            <td className="text-muted">Pickup</td>
            <td className="text-muted">#093738376</td>
            <td className="text-muted">01/01/24</td>
            <td className="text-muted">9:35 am</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">
              {" "}
              <span className="badge bg-warning">Pending</span>
            </td>
          </tr>
          <tr>
            <td className="text-muted">Pickup</td>
            <td className="text-muted">#093738376</td>
            <td className="text-muted">01/01/24</td>
            <td className="text-muted">9:35 am</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">
              {" "}
              <span className="badge bg-danger">Cancelled</span>
            </td>
          </tr>
          <tr>
            <td className="text-muted">Pickup</td>
            <td className="text-muted">#093738376</td>
            <td className="text-muted">01/01/24</td>
            <td className="text-muted">9:35 am</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">Abule Egba....</td>
            <td className="text-muted">
              {" "}
              <span className="badge bg-warning">Pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
