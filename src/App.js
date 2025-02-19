import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import "./styles/styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from local storage on start
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "enabled") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Interactive Quiz</h1>
      <Quiz />
    </div>
  );
};

export default App;
