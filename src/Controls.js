import React from "react";
import "./Controls.css";
import sound from "./sounds/sound.wav";

function Controls(props) {
  let setIsRunning = props.running;
  let reset = props.resetPomo;

  const startTimer = () => {
    setIsRunning(false);
  };

  const pauseTimer = () => {
    setIsRunning(true);
  };

  const playSound = () => {
    new Audio(sound).play();
  };

  return (
    <div className="controls">
      <i
        onClick={() => {
          startTimer();
          playSound();
        }}
        className="pp fa-solid fa-pause fa-2xs me-4 "
      ></i>

      <i
        onClick={() => {
          pauseTimer();
          playSound();
        }}
        className="pp fa-solid fa-play fa-2xs me-3"
      ></i>

      <i
        onClick={reset}
        className="reset-button fa-solid  fa-arrow-rotate-right fa-2xs "
      ></i>
    </div>
  );
}

export default Controls;
