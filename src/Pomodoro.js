import React from "react";
import Timer from "./Timer";
import "./Pomodoro.css";

function Pomodoro() {
  return (
    <div className="pomodoro">
      <main>
        <div className="container pomo-body">
          <div className="timer-wrapper">
            <div className="ticker">
              <Timer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pomodoro;
