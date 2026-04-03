import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (!name || !email) return alert("Fill all fields");

    addEmployee({ name, email });
    navigate("/admin");
  };

  return (
    <div className="container">
      <h2>Add Employee</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddEmployee;