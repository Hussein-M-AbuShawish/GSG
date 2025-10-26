import React from "react";
import { useCart } from "../../context/CartContext";
import CartBreadcrumb from "./CartBreadcrumb";
import CartTable from "./CartTable";
import CartActions from "./CartActions";
import CartBottom from "./CartBottom";
import "./styles/Cart.css";
export default function CartPage() {
  const {
    cartItems,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <CartBreadcrumb />
      <CartTable
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
      <CartActions />
      <CartBottom totalAmount={totalAmount} />
    </div>
  );
}
