import React from "react";
import ProductCard from "../Sales/ProductCard";
import BottomSection from "../Sales/BottomSection";
import TopSection from "../Sales/TopSection";
import Sam from "../../assets/images/Products/Sam.png";
import Bag from "../../assets/images/Products/Bag.png";
import Coat from "../../assets/images/Products/Coat.png";
import Gammaxx from "../../assets/images/Products/Gammaxx.png";
import Heart from "../../assets/images/Products/Heart.png";
import View from "../../assets/images/Products/View.png";
import "./styles/BestProducts.css";
import "./styles/BestResponsive.css";
const BestProducts = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      salePrice: "$260",
      price: "$360",
      image: Coat,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      salePrice: "$960",
      price: "$1160",
      image: Bag,
      iconHeart: Heart,
      iconView: View,
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      salePrice: "$160",
      price: "$170",

      image: Gammaxx,
      iconHeart: Heart,
      iconView: View,
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: "$360",
      image: Sam,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 65,
    },
  ];
  return (
    <div className="products-container">
      <TopSection sectionTitle="This Month" />
      <BottomSection
        title="Best Selling Products"
        showArrows={false}
        showButton={true}
        buttonTitle="View All"
      />
      <div className="products-flex">
        <ProductCard products={products} />
      </div>
    </div>
  );
};
export default BestProducts;
