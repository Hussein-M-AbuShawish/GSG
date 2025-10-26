// src/components/CheckoutComponents/OrderSummary.jsx
import React from "react";
import PaymentMethods from "./PaymentMethods";

export default function OrderSummary({
  cartItems,
  totalAmount,
  paymentMethod,
  setPaymentMethod,
  payments,
  onSubmit,
}) {
  return (
    <div className="order-summary">
      <h3>Your Order</h3>

      <div className="order-items">
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <div className="item-info">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="order-totals">
        <div className="total-row">
          <span>Subtotal:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Shipping:</span>
          <span className="free-badge">Free</span>
        </div>
        <div className="total-row final">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <PaymentMethods
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        payments={payments}
      />

      <div className="coupon-input">
        <input type="text" placeholder="Coupon Code" />
        <button className="apply-btn">Apply Coupon</button>
      </div>

      <button className="place-order-btn" onClick={onSubmit}>
        Place Order
      </button>
    </div>
  );
}
