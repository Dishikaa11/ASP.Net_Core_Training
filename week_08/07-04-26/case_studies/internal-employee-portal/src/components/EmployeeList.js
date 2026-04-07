import React from "react";
import { useEmployee } from "../context/EmployeeContext";

export default function EmployeeList() {
  const { employees, deleteEmployee } = useEmployee();

  return (
    <>
      <div className="card">
        <h3>Employees</h3>

        {employees.map(emp => (
          <div className="emp" key={emp.id}>
            <span>{emp.name} - {emp.role}</span>
            <button onClick={() => deleteEmployee(emp.id)}>❌</button>
          </div>
        ))}
      </div>

      <style>{`
        .emp {
          display:flex;
          justify-content:space-between;
          margin-top:10px;
          padding:10px;
          border-radius:10px;
          background:rgba(255,255,255,0.05);
        }
      `}</style>
    </>
  );
}