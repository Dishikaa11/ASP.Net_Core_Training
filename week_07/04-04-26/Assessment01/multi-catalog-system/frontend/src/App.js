import React, { useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import Dashboard from "./components/Dashboard";

function App() {
  const catalogData = {
    Tickets: [
      { id: 1, name: "Adult Ticket", price: 500, category: "Tickets" },
      { id: 2, name: "Child Ticket", price: 250, category: "Tickets" },
      { id: 3, name: "Senior Ticket", price: 300, category: "Tickets" },
      { id: 4, name: "VIP Ticket", price: 1000, category: "Tickets" },
    ],
    Donations: [
      { id: 5, name: "Support Donation", price: 100, category: "Donations" },
      { id: 6, name: "Education Donation", price: 250, category: "Donations" },
      { id: 7, name: "Health Donation", price: 500, category: "Donations" },
      { id: 8, name: "Community Donation", price: 1000, category: "Donations" },
    ],
    Products: [
      { id: 9, name: "T-Shirt", price: 700, category: "Products" },
      { id: 10, name: "Cap", price: 300, category: "Products" },
      { id: 11, name: "Mug", price: 250, category: "Products" },
      { id: 12, name: "Notebook", price: 150, category: "Products" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Tickets");
  const [cart, setCart] = useState([]);
  const [billGenerated, setBillGenerated] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    setBillGenerated(false);
  };

  const clearCart = () => {
    setCart([]);
    setBillGenerated(false);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setBillGenerated(false);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    setBillGenerated(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateBill = () => {
    if (cart.length === 0) {
      alert("Pehle items add karo.");
      return;
    }

    const doc = new jsPDF();
    const invoiceNumber = `INV-${Date.now()}`;
    const invoiceDate = new Date().toLocaleString();

    doc.setFontSize(18);
    doc.text("Invoice", 14, 20);

    doc.setFontSize(11);
    doc.text("Multi-Catalog Bill Generator", 14, 30);
    doc.text(`Invoice No: ${invoiceNumber}`, 14, 38);
    doc.text(`Date: ${invoiceDate}`, 14, 46);

    const tableBody = cart.map((item, index) => [
      index + 1,
      item.name,
      item.category,
      item.price,
      item.quantity,
      item.price * item.quantity,
    ]);

    autoTable(doc, {
      startY: 55,
      head: [["S.No", "Item Name", "Category", "Price", "Qty", "Amount"]],
      body: tableBody,
    });

    const finalY = doc.lastAutoTable.finalY || 80;

    doc.setFontSize(12);
    doc.text(`Total Amount: Rs. ${total}`, 14, finalY + 15);

    doc.setFontSize(10);
    doc.text("Thank you for your purchase!", 14, finalY + 28);

    doc.save("invoice.pdf");
    setBillGenerated(true);
  };

  const downloadCSV = () => {
    if (cart.length === 0) {
      alert("Pehle items add karo.");
      return;
    }

    const headers = ["S.No", "Item", "Category", "Price", "Qty", "Amount"];

    const rows = cart.map((item, index) => [
      index + 1,
      item.name,
      item.category,
      item.price,
      item.quantity,
      item.price * item.quantity,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "invoice.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  const printBill = () => {
    window.print();
  };

  return (
    <div className="app-container">
      {showDashboard ? (
        <Dashboard cart={cart} />
      ) : (
        <>
          <h1 className="main-title">Multi-Catalog Bill Generator</h1>

          {/* 🔥 Dashboard Toggle (NEW) */}
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => setShowDashboard(false)}>Billing</button>
            <button
              onClick={() => setShowDashboard(true)}
              style={{ marginLeft: "10px" }}
            >
              Dashboard
            </button>
          </div>

          {/* ✅ SAME UI AS BEFORE */}
          <div className="category-buttons">
            {Object.keys(catalogData).map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <h2 className="section-title">
            {activeCategory} - Available Items
          </h2>

          <div className="items-grid">
            {catalogData[activeCategory].map((item) => (
              <div className="item-card" key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            ))}
          </div>

          <div className="bill-section">
            <h2>Bill Summary</h2>

            {cart.length === 0 ? (
              <p>No items added</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="bill-item" key={item.id}>
                    <div className="bill-left">
                      <span className="bill-name">{item.name}</span>
                      <span className="bill-category">{item.category}</span>
                    </div>

                    <div className="bill-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>

                    <div className="bill-price">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}

                <div className="total-box">Total: ₹{total}</div>
              </>
            )}

            <div className="action-buttons">
              <button onClick={generateBill}>Generate Bill PDF</button>
              <button onClick={downloadCSV}>Download CSV</button>
              <button onClick={printBill}>Print Invoice</button>
              <button onClick={clearCart}>Clear</button>
            </div>

            {billGenerated && <h3>Invoice generated successfully</h3>}
          </div>
        </>
      )}
    </div>
  );
}

export default App;