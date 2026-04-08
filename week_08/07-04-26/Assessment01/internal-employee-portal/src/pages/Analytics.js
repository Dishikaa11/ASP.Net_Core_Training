// pages/Analytics.js

import React from "react";
import { useEmployee } from "../context/EmployeeContext";

export default function Analytics() {
  const { employees } = useEmployee();

  return (
    <>
      <div className="card">
        <h2> Analytics Dashboard</h2>

        <div className="stats">
          <div className="box">
            <h3>{employees.length}</h3>
            <p>Total Employees</p>
          </div>

          <div className="box">
            <h3>Active</h3>
            <p>Status</p>
          </div>
        </div>
      </div>

      <style>{`
        .card {
          padding:25px;
          border-radius:15px;
          background:rgba(255,255,255,0.1);
          backdrop-filter:blur(10px);
        }

        .stats {
          display:flex;
          gap:20px;
          margin-top:20px;
        }

        .box {
          flex:1;
          padding:20px;
          border-radius:10px;
          background:rgba(0,0,0,0.2);
          text-align:center;
        }
      `}</style>
    </>
  );
}