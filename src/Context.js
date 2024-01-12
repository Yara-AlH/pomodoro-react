// Context.js
import React, { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const useTimerContext = () => {
  return useContext(TimerContext);
};

export const TimerProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider value={{ isRunning, startTimer, pauseTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
