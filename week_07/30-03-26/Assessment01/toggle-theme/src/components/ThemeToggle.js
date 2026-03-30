import React from "react";

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <div>
      <h1>Mode: {isDarkMode ? "Dark" : "Light"}</h1>

      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;