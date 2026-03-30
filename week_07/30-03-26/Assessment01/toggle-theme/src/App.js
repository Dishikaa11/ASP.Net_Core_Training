import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <ThemeToggle 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
    </div>
  );
}

export default App;