import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart-types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name: item.name,
      flag: item.flag,
    },
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      name: item.name,
      flag: item.flag,
    },
  };
};
