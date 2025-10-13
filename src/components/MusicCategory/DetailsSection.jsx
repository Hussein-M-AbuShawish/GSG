import React from "react";
import Button from "../Button";
import CountdownDisplay from "./CountdownDisplay";
export default function DetailsSection({ title, description, buttonText }) {
  return (
    <div className="details-section">
      <h6>{title}</h6>
      <p className="description">{description}</p>
      <CountdownDisplay />
      <Button buttonTitle={buttonText} />
    </div>
  );
}
