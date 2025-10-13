import React from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import MainSection from "./MainSection";
import Button from "../Button";
import "./Styles/Sales.css";
import "./Styles/SalesResponsive.css";
const Sales = () => {
  return (
    <div className="sales-section">
      <TopSection sectionTitle="Today’s" />
      <BottomSection
        title="Flash Sales"
        showArrows={true}
        showDate={true}
        showButton={false}
      />
      <MainSection />
      <Button buttonTitle="View All Products" />
    </div>
  );
};

export default Sales;
