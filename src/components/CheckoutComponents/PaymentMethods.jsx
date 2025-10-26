// src/components/CheckoutComponents/PaymentMethods.jsx
import React from "react";
import "./styles/Checkout.css";
export default function PaymentMethods({
  paymentMethod,
  setPaymentMethod,
  payments,
}) {
  return (
    <div className="payment-methods">
      <div className="payment-option bank-option">
        <div className="radio-wrapper">
          <input
            type="radio"
            id="bank"
            name="payment"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="bank">Bank</label>
        </div>
        <div className="payment-images">
          {payments.map((item) => (
            <img
              key={item.name}
              src={item.src}
              alt={item.name}
              className="payment-logo"
              title={item.name}
            />
          ))}
        </div>
      </div>

      <div className="payment-option">
        <input
          type="radio"
          id="cash"
          name="payment"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label htmlFor="cash">Cash on delivery</label>
      </div>
    </div>
  );
}
