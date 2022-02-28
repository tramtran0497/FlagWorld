import React, { useState } from "react";
import "../HeaderStyle/navbar.scss";
import CartBadge from "./NavbarItems/CartBadge";
import FavoriteBadge from "./NavbarItems/FavoriteBadge";

function Navbar() {
  const [disabledCart, setDisabledCart] = useState(false)
  const [disabledFavorite, setDisabledFavorite] = useState(false)

  const toggleDisabled = (item) => {
    if(item === "cart"){
      setDisabledFavorite(!disabledFavorite)
      return
    }
    setDisabledCart(!disabledCart)
  }

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li>Home</li>
        <li>Contact</li>
        <FavoriteBadge toggleDisabled={toggleDisabled} disabledFavorite={disabledFavorite}/>
        <CartBadge toggleDisabled={toggleDisabled} disabledCart={disabledCart}/>
      </ul>
    </div>
  );
}

export default Navbar;
