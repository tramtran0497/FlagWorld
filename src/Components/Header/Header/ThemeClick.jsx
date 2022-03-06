import React, { useState, useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeUpdateContext } from "../../../useContext/ThemeContext.js";
import "../HeaderStyle/themeClick.scss";
function ThemeClick() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleTheme = useContext(ThemeUpdateContext);
  const handleClick = () => {
    setIsClicked(!isClicked);
    toggleTheme();
  };
  return (
    <div className="themeClick">
      {isClicked ? (
        <Brightness7Icon onClick={handleClick} className="themeClick__icon"/>
      ) : (
        <Brightness4Icon onClick={handleClick} className="themeClick__icon"/>
      )}
    </div>
  );
}

export default ThemeClick;
