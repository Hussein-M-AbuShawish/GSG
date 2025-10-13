import React from "react";

export default function ColumnLinks({ title, links }) {
  return (
    <div className="column-links">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
