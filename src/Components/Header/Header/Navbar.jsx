import React from "react";
import "../HeaderStyle/navbar.scss";
import CartBadge from "./NavbarItems/CartBadge";
import FavoriteBadge from "./NavbarItems/FavoriteBadge";

function Navbar() {
  

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li>Home</li>
        <li>Contact</li>
        <FavoriteBadge/>
        <CartBadge />
      </ul>
    </div>
  );
}

export default Navbar;
