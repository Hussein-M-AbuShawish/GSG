import React from "react";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import "./styles/MusicCategory.css";
import "./styles/MusicResponsive.css";
export default function MusicCategorySection() {
  return (
    <div className="music-category-section">
      <DetailsSection
        title="Categories"
        description="Enhance Your Music Experience"
        buttonText="Buy Now!"
      />
      <div className="image-container">
        <ImageSection />
      </div>
    </div>
  );
}
