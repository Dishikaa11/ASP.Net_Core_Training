// pages/Login.js

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");

  return (
    <>
      <div className="login-container">
        <div className="login-card">

          <h1 className="title"> Welcome Back</h1>
          <p className="subtitle">Employee Portal Login</p>

          <div className="input-group">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Enter your name</label>
          </div>

          <button
            className="login-btn"
            onClick={() => login(name)}
          >
            Login →
          </button>

        </div>
      </div>

      {/* ===== CSS ===== */}
      <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;

          background: linear-gradient(270deg, #667eea, #764ba2, #6a11cb);
          background-size: 600% 600%;
          animation: gradientMove 10s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .login-card {
          width: 350px;
          padding: 40px;
          border-radius: 20px;

          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);

          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          text-align: center;

          transition: 0.3s;
        }

        .login-card:hover {
          transform: translateY(-5px) scale(1.02);
        }

        .title {
          font-size: 26px;
          margin-bottom: 5px;
        }

        .subtitle {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 25px;
        }

        .input-group {
          position: relative;
          margin-bottom: 25px;
        }

        .input-group input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 14px;
        }

        .input-group label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 13px;
          color: gray;
          pointer-events: none;
          transition: 0.3s;
        }

        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          top: -8px;
          left: 10px;
          font-size: 11px;
          background: white;
          padding: 2px 6px;
          border-radius: 5px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          cursor: pointer;

          background: linear-gradient(135deg, #ff7eb3, #ff758c);
          color: white;

          transition: 0.3s;
        }

        .login-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 500px) {
          .login-card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}