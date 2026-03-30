import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}

      <h3>Total = ${total}</h3>
    </div>
  );
}

export default Cart;