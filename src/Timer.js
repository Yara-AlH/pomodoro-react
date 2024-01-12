import React from "react";
import "./Timer.css";

function Timer(props) {
  const timerMinutes =
    props.time.minutes < 10 ? `0${props.time.minutes}` : props.time.minutes;
  const timerSeconds =
    props.time.seconds < 10 ? `0${props.time.seconds}` : props.time.seconds;

  return (
    <div className="timer">
      {timerMinutes}:{timerSeconds}
      <div className="message">{props.time.mode}</div>
    </div>
  );
}

export default Timer;
