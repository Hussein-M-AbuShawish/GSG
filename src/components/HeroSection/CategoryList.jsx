import React from "react";

export const CategoryList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          {item}
          {/* ✅ السهم يظهر فقط لأول عنصرين */}
          {index < 2 && <span className="arrow-category">›</span>}
        </li>
      ))}
    </ul>
  );
};
