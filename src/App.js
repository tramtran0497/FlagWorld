import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
//import Country from "./Pages/Country";
import { useContext } from "react";
import { ThemeContext } from "./useContext/ThemeContext";

function App() {
  // <Route path="country/:name" element={<Country />} />
  const darkTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
