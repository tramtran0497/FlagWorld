import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "../HeaderStyle/header.scss";
import Theme from "./Theme";

function Header({ searchNameCountries }) {
  return (
    <div className="header">
      <Theme />
      <Search searchNameCountries={searchNameCountries} /> 
      <Navbar />
    </div>
  );
}

export default Header;
