import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [mode, setMode] = useState("Focus");

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!setDisplayMessage);
          setMode("Rest");
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes, displayMessage]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="timer">
      {timerMinutes}:{timerSeconds}
      <div className="message">{mode}</div>
    </div>
  );
}

export default Timer;
