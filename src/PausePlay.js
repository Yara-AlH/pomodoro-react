// PausePlay.js
import React, { useState } from "react";
import "./PausePlay.css";

function PausePlay() {
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="PausePlay">
      <i onClick={pauseTimer} className="fa-regular fa-circle-pause fa-2xs"></i>

      <i
        onClick={startTimer}
        className="fa-regular fa-circle-play fa-2xs me-4"
      ></i>
    </div>
  );
}

export default PausePlay;
