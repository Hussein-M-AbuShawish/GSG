import React from "react";
import CountdownDisplay from "./Countdown";
import Arrows from "./Arrows";
import Button from "../Button";

export default function BottomSection({
  title,
  showArrows,
  showDate,
  showButton,
  buttonTitle,
}) {
  return (
    <div className="bottom-section">
      <div className="center-group">
        <div className="left-side-title">
          <h2 className="title">{title}</h2>
        </div>
        {showDate && (
          <div className="center-sidex">
            <CountdownDisplay />
          </div>
        )}
      </div>
      <div className="right-side-arrows">
        {showArrows && <Arrows />}
        {showButton && <Button buttonTitle="View ALl" />}
      </div>
    </div>
  );
}
