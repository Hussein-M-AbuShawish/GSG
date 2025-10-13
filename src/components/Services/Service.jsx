import React from "react";
import Delivery from "../../assets/icons/icon-delivery.png";
import Secure from "../../assets/icons/icon-secure.png";
import Customer from "../../assets/icons/Icon-Customer.png";
import MainContent from "./MainContent";
import "./style/service.css";
export default function Service() {
  const services = [
    {
      image: Delivery,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      image: Customer,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      image: Secure,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <div>
      <MainContent services={services} />
    </div>
  );
}
