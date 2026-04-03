import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { EmployeeContext } from "../context/EmployeeContext";

function EmployeeDashboard() {
  const { user } = useContext(AuthContext);
  const { employees } = useContext(EmployeeContext);

  const myData = employees.find((e) => e.email === user.email);

  return (
    <div className="container">
      <h2>My Profile</h2>

      {myData ? (
        <div className="card">
          <h3>{myData.name}</h3>
          <p>{myData.email}</p>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}

export default EmployeeDashboard;