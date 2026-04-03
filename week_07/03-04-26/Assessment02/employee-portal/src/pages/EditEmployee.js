import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

function EditEmployee() {
  const { id } = useParams();
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const emp = employees.find((e) => e.id === Number(id));

  const [name, setName] = useState(emp?.name || "");
  const [email, setEmail] = useState(emp?.email || "");

  const handleUpdate = () => {
    updateEmployee({ id: Number(id), name, email });
    navigate("/admin");
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditEmployee;