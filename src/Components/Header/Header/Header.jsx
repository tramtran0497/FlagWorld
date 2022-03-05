import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "../HeaderStyle/header.scss";
import { useLocation } from "react-router-dom";
import Hambuger from "./Hambuger";
import ThemeSwitch from "./ThemeSwitch";
import ThemeClick from "./ThemeClick";

function Header({ searchNameCountries, currentPath }) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentPath === location.pathname) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  }, [location, currentPath]);
  return (
    <div className="header">
      <ThemeSwitch />
      <ThemeClick />
      <Search searchNameCountries={searchNameCountries} />
      <Navbar isActive={isActive} />
      <Hambuger />
    </div>
  );
}

export default Header;
