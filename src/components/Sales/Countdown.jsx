import React from "react";
import "../../css/Countdown.css";

export default function CountdownDisplay() {
  return (
    <div className="countdown-container">
      <div className="time-box">
        <p className="label">Days</p>
        <p className="number">03</p>
      </div>
      <span className="dots">:</span>

      <div className="time-box">
        <p className="label">Hours</p>
        <p className="number">23</p>
      </div>
      <span className="dots">:</span>

      <div className="time-box">
        <p className="label">Minutes</p>
        <p className="number">19</p>
      </div>
      <span className="dots">:</span>

      <div className="time-box">
        <p className="label">Seconds</p>
        <p className="number">56</p>
      </div>
    </div>
  );
}
