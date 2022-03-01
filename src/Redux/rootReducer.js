import { combineReducers } from "redux";
import cartReducer from "./Cart/cart-reducer";
import favoriteReducer from "./Favorite/favorite-reducer";
import fetchReducer from "./FetchCountries/fetchCountries-reducer";
import fetchCountryReducer from "./FetchCountry/fetchCountry-reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
  fetch: fetchReducer,
  fetchCountry: fetchCountryReducer,
});

export default rootReducer;
