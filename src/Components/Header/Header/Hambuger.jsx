import React, { useState } from "react";
import "../HeaderStyle/hambuger.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

function Hambuger() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="hambuger">
      {isClicked ? (
        <>
          <CancelIcon onClick={handleClick} className="hambuger__icon" />
          <div className="hambuger__list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#contact" className="navbar__list__contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <MenuIcon onClick={handleClick} className="hambuger__icon" />
      )}
    </div>
  );
}

export default Hambuger;
