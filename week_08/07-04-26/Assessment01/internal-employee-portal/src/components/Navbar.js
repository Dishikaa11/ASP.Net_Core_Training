// components/Navbar.js

import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ===== JSX ===== */}
      <nav className="navbar">
        <div className="logo">⚡ Employee Portal</div>

        <div className="nav-right">
          <span className="user">👤 {user?.name}</span>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀ Light"}
          </button>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>

      {/* ===== CSS (SCOPED) ===== */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 30px;
          border-radius: 16px;
          
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);

          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .logo {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .user {
          font-size: 14px;
          opacity: 0.9;
        }

        button {
          border: none;
          padding: 8px 14px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.25s ease;
        }

        .theme-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .logout-btn {
          background: #ff4d4d;
          color: white;
        }

        button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}