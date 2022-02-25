import { Favorite } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function FavoriteBadge() {
  const [isShow, setIsShow] = useState(false);
  const { listFavorites } = useSelector((state) => state.favorite);

  const handleShow = () => setIsShow(!isShow);

  return (
    <div className="favorite-badge">
      <Badge badgeContent={listFavorites?.length} color="primary">
        <Favorite color="action" onClick={handleShow} />
      </Badge>
      <div
        className="list-favorites"
        style={{ display: isShow ? "block" : "none" }}
      >
        {listFavorites &&
          listFavorites.map((favorite) => (
            <p key={favorite.name}>{favorite.name}</p>
          ))}
      </div>
    </div>
  );
}

export default FavoriteBadge;
