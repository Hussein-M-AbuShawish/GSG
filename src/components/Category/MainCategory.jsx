import React from "react";

export default function MainCategory({ categoryList }) {
  return (
    <div className="group-category">
      {categoryList.map((category, index) => (
        <a href="">
          <div className="main-category " key={index}>
            <div
              key={index}
              className={`card category-item ${
                category.isActive ? "active" : ""
              }`}
              style={{
                backgroundColor: category.isActive ? "#DB4444" : "white",
              }}
            >
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
