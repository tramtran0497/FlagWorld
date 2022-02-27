import { ThemeContext, ThemeUpdateContext } from "../../../useContext/ThemeContext.js";
import React, { useContext} from "react";
import "../HeaderStyle/theme.scss"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Theme() {
  const toggleTheme = useContext(ThemeUpdateContext);
  const darkTheme = useContext(ThemeContext)
 
  return (
    <div className="theme">
      <LightModeIcon/>
      <div className="theme__oval" onClick={toggleTheme} >
        <div className="theme__oval__btn" style={{transform: darkTheme ? "translate(16px)" : "translate(0px)"}}></div>
      </div>
      <DarkModeIcon/>
    </div>
  );
}

export default Theme;
