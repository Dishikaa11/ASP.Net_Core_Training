import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("All fields required");
      return;
    }

    const success = login(email, password);

    if (success) {
      toast.success("Login Successful 🚀");

      if (email === "admin@company.com") navigate("/admin");
      else navigate("/employee");
    } else {
      toast.error("Invalid Credentials ❌");
    }
  };

  return (
    <>
      {/* ✅ CSS INSIDE SAME FILE */}
      <style>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        .login-container {
          display: flex;
          height: 100vh;
        }

        /* LEFT SIDE */
        .login-left {
          width: 40%;
          background: #0a2a5e;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px;
        }

        .title {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .login-left input {
          margin: 15px 0;
          padding: 12px;
          border: none;
          border-bottom: 2px solid #4da6ff;
          background: transparent;
          color: white;
          outline: none;
        }

        .login-left input::placeholder {
          color: #ccc;
        }

        .login-left button {
          margin-top: 25px;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #1e90ff;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-left button:hover {
          background: #187bcd;
        }

        /* RIGHT SIDE */
        .login-right {
          width: 60%;
          background: linear-gradient(135deg, #1e90ff, #0a2a5e);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .illustration {
          text-align: center;
        }

        .illustration h2 {
          font-size: 32px;
        }

        .illustration p {
          margin-top: 10px;
          opacity: 0.8;
        }
      `}</style>

      {/* UI */}
      <div className="login-container">
        {/* LEFT */}
        <div className="login-left">
          <h1 className="title">Login</h1>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <div className="illustration">
            <h2>Welcome Back 👋</h2>
            <p>Access your employee portal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;