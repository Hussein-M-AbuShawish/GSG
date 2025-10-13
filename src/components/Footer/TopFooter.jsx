import React from "react";
import ColumnLinks from "./ColumnLinks";
import QrCode from "../../assets/images/qr-code.png";
import PlayStore from "../../assets/images/play-store.png";
import AppStore from "../../assets/images/app-store.png";
import Instagram from "../../assets/icons/Instagram.png";
import Linkedin from "../../assets/icons/Linkedin.png";
import Facebook from "../../assets/icons/Facebook.png";
import Twitter from "../../assets/icons/Twitter.png";
import Submit from "../../assets/icons/Submit.png";
export const TopFooter = () => {
  const columnsData = [
    {
      title: "Exclusive",
      links: [
        "Subscribe",
        "Get 10% off your first order",
        <div className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <img src={Submit} alt="No Photo" />
        </div>,
      ],
    },
    {
      title: "Support",
      links: [
        "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
    },
    {
      title: "Account",
      links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
    },
    {
      title: "Quick Links",
      links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
    },
    {
      title: "Download App",
      links: [
        <span>Save $3 with App New User Only</span>,
        <div className="download-app">
          <img src={QrCode} alt="qr-code" />
          <div className="app-links">
            <img src={PlayStore} alt="play-store" />
            <img src={AppStore} alt="app-store" />
          </div>
        </div>,
        <div className="social-icons">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedin} alt="linkedin" />
        </div>,
      ],
    },
  ];
  return (
    <div className="top-footer">
      {columnsData.map((column, index) => (
        <div className="column" key={index}>
          <h3>{column.title}</h3>
          <ul>
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
