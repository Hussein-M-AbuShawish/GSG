import React from "react";
import { ShopButton } from "../Shared/ShopButton";

const ProductCarousel = ({ productName, productDescription, src, image }) => {
  return (
    <div className="product-carousel">
      <div className="left-side">
        <div className="title">
          <img src={image} alt="" />
          <span>{productName}</span>
        </div>
        <p>{productDescription}</p>
        <ShopButton text="Shop Now" showArrow={true} onClick={() => {}} />
      </div>
      <div className="right-side">
        <img src={src} alt={productName} border="0" />
      </div>
    </div>
  );
};
export default ProductCarousel;
