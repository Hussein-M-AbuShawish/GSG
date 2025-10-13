import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSection";
import Sales from "./components/Sales/Sales";
import CategorySection from "./components/Category/CategorySection";
import BestProducts from "./components/BestProducts/BestProducts";
import OurProducts from "./components/OurProducts/OurProducts";
import MusicCategorySection from "./components/MusicCategory/MusicCategorySection";
import Featured from "./components/Featured/Collections";
import Service from "./components/Services/Service";
import "./App.css";
export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Sales />
      <CategorySection />
      <BestProducts />
      <MusicCategorySection />
      <OurProducts />
      <Featured />
      <Service />
      <Footer />
    </div>
  );
}
