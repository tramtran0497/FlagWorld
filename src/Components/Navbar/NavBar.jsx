import React from "react";
import NavItems from "./NavItems"
import Search from "./Search";
import "./NavbarStyle/Navbar.css"
import Sort from "./Sort";

function NavBar({searchNameCountries}) {
  return(
      <div className="nav-bar">
        <Search searchNameCountries={searchNameCountries}/>
        <Sort/>
        <NavItems/>
      </div>
  );
}

export default NavBar;
