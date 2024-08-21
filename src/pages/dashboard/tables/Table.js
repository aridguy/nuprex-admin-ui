import React from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const Navigate = useNavigate("/");
  return (
    <div>
      <table
        className="table align-middle mb-0 bg-white"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <tbody className="bg-white text-muted">
          <tr className="cursor" onClick={() => Navigate("/workbench")}>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
