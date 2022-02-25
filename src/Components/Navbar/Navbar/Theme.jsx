import { ThemeUpdateContext } from "../../../useContext/ThemeContext.js";
import React, { useContext } from "react";

function Theme() {
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <div className="theme">
      <p>Light</p>
      <div className="container">
        <div className="circle-btn" onClick={toggleTheme}></div>
      </div>
      <p>Dark</p>
    </div>
  );
}

export default Theme;
