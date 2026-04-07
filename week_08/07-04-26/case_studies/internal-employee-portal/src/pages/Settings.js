// pages/Settings.js

import React from "react";

export default function Settings() {
  return (
    <>
      <div className="card">
        <h2>⚙ Settings</h2>

        <div className="item">
          <label>Notifications</label>
          <input type="checkbox" />
        </div>

        <div className="item">
          <label>Auto Sync</label>
          <input type="checkbox" />
        </div>
      </div>

      <style>{`
        .card {
          padding:25px;
          border-radius:15px;
          background:rgba(255,255,255,0.1);
          backdrop-filter:blur(10px);
        }

        .item {
          display:flex;
          justify-content:space-between;
          margin-top:15px;
        }
      `}</style>
    </>
  );
}