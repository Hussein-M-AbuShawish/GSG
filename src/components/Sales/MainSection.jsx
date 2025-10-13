import React from "react";
import ProductCard from "./ProductCard";
import chair from "../../assets/images/Products/Chair.png";
import Keyboard from "../../assets/images/Products/Keyboard.png";
import Half_a_chair from "../../assets/images/Products/Half_a_chair.png";
import Laptop from "../../assets/images/Products/Laptop.png";
import Pace_arm from "../../assets/images/Products/Pace_arm.png";
import Heart from "../../assets/images/Products/Heart.png";
import View from "../../assets/images/Products/View.png";

export default function MainSection() {
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
      name: "S-Series Comfort Chair ",
      salePrice: "$375",
      price: "$400",
      discountPercent: "-25%",
      image: chair,
      iconHeart: Heart,
      iconView: View,
      rating: 4.5,
      reviews: 99,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair ",
      salePrice: "$375",
      price: "$400",
      discountPercent: "-25%",
      image: Half_a_chair,
      iconHeart: Heart,
      iconView: View,
      rating: 4.5,
      reviews: 99,
    },
  ];
  return (
    <div className="main-section">
      <div className="container">
        <div className="products-flex">
          <ProductCard key={products.id} products={products} />
        </div>
      </div>
    </div>
  );
}
