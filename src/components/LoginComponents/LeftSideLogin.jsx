// LeftSideLogin.jsx
import React from "react";
import LoginImage from "../../assets/images/Login/loginImage.jpg";
import "./Styles/login.css";

export default function LeftSideLogin() {
  return (
    <div className="login-left" aria-hidden="true">
      <img src={LoginImage} alt="صورة تسجيل الدخول" />
    </div>
  );
}
