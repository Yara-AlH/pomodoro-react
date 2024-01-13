import React, { useState, useEffect } from "react";
import Timer from "./Timer.js";
import SessionTracker from "./SessionTracker.js";
import Controls from "./Controls.js";
import "./PomoBox.css";

function PomoBox() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState("Focus");
  const [inSession, setInSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [currentBreakNumber, setCurrentBreakNumber] = useState(0);
  const [currentSessionNumber, setCurrentSessionNumber] = useState(0);

  function startSession() {
    setInSession(true);
    let newMinutes = 24;
    setSeconds(59);
    setMinutes(newMinutes);
    setMode("Focus");

    if (currentBreakNumber === 4) {
      setCurrentBreakNumber(0);
    }
  }

  function startBreak() {
    if (currentBreakNumber === 3) {
      startLongBreak();
      return;
    }

    setInSession(false);
    let newMinutes = 4;
    setSeconds(59);
    setMinutes(newMinutes);
    setMode("Rest");
    setCurrentBreakNumber(currentBreakNumber + 1);
    setCurrentSessionNumber(currentSessionNumber + 1);
  }

  function startLongBreak() {
    setInSession(false);
    let newMinutes = 14;
    setSeconds(59);
    setMinutes(newMinutes);
    setMode("Long Break");
    setCurrentBreakNumber(currentBreakNumber + 1);
    setCurrentSessionNumber(currentSessionNumber + 1);
  }

  const reset = () => {
    setMinutes(25);
    setSeconds(0);
    setMode("Focus");
    setInSession(true);
    setIsRunning(false);
    setCurrentBreakNumber(0);
    setCurrentSessionNumber(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (inSession) {
              startBreak();
            } else {
              startSession();
            }
            return;
          }

          setSeconds(59);
          setMinutes(minutes - 1);

          return;
        }
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="PomoBox">
      <div className="container">
        <div className="in-box">
          <h3>React Pomodoro Timer</h3>
          <Timer time={{ minutes, seconds, inSession, mode }} />
          <div className="pomo-counter"> #{currentSessionNumber}</div>
          <SessionTracker breakNumber={currentBreakNumber} />
        </div>
        <div className="out-box">
          <Controls resetPomo={reset} running={(isRunning, setIsRunning)} />
        </div>
      </div>
    </div>
  );
}

export default PomoBox;
