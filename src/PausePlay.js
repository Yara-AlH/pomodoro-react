import React from "react";
import "./PausePlay.css";

function PausePlay(props) {
  let setIsRunning = props.running;

  const startTimer = () => {
    setIsRunning(false);
  };

  const pauseTimer = () => {
    setIsRunning(true);
  };

  return (
    <div className="PausePlay">
      <i
        onClick={pauseTimer}
        className="pp fa-regular fa-circle-play fa-2xs me-4"
      ></i>

      <i
        onClick={startTimer}
        className="pp fa-regular fa-circle-pause fa-2xs "
      ></i>
    </div>
  );
}

export default PausePlay;
