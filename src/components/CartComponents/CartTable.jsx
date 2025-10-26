import React from "react";

export default function CartTable({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="cart-table">
      <div className="cart-header">
        <div className="header-item">Product</div>
        <div className="header-item">Price</div>
        <div className="header-item">Quantity</div>
        <div className="header-item">Subtotal</div>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="product-info">
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
            <img src={item.image} alt={item.title} />
            <span className="product-name">{item.title}</span>
          </div>

          <div className="product-price">${item.price.toFixed(2)}</div>

          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <div className="product-subtotal">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}
