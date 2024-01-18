import React from "react";

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [settings, setSettings] = React.useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 20,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
