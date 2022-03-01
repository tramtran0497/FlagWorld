import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../../Redux/FetchCountry/fetchCountry-actions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Favorite } from "@mui/icons-material";
import "./cardCountry.scss";
import { addToCart, removeFromCart } from "../../Redux/Cart/cart-action";
import { click } from "../../Redux/Favorite/favorite-action";

function CardCountry() {
  const { name } = useParams();
  const { country } = useSelector((state) => state.fetchCountry);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const { listCarts } = useSelector((state) => state.cart);
  const { listFavorites } = useSelector((state) => state.favorite);
  const [quantity, setQuantity] = useState(0);
  const [isLove, setIsLove] = useState(false);

  useEffect(() => {
    const foundCart = listCarts?.find((cart) => cart.name === country.name);
    if (foundCart) {
      setQuantity(foundCart.qty);
    } else {
      setQuantity(0);
    }
  }, [listCarts, country]);

  useEffect(() => {
    const exist =
      listFavorites &&
      listFavorites.find((favorite) => favorite.name === country.name);
    setIsLove(!!exist);
  }, [listFavorites, country]);

  useEffect(() => {
    dispatch(fetchCountry(name));
  }, []);

  useEffect(() => {console.log(country.name)});

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleLove = (item) => {
    dispatch(click(item));
  };
  return (
    <div className="cardCountry">
      <h1>{country.name}</h1>
      <div className="cardCountry__img">
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className="cardCountry__detailsInfo">
        <div className="cardCountry__detailsInfo__icon">
          <p>More details</p>
          <ArrowDropDownIcon onClick={handleClick} />
        </div>
        <div
          className="cardCountry__detailsInfo__displayInfo"
          style={{ display: isShow ? "block" : "none" }}
        >
          <div>
            <p>Capital: </p>
            <p>{country.capital}</p>
          </div>
          <div>
            <p>Region: </p>
            <p>{country.region}</p>
          </div>
          <div>
            <p>Population: </p>
            <p>{country.population}</p>
          </div>
          <div className="cardCountry__detailsInfo__displayInfo__languages">
            <p>Languages: </p>
            <ul>
              {country.languages &&
                country.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="cardCountry__purchase">
        <p>Your current quantity :</p>
        <div>
          <RemoveIcon onClick={() => handleRemove(country)} />
          <p> {quantity} </p>
          <AddIcon onClick={() => handleAdd(country)} />
        </div>
      </div>
      <div className="cardCountry__favorite">
        {isLove ? (
          <p>I love {country.name}</p>
        ) : (
          <p>Add to your favorite list</p>
        )}
        <Favorite
          className="cardCountry__favorite__icon"
          onClick={() => handleLove(country)}
          style={{ color: isLove ? "red" : "gray" }}
        />
      </div>
    </div>
  );
}

export default CardCountry;
