import React, { useEffect, useState } from "react";
import "../HeaderStyle/navbar.scss";
import CartBadge from "./NavbarItems/CartBadge";
import FavoriteBadge from "./NavbarItems/FavoriteBadge";
import { Link } from "react-router-dom";

function Navbar({isActive}) {
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
        <li className={isActive ? "navbar__list__active" : "navbar__list__home"}>
          <Link to="/">Home</Link>
          
        </li>
        <li> <a href="#contact" className="navbar__list__contact">Contact</a></li>
        <FavoriteBadge toggleDisabled={toggleDisabled} disabledFavorite={disabledFavorite}/>
        <CartBadge toggleDisabled={toggleDisabled} disabledCart={disabledCart}/>
      </ul>
    </div>
  );
}

export default Navbar;
