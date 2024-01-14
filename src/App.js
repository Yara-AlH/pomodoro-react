import "./App.css";
import Header from "./Header.js";
import PomoBox from "./PomoBox.js";
import SettingsProvider from "./SettingsProvider.js";

function App() {
  return (
    <div className="App ">
      <SettingsProvider>
        <Header />
        <PomoBox />
      </SettingsProvider>
    </div>
  );
}

export default App;
