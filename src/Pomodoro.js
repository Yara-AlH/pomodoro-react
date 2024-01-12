import React from "react";
import PomoBox from "./PomoBox.js";
import "./Pomodoro.css";
import PausePlay from "./PausePlay.js";
import { TimerProvider } from "./Context.js";

function Pomodoro() {
  return (
    <div className="pomodoro">
      <TimerProvider>
        <PomoBox />
        <PausePlay />
      </TimerProvider>
    </div>
  );
}

export default Pomodoro;
