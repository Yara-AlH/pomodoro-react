import React, { useState, useEffect } from "react";
import Timer from "./Timer.js";
import SessionTracker from "./SessionTracker.js";
import PausePlay from "./PausePlay.js";
import Music from "./Music.js";
import "./PomoBox.css";

function PomoBox() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState("Focus");
  const [inSession, setInSession] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [currentBreakNumber, setCurrentBreakNumber] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let newMinutes = inSession ? 24 : 4;
            setSeconds(59);
            setMinutes(newMinutes);
            setInSession(!inSession);
            setMode("Rest");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () =>
      clearInterval(interval) && setCurrentBreakNumber(currentBreakNumber + 1);
  }, [isRunning, seconds, minutes, inSession, currentBreakNumber]);

  return (
    <div className="PomoBox">
      <div className="in-box">
        <Music />
        <Timer time={{ minutes, seconds, inSession, mode }} />
        <SessionTracker breakNumber={currentBreakNumber} />
      </div>
      <div className="out-box">
        <PausePlay running={(isRunning, setIsRunning)} />
      </div>
    </div>
  );
}

export default PomoBox;
