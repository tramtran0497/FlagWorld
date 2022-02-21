import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ViewCountries from "./Pages/ViewCountries";
import Country from"./Pages/Country";
import HeartIcon from "./Pages/HeartIcon";
import { useContext } from "react";
import { ThemeContext } from "./useContext/ThemeContext";


function App() {
  // <Route path="heartIcon" element={<HeartIcon />} />
  // <Route path="country/:name" element={<Country />} />
  const darkTheme = useContext(ThemeContext)

  return (
    <div style={{backgroundColor: darkTheme ? "black": "white", color: darkTheme ? "white": "black"}}>
      <Routes>
        <Route path="/" element={<ViewCountries />} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
