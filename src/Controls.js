import React from "react";
import "./Controls.css";

function Controls(props) {
  let setIsRunning = props.running;
  let reset = props.resetPomo;

  const startTimer = () => {
    setIsRunning(false);
  };

  const pauseTimer = () => {
    setIsRunning(true);
  };

  return (
    <div className="controls">
      <i onClick={startTimer} className="pp fa-solid fa-pause fa-2xs me-4 "></i>

      <i onClick={pauseTimer} className="pp fa-solid fa-play fa-2xs me-3"></i>

      <i
        onClick={reset}
        className="reset-button fa-solid  fa-arrow-rotate-right fa-2xs "
      ></i>
    </div>
  );
}

export default Controls;
