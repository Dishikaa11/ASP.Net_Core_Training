import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">EMS</h2>

      <Link to="/admin">Dashboard</Link>
      <Link to="/add">Add Employee</Link>
    </div>
  );
}

export default Sidebar;