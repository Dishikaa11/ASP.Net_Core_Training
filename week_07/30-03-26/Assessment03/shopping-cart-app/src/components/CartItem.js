import React from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <span>
        {item.name} x{item.quantity} = $
        {item.price * item.quantity}
      </span>

      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>

      <button onClick={() => removeFromCart(item.id)}>❌</button>
    </div>
  );
}

export default CartItem;