import React from "react";
import NavItems from "./NavItems";
import Search from "./Search";
import "../NavbarStyle/Navbar.css";
import Theme from "./Theme";

function NavBar({ searchNameCountries }) {
  return (
    <div className="nav-bar">
      <Search searchNameCountries={searchNameCountries} />
      <Theme />
      <NavItems />
    </div>
  );
}

export default NavBar;
