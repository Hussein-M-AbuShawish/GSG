// src/components/CheckoutComponents/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import "./styles/Checkout.css";

import Visa from "../../assets/images/Checkout/visa.png";
import Mastercard from "../../assets/images/Checkout/mastercard.png";
import Bkash from "../../assets/images/Checkout/bkash.png";
import Otacha from "../../assets/images/Checkout/Otacha.png";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, totalAmount, clearCart } = useCart();
  const { isAuthenticated, user } = useUser();

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: user?.email || "",
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const PaymentsImage = [
    { name: "Bkash", src: Bkash },
    { name: "Visa", src: Visa },
    { name: "Mastercard", src: Mastercard },
    { name: "Otacha", src: Otacha },
  ];

  console.log("User:", user);
  console.log("isAuthenticated:", isAuthenticated);
  // ✅ التحقق من تسجيل الدخول
  if (!isAuthenticated) {
    return (
      <div className="checkout-login-required">
        <div className="message-container">
          <div className="icon">🔒</div>
          <h2>Please login to continue</h2>
          <p>You need to be logged in to complete your purchase</p>
          <button onClick={() => navigate("/login")} className="primary-btn">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // ✅ في حال السلة فارغة
  if (cartItems.length === 0) {
    return (
      <div className="empty-checkout">
        <div className="message-container">
          <div className="icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart before checking out</p>
          <button onClick={() => navigate("/")} className="primary-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert(
      `Order placed successfully!\nPayment: ${paymentMethod}\nTotal: $${totalAmount.toFixed(
        2
      )}`
    );
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <div className="breadcrumb">
        <span>Account</span> / <span>My Account</span> / <span>View Cart</span>{" "}
        /<span className="active">Checkout</span>
      </div>

      <h1 className="checkout-title">Billing Details</h1>

      <div className="checkout-container">
        <BillingForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />

        <OrderSummary
          cartItems={cartItems}
          totalAmount={totalAmount}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          payments={PaymentsImage}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
