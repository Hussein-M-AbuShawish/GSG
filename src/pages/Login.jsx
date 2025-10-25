// Login.jsx
import React from "react";
import LeftSideLogin from "../components/LoginComponents/LeftSideLogin";
import RightSideLogin from "../components/LoginComponents/RightSideLogin";
import "../components/LoginComponents/Styles/login.css";

export default function Login() {
  return (
    <div className="login-page">
      <LeftSideLogin />
      <RightSideLogin />
    </div>
  );
}
