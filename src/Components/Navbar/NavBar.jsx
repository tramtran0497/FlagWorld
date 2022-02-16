import React from "react";
import NavItems from "./NavItems"
import Search from "./Search";
import "./NavbarStyle/Navbar.css"

function NavBar({searchNameCountries}) {
  return(
      <div className="nav-bar">
        <Search searchNameCountries={searchNameCountries}/>
        <NavItems/>
      </div>
  );
}

export default NavBar;
