import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartBottom({ totalAmount }) {
  const navigate = useNavigate();

  return (
    <div className="cart-bottom">
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button className="apply-coupon">Apply Coupon</button>
      </div>

      <div className="cart-total">
        <h3>Cart Total</h3>
        <div className="total-row">
          <span>Subtotal:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total-row final">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
