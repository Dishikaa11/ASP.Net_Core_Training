import React from "react";
import "./Dashboard.css";

const Dashboard = ({ cart }) => {
  const totalBills = cart.length;

  const revenue = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = Math.round(revenue * 0.1); // demo
  const discount = 0;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Daily Sales Summary</h2>

      <div className="dashboard-cards">
        <div className="card">
          <p>Total Bills</p>
          <h3>{totalBills}</h3>
        </div>

        <div className="card green">
          <p>Total Revenue</p>
          <h3>₹{revenue}</h3>
        </div>

        <div className="card yellow">
          <p>Tax Collected</p>
          <h3>₹{tax}</h3>
        </div>

        <div className="card purple">
          <p>Total Discounts</p>
          <h3>₹{discount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;