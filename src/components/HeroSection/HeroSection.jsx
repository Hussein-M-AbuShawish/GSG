import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
import ProductCarousel from "./ProductCarousel";
import iphone14 from "../../assets/images/iphone14.png";
import "./Styles/HeroSection.css";
import Apple from "../../assets/icons/Apple.png";
import iphone17 from "../../assets/images/iphone17.jpg";
import macbookpro from "../../assets/images/macbookpro.jpeg";
import macpro from "../../assets/images/macpro.jpeg";
import "./Styles/HeroResponsive.css";
export const HeroSection = () => {
  const [activeIndex, SetActiveIndex] = useState(0);
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
    {
      image: Apple,
      productName: "iPhone 17 Pro Max",
      productDescription: "Up to 5% off Voucher",
      src: iphone17,
    },
    {
      image: Apple,
      productName: "MacBook Pro",
      productDescription: "Up to 7% off Voucher",
      src: macbookpro,
    },
    {
      image: Apple,
      productName: "MacBook Pro",
      productDescription: "Up to 15% off Voucher",
      src: macpro,
    },
  ];

  let currentProduct = productDetails[activeIndex];
  return (
    <div className="hero-section">
      <div className="list-container">
        <CategoryList items={heroItems} />
      </div>
      <hr />
      <div className="product-container">
        <ProductCarousel
          key={activeIndex}
          productName={currentProduct.productName}
          productDescription={currentProduct.productDescription}
          src={currentProduct.src}
          image={currentProduct.image}
        />

        <div className="dots-group">
          {productDetails.map((_, index) => (
            <span
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => SetActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
