import { useState } from "react";
import HomePage from "./components/HomePage";
import ActionItems from "./components/ActionItems";

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      {currentView === "home" ? (
        <HomePage />
      ) : (
        <ActionItems onBack={() => setCurrentView("home")} />
      )}
    </>
  );
}

export default App;
