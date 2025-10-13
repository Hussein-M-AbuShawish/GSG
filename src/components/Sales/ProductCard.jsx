import React from "react";
import "./Styles/ProductCard.css";

export default function ProductCard({ products }) {
  return products.map((product) => (
    <div className="product">
      <div className="product-image">
        {product.discountPercent && (
          <div className="sale-badge">{product.discountPercent}</div>
        )}
        {product.isNew && <div className="new-badge">New</div>}
        <img src={product.image} alt={product.name} />

        <div className="icons">
          <img src={product.iconHeart} alt="Heart" />
          <img src={product.iconView} alt="View" />
        </div>

        <button className="add-to-cart">Add To Cart</button>
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.salePrice} <del>{product.price}</del>
        </p>
        <div className="evaluation">
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="star">
                {i < Math.floor(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="reviews">({product.reviews})</span>
        </div>
        {/* ✅ عرض الألوان */}
        {product.colors && product.colors.length > 0 && (
          <div className="color-options">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  ));
}
