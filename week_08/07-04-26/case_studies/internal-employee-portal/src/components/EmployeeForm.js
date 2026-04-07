import React, { useState } from "react";
import { useEmployee } from "../context/EmployeeContext";

export default function EmployeeForm() {
  const { addEmployee } = useEmployee();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <div className="card">
        <h3>Add Employee</h3>
        <input placeholder="Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Role" onChange={e => setRole(e.target.value)} />
        <button onClick={() => addEmployee({ name, role })}>Add</button>
      </div>

      <style>{`
        .card {
          margin-top:20px;
          padding:20px;
          border-radius:15px;
          background:rgba(255,255,255,0.08);
        }

        input {
          display:block;
          margin:8px 0;
          padding:10px;
          border-radius:8px;
          border:none;
        }
      `}</style>
    </>
  );
}