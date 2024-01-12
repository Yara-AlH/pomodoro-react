import React from "react";
import Timer from "./Timer.js";
import SessionTracker from "./SessionTracker.js";
import "./PomoBox.css";

function PomoBox() {
  return (
    <div className="PomoBox">
      <div>
        <Timer />
      </div>
      <div>
        <SessionTracker />
      </div>
    </div>
  );
}

export default PomoBox;
