import React from "react";
import ProductCard from "../Sales/ProductCard";
import BottomSection from "../Sales/BottomSection";
import TopSection from "../Sales/TopSection";
import Copa_Sense from "../../assets/images/OurProducts/Copa_Sense.png";
import Curology from "../../assets/images/OurProducts/curology.jpg";
import SatinJacket from "../../assets/images/OurProducts/satin-jacket.png";
import Eos from "../../assets/images/OurProducts/eos.png";
import Frame from "../../assets/images/OurProducts/Frame.png";
import GP11 from "../../assets/images/OurProducts/GP11_PRD3.png";
import Ideapad from "../../assets/images/OurProducts/ideapad-gaming.png";
import RdoeXxtrL from "../../assets/images/OurProducts/RdoeXxtrL.png";
import Heart from "../../assets/images/Products/Heart.png";
import View from "../../assets/images/Products/View.png";
import Button from "../Button";
import "./styles/OurProducts.css";
const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      image: RdoeXxtrL,
      iconHeart: Heart,
      iconView: View,
      rating: 3,
      reviews: 35,
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      image: Eos,
      iconHeart: Heart,
      iconView: View,
      rating: 4,
      reviews: 95,
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",

      image: Ideapad,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 325,
    },
    {
      id: 4,
      name: "Curology Product Set ",
      price: "$500",
      image: Curology,
      iconHeart: Heart,
      iconView: View,
      rating: 4,
      reviews: 145,
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      image: Frame,
      iconHeart: Heart,
      iconView: View,
      isNew: true,
      rating: 5,
      reviews: 65,
      colors: ["#184A48", "#DB4444"],
    },
    {
      id: 6,
      name: "GP11 Shooter USB Gamepad",

      price: "$660",
      image: Copa_Sense,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 55,
      colors: ["#000", "#DB4444"],
    },
    {
      id: 7,
      name: "Quilted Satin Jacket",
      price: "$660",
      image: GP11,
      iconHeart: Heart,
      iconView: View,
      isNew: true,
      rating: 4.5,
      reviews: 55,
      colors: ["#EEFF61", "#DB4444"],
    },
    {
      id: 8,
      name: "Small BookSelf",
      price: "$360",
      image: SatinJacket,
      iconHeart: Heart,
      iconView: View,
      rating: 5,
      reviews: 65,
      colors: ["#FB1314", "#DB4444"],
    },
  ];
  return (
    <div className="products-container">
      <TopSection sectionTitle="Our Products" />
      <BottomSection
        title="Explore Our Products"
        showArrows={true}
        showButton={false}
      />
      <div className="products-flex products-wrap">
        <ProductCard products={products} />
      </div>
      <Button buttonTitle="View All Products" />
    </div>
  );
};
export default OurProducts;
