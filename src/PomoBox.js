import React, { useState, useEffect } from "react";
import Timer from "./Timer.js";
import SessionTracker from "./SessionTracker.js";
import Controls from "./Controls.js";
import "./PomoBox.css";
import { SettingsContext } from "./SettingsProvider.js";
import sound from "./sounds/timesUp.wav";
import Customize from "./Customize.js";

function PomoBox() {
  const { settings } = React.useContext(SettingsContext);
  let pomoMinutes = settings.pomodoro;
  let shortPomoBreak = settings.shortBreak;
  let longPomoBreak = settings.longBreak;

  const [minutes, setMinutes] = useState(pomoMinutes);
  const [seconds, setSeconds] = useState(0);
  const [mode, setMode] = useState("Focus");
  const [inSession, setInSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [currentBreakNumber, setCurrentBreakNumber] = useState(0);
  const [currentSessionNumber, setCurrentSessionNumber] = useState(0);

  useEffect(() => {
    setMinutes(pomoMinutes);
    setSeconds(0);
  }, [settings, pomoMinutes]);

  function startSession() {
    setInSession(true);
    let newMinutes = pomoMinutes - 1;
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
    let newMinutes = shortPomoBreak - 1;
    setSeconds(59);
    setMinutes(newMinutes);
    setMode("Rest");
    setCurrentBreakNumber(currentBreakNumber + 1);
    setCurrentSessionNumber(currentSessionNumber + 1);
  }

  function startLongBreak() {
    setInSession(false);
    let newMinutes = longPomoBreak - 1;
    setSeconds(59);
    setMinutes(newMinutes);
    setMode("Long Break");
    setCurrentBreakNumber(currentBreakNumber + 1);
    setCurrentSessionNumber(currentSessionNumber + 1);
  }

  const reset = () => {
    setMinutes(pomoMinutes);
    setSeconds(0);
    setMode("Focus");
    setInSession(true);
    setIsRunning(false);
    setCurrentBreakNumber(0);
    setCurrentSessionNumber(0);
  };

  function playSound() {
    new Audio(sound).play();
  }

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 1) {
          playSound();
        }

        if (seconds === 0) {
          if (minutes === 0) {
            if (inSession) {
              setTimeout(() => {
                startBreak();
              }, 1100);
            } else {
              setTimeout(() => {
                startSession();
              }, 1100);
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
      <h3>BANDORA FOCUS</h3>
      <div className="in-box">
        <Customize />
        <Timer time={{ minutes, seconds, inSession, mode }} />
        <div className="pomo-counter"> #{currentSessionNumber}</div>
        <SessionTracker breakNumber={currentBreakNumber} />
      </div>
      <div className="out-box">
        <Controls resetPomo={reset} running={(isRunning, setIsRunning)} />
      </div>
    </div>
  );
}

export default PomoBox;
