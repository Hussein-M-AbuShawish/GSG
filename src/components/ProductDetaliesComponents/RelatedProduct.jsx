// RelatedProduct.jsx
import React from "react";
import ProductCard from "../Sales/ProductCard";
import TopSection from "../Sales/TopSection";
import Laptop from "../../assets/images/Products/Laptop.png";
import Keyboard from "../../assets/images/Products/Keyboard.png";
import Gammaxx from "../../assets/images/Products/Gammaxx.png";
import Pace_arm from "../../assets/images/Products/Pace_arm.png";
import Heart from "../../assets/images/Products/Heart.png";
import View from "../../assets/images/Products/View.png";
import "../../components/BestProducts/styles/BestProducts.css";
const RelatedProduct = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      salePrice: "$120",
      price: "$160",
      discountPercent: "-40%",
      image: Pace_arm,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      salePrice: "$960",
      price: "$1160",
      discountPercent: "-35%",
      image: Keyboard,
      iconHeart: Heart,
      iconView: View,
      rating: 4,
      reviews: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      salePrice: "$370",
      price: "$400",
      discountPercent: "-30%",
      image: Laptop,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 99,
    },
    {
      id: 4,
      name: "RGB liquid CPU Cooler",
      salePrice: "$160",
      price: "$170",
      image: Gammaxx,
      iconHeart: Heart,
      iconView: View,
      rating: 4.5,
      reviews: 65,
    },
  ];

  return (
    <div className="products-container">
      <TopSection sectionTitle="Related Item" />

      <div className="products-flex">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default RelatedProduct;
