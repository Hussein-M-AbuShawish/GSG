import React from "react";
import { CategoryList } from "./CategoryList";
import ProductCarousel from "./ProductCarousel";
import iphone14 from "../../assets/images/iphone14.png";
import "./Styles/HeroSection.css";
import Apple from "../../assets/icons/Apple.png";
import "./Styles/HeroResponsive.css";
export const HeroSection = () => {
  const heroItems = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  const productDetails = [
    {
      image: Apple,
      productName: "iPhone 14 Series",
      productDescription: "Up to 10% off Voucher",
      src: iphone14,
    },
  ];

  return (
    <div className="hero-section">
      <div className="list-container">
        <CategoryList items={heroItems} />
      </div>
      <hr />
      <div className="product-container">
        {productDetails.map((product, index) => (
          <ProductCarousel
            key={index}
            productName={product.productName}
            productDescription={product.productDescription}
            src={product.src}
            image={product.image}
          />
        ))}
        <div className="dots-group">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};
