import React from "react";
import Vector from "../../assets/icons/Vector.png";

export const ShopButton = ({ text, onClick, showArrow = true }) => {
  return (
    <div
      className="shop-button-container"
      style={{ display: "flex", alignItems: "center" }}
    >
      <button className="shop-button" onClick={onClick}>
        {text}
      </button>
      {showArrow && (
        <img
          src={Vector}
          alt="arrow"
          style={{ marginLeft: "10px", width: "10px", height: "10px" }}
          className="arrow-icon"
        />
      )}
    </div>
  );
};
