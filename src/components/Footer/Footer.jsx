import React from "react";
import { BottomFooter } from "./BottomFooter";
import { TopFooter } from "./TopFooter";
import "./style/footer.css";
import "./style/FooterResponsive.css";
export default function Footer() {
  return (
    <footer>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
