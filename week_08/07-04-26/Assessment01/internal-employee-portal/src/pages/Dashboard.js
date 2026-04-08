// pages/Dashboard.js

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Analytics from "./Analytics";
import Settings from "./Settings";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      <div className="layout">
        
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2> Portal</h2>

          <button onClick={() => setActiveTab("dashboard")}>🏠 Dashboard</button>
          <button onClick={() => setActiveTab("analytics")}>📊 Analytics</button>
          <button onClick={() => setActiveTab("settings")}>⚙ Settings</button>
        </div>

        {/* MAIN CONTENT */}
        <div className="main">
          <Navbar />

          {activeTab === "dashboard" && (
            <>
              <EmployeeForm />
              <EmployeeList />
            </>
          )}

          {activeTab === "analytics" && <Analytics />}
          {activeTab === "settings" && <Settings />}
        </div>
      </div>

      <style>{`
        .layout {
          display:flex;
          height:100vh;
        }

        .sidebar {
          width:220px;
          background:#111827;
          color:white;
          padding:20px;
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .sidebar button {
          background:none;
          border:none;
          color:white;
          padding:10px;
          text-align:left;
          border-radius:8px;
          cursor:pointer;
        }

        .sidebar button:hover {
          background:#1f2937;
        }

        .main {
        flex:1;
        padding:20px;
        background: var(--bg-main);
        transition: 0.3s;
        }
      `}</style>
    </>
  );
}