// pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <label>Name:</label><br/>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label>Email:</label><br/>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}