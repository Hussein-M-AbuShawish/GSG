import React from "react";
import TopSection from "../Sales/TopSection";
import BottomSection from "../Sales/BottomSection";
import Phone from "../../assets/images/Category/CallPhone.png";
import Camera from "../../assets/images/Category/Camera.png";
import Computer from "../../assets/images/Category/Computer.png";
import Gamepad from "../../assets/images/Category/Gamepad.png";
import Headphone from "../../assets/images/Category/Headphone.png";
import SmartWatch from "../../assets/images/Category/SmartWatch.png";
import "./styles/categorySection.css";
import MainCategory from "./MainCategory";
import "./styles/CategoryResponsive.css";

export default function CategorySection() {
  const categoryList = [
    {
      name: "Phones",
      img: Phone,
      isActive: false,
    },
    {
      name: "Computers",
      img: Computer,
      isActive: false,
    },
    {
      name: "Smart Watches",
      img: SmartWatch,
      isActive: false,
    },
    {
      name: "Cameras",
      img: Camera,
      isActive: true,
    },
    {
      name: "Headphones",
      img: Headphone,
      isActive: false,
    },
    {
      name: "Gaming",
      img: Gamepad,
      isActive: false,
    },
  ];

  return (
    <div className="category-section">
      <TopSection sectionTitle="Categories" />
      <BottomSection
        title="Browse By Category"
        showArrows={true}
        showDate={false}
      />
      <MainCategory categoryList={categoryList} />
    </div>
  );
}
