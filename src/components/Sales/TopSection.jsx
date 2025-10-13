import React from "react";

export default function TopSection({ sectionTitle }) {
  return (
    <div className="top-section">
      <div className="section-indicator"></div>
      <h2 className="section-title">{sectionTitle}</h2>
    </div>
  );
}
