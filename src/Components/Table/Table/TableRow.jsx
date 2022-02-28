import { Add, Favorite, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../TableStyle/tableRow.scss";
import { addToCart, removeFromCart } from "../../../Redux/Cart/cart-action";
import { click } from "../../../Redux/Favorite/favorite-action";

function TableRow({ item }) {
  const [isLove, setIsLove] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { listCarts } = useSelector((state) => state.cart);
  const { listFavorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundCart = listCarts?.find((cart) => cart.name === item.name);
    if (foundCart) {
      setQuantity(foundCart.qty);
    } else {
      setQuantity(0);
    }
  }, [listCarts, item]);

  useEffect(() => {
    const exist =
      listFavorites &&
      listFavorites.find((favorite) => favorite.name === item.name);
    setIsLove(!!exist);
  }, [listFavorites, item]);

  const handleAdd = () => {
    dispatch(addToCart(item));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  const handleLove = () => {
    dispatch(click(item));
  };

  return (
    <tr className="tableRow">
      <td className="tableRow__img">
        <img src={item.flag} alt={item.name} />
      </td>
      <td className="tableRow__name">{item.name}</td>
      <td className="tableRow__capital">{item.capital}</td>
      <td className="tableRow__region">{item.region}</td>
      <td className="tableRow__population">{item.population}</td>
      <td className="tableRow__languages">
        {item.languages &&
          item.languages.map((language) => <p key={language}>{language}</p>)}
      </td>
      <td className="tableRow__quantity">
        <div>
          <Remove
            onClick={handleRemove}
            className="tableRow__quantity__removeIcon"
          />
          <p>{quantity}</p>
          <Add onClick={handleAdd} className="tableRow__quantity__addIcon" />
        </div>
      </td>
      <td className="tableRow__favorite">
        <Favorite
          onClick={handleLove}
          style={{ color: isLove ? "red" : "gray" }}
          className="tableRow__favorite__icon"
        />
      </td>
    </tr>
  );
}

export default TableRow;
