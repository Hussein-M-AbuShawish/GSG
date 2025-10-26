import React from "react";
import RelatedProduct from "../components/ProductDetaliesComponents/RelatedProduct";
import ProductInformation from "../components/ProductDetaliesComponents/ProductInformation";
export default function ProductDetails() {
  return (
    <div>
      <ProductInformation />
      <RelatedProduct />
    </div>
  );
}
