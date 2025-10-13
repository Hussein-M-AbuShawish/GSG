import React from "react";
import "../../css/Countdown.css";

export default function CountdownDisplay() {
  return (
    <div className="countdown-container">
      <div className="time-box">
        <p className="number">03</p>
        <p className="label">Days</p>
      </div>

      <div className="time-box">
        <p className="number">23</p>
        <p className="label">Hours</p>
      </div>

      <div className="time-box">
        <p className="number">19</p>
        <p className="label">Minutes</p>
      </div>

      <div className="time-box">
        <p className="number">56</p>
        <p className="label">Seconds</p>
      </div>
    </div>
  );
}
