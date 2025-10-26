import React from "react";
import { Link } from "react-router-dom";

export default function CartBreadcrumb() {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link> / <span className="active">Cart</span>
    </div>
  );
}
