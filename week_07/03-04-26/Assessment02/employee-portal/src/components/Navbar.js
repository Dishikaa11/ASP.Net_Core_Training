import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h3>Welcome, {user?.role}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;