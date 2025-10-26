import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Styles/ProductCard.css";

export default function ProductCard({ products }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // منع الانتقال للصفحة عند الضغط على الزر

    addToCart({
      id: product.id,
      title: product.name,
      price: parseFloat(
        product.salePrice?.replace("$", "") || product.price?.replace("$", "")
      ),
      image: product.image,
    });

    // إظهار إشعار
    alert(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return products.map((product) => (
    <div
      className="product"
      key={product.id}
      onClick={() => handleProductClick(product.id)}
      style={{ cursor: "pointer" }}
    >
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

        <button
          className="add-to-cart"
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add To Cart
        </button>
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.salePrice} {product.price && <del>{product.price}</del>}
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

        {/* عرض الألوان */}
        {product.colors && product.colors.length > 0 && (
          <div className="color-options">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="color-circle"
                style={{ backgroundColor: color }}
                onClick={(e) => e.stopPropagation()}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  ));
}
