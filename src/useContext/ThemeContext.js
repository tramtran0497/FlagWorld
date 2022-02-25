import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeUpdateContext = React.createContext();

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("dark"));
    if (getTheme) {
      setDarkTheme(getTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
