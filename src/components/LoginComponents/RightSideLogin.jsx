import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useUser } from "../../context/UserContext"; // ✅ استيراد الـ context
import "./Styles/login.css";

export default function RightSideLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser(); // ✅ استدعاء دالة تسجيل الدخول من الـ context

  function handleSubmit(e) {
    e.preventDefault();

    // بيانات المستخدم — يمكنك تعديلها لاحقًا بعد إضافة API حقيقية
    const userData = {
      name: email.split("@")[0], // اسم مؤقت مستخرج من الإيميل
      email,
    };

    // ✅ تسجيل المستخدم في السياق + تخزينه في localStorage
    login(userData);

    // ✅ الانتقال للصفحة الرئيسية أو Checkout
    navigate("/");
  }

  return (
    <div className="login-right" aria-labelledby="login-heading">
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            id="email"
            type="email"
            placeholder="Email or Phone Number"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="buttons">
          <Button buttonTitle="Login" />
          <a href="#" onClick={(e) => e.preventDefault()}>
            Forget Password?
          </a>
        </div>
      </form>
    </div>
  );
}
