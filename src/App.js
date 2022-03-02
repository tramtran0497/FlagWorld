import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Country from "./Pages/Country";
import { ThemeContext } from "./useContext/ThemeContext";
import "./SCSS/app.scss";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header/Header/Header.jsx";
import { useSelector } from "react-redux";
import React, { useEffect, useState, useContext } from "react";
import { fetchCountries } from "./Redux/FetchCountries/fetchCountries-actions";
import { useDispatch } from "react-redux";
 

function App() {
  const darkTheme = useContext(ThemeContext);
  const [displayList, setDisplayList] = useState([]);
  const listCountries = useSelector((state) => state.fetch.listCountries);
  const loading = useSelector((state) => state.fetch.loading);
  const error = useSelector((state) => state.fetch.error);
  const dispatch = useDispatch();
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    setDisplayList(listCountries);
  }, [listCountries]);

  useEffect(() => {
    //console.log("location", location)

  });

  const searchNameCountries = (inputText) => {
    if (!inputText) {
      setDisplayList(listCountries);
    } else {
      const text = inputText.toLowerCase();
      const searchedList = listCountries.filter((country) =>
        country.name.toLowerCase().includes(text)
      );
      setDisplayList(searchedList);
    }
  };

  const takeCurrentPath = (path) => {
    console.log("takePathFromHeader", path)
    setCurrentPath(path)
  }

  

  return (
    <div>
      <BrowserRouter>
        <React.StrictMode>
          <div
            style={{
              backgroundColor: darkTheme ? "black" : "white",
              color: darkTheme ? "white" : "black",
            }}
            className="app"
          >
          <Header searchNameCountries={searchNameCountries} currentPath={currentPath}/>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    loading={loading}
                    error={error}
                    displayList={displayList}
                    takeCurrentPath={takeCurrentPath}                   
                  />
                }
              />
              <Route path="country/:name" element={<Country />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
