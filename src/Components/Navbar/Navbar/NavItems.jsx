import React from "react";
import "../NavbarStyle/NavItems.css";
import CartBadge from "./NavbarItems/CartBadge";
import FavoriteBadge from "./NavbarItems/FavoriteBadge";

function NavItems() {
  return (
    <div className="nav-items">
      <ul className="nav-items-list">
        <li>Home</li>
        <li>Contact</li>
        <FavoriteBadge />
        <CartBadge />
      </ul>
    </div>
  );
}

export default NavItems;
