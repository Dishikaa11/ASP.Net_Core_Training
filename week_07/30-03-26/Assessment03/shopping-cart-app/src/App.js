import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "React T-Shirt", price: 25 },
    { id: 2, name: "Shoes", price: 50 },
    { id: 3, name: "Cap", price: 15 },
  ];

  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    );
  };

  return (
    <div className="app">
      <h1>Shopping Cart</h1>

      <ProductList products={products} addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;