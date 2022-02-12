import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ViewCountries from "./Pages/ViewCountries";
import Country from"./Pages/Country";
import HeartIcon from "./Pages/HeartIcon";


function App() {
  return (
    <div>
      <Routes>
        <Route path="heartIcon" element={<HeartIcon />} />
        <Route path="/" element={<ViewCountries />} />
        <Route path="country/:name" element={<Country />} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
