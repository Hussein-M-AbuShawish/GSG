import React from "react";
import { Link } from "react-router-dom";

export default function CartActions() {
  return (
    <div className="cart-actions">
      <Link to="/" className="return-btn">
        Return To Shop
      </Link>
      <button className="update-cart-btn">Update Cart</button>
    </div>
  );
}
