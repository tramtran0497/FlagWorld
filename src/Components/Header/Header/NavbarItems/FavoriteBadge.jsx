import { Favorite } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../HeaderStyle/favorite.scss"

function FavoriteBadge() {
  const [isShow, setIsShow] = useState(false);
  const { listFavorites } = useSelector((state) => state.favorite);

  const handleShow = () => setIsShow(!isShow);

  return (
    <div className="favorite">
      <Badge badgeContent={listFavorites?.length} color="secondary" className="favorite__badge">
        <Favorite color="action" onClick={handleShow} className="favorite__badge__icon"/>
      </Badge>
      <div
        className="favorite__list"
        style={{ display: isShow ? "block" : "none" }}
      >
        {listFavorites &&
          listFavorites.map(favorite => {
            return (
              <div key={favorite.name} className="favorite__list__display">
                <img src={favorite.flag} alt="The country flag"/>
                <h4>{favorite.name}</h4>
                <Favorite className="favorite__list__display__icon"/>
              </div>
            )
          }
            
          )}
      </div>
    </div>
  );
}

export default FavoriteBadge;
