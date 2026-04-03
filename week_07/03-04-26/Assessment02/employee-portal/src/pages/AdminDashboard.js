import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminDashboard() {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteEmployee(id);
    toast.success("Employee Deleted");
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h2>Dashboard</h2>

          <div className="cards">
            <div className="card">Total Employees: {employees.length}</div>
          </div>

          <div className="table">
            {employees.length === 0 ? (
              <p>No Employees Found</p>
            ) : (
              employees.map((emp) => (
                <div className="row" key={emp.id}>
                  <span>{emp.name}</span>
                  <span>{emp.email}</span>

                  <div>
                    <button onClick={() => navigate(`/edit/${emp.id}`)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(emp.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;