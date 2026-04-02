// pages/Register.js
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Registered Successfully 🎉");
    navigate("/login");
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}