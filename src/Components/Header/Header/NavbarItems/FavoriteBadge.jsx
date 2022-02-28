import { Favorite } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../HeaderStyle/favorite.scss";
import { click } from "../../../../Redux/Favorite/favorite-action";

function FavoriteBadge({toggleDisabled, disabledFavorite}) {
  const [isShow, setIsShow] = useState(false);
  const { listFavorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleShow = () => {
    setIsShow(!isShow)
    toggleDisabled("favorite")
  };

  const handleLove = (favorite) => {
    dispatch(click(favorite));
  };

  return (
    <div className="favorite" style={disabledFavorite ? {pointerEvents: "none", opacity: "0.4"} : {}}>
      <Badge
        badgeContent={listFavorites?.length}
        color="secondary"
        className="favorite__badge"
      >
        <Favorite
          color="action"
          onClick={handleShow}
          className="favorite__badge__icon"
        />
      </Badge>
      <div
        className="favorite__list"
        style={{ display: isShow ? "block" : "none" }}
      >
        {!listFavorites?.length ? (
          <p className="favorite__list__display">The favorite list is empty</p>
        ) : (
          listFavorites.map((favorite) => {
            return (
              <div key={favorite.name} className="favorite__list__display">
                <img src={favorite.flag} alt="The country flag" />
                <h4>{favorite.name}</h4>
                <Favorite
                  className="favorite__list__display__icon"
                  onClick={() => handleLove(favorite)}
                  style={{ color: "red" }}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FavoriteBadge;
