import "./App.css";
import PomoBox from "./PomoBox.js";
import SettingsProvider from "./SettingsProvider.js";
import AboutPomodoro from "./AboutPomodoro.js";

function App() {
  return (
    <div className="App ">
      <SettingsProvider>
        <PomoBox />
        <AboutPomodoro />
      </SettingsProvider>
    </div>
  );
}

export default App;
