import React from "react";
export const TopHeader = ({ languages }) => (
  <div className="top-header">
    <div className="container">
      <p>
        Summer sale for all swim suits and free express delivery - off 50%!{" "}
        <a href="">ShopNow</a>
      </p>
      <div className="languages">
        <select name="languages" id="languages">
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);
