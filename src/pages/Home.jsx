import React from "react";
import Header from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import Sales from "../components/Sales/Sales";
import CategorySection from "../components/Category/CategorySection";
import BestProducts from "../components/BestProducts/BestProducts";
import MusicCategorySection from "../components/MusicCategory/MusicCategorySection";
import OurProducts from "../components/OurProducts/OurProducts";
import Featured from "../components/Featured/Collections";
import Service from "../components/Services/Service";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Sales />
      <CategorySection />
      <BestProducts />
      <MusicCategorySection />
      <OurProducts />
      <Featured />
      <Service />
    </>
  );
}
