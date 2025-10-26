import React from "react";
import { TopHeader } from "./TopHeader";
import { BottomHeader } from "./BottomHeader";
import Search from "../../assets/icons/Search.png";
import Heart from "../../assets/icons/Heart.png";
import Cart from "../../assets/icons/Cart.png";
import User from "../../assets/icons/user.png";
import "./Styles/Header.css";
import "./Styles/HeaderResponsive.css";

export default function Header() {
  const languages = ["English", "Arabic", "French"];
  const Links = [
    { title: "Home", isActive: true },
    { title: "Contact", isActive: false },
    { title: "About", isActive: false },
    { title: "SignUp", isActive: false },
  ];
  const Icons = [
    { name: "search", src: Search },
    { name: "heart", src: Heart },
    { name: "cart", src: Cart },
    { name: "User", src: User },
  ];

  return (
    <header>
      <TopHeader languages={languages} />
      <BottomHeader Links={Links} Icons={Icons} />
    </header>
  );
}
