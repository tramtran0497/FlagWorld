import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "../HeaderStyle/header.scss";
import Theme from "./Theme";
import { useLocation } from "react-router-dom";

function Header({ searchNameCountries, currentPath}) {
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
   if(currentPath === location.pathname){
    setIsActive(true)
    return
   }
   setIsActive(false)
  }, [location, currentPath])
  return (
    <div className="header">
      <Theme />
      <Search searchNameCountries={searchNameCountries} /> 
      <Navbar isActive={isActive}/>
    </div>
  );
}

export default Header;
