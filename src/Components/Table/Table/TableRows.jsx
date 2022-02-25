import { Add, Favorite, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../TableStyle/TableRows.css";
import { addToCart, removeFromCart } from "../../../Redux/Cart/cart-action";
import { click } from "../../../Redux/Favorite/favorite-action";

function TableRows({ item }) {
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
    <tr>
      <td>
        <img src={item.flag} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>{item.capital}</td>
      <td>{item.region}</td>
      <td>{item.population}</td>
      <td>
        {item.languages &&
          item.languages.map((language) => <p key={language}>{language}</p>)}
      </td>
      <td className="quantity">
        <Remove onClick={handleRemove} />
        <p>{quantity}</p>
        <Add onClick={handleAdd} />
      </td>
      <td>
        <Favorite
          onClick={handleLove}
          style={{ color: isLove ? "red" : "gray" }}
        />
      </td>
    </tr>
  );
}

export default TableRows;
