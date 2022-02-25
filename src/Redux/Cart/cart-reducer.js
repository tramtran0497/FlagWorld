import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart-types";

const INITIAL_STATE = {
  listCarts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  state.listCarts = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : INITIAL_STATE.listCarts;
  const existInCart = state.listCarts?.find(
    (item) => item.name === action.payload?.name
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (existInCart) {
        const newState = {
          ...state,
          listCarts: state.listCarts.map((item) =>
            item.name === action.payload.name
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
        localStorage.setItem("cart", JSON.stringify(newState.listCarts));
        return newState;
      } else {
        const newState = {
          ...state,
          listCarts: [
            ...state.listCarts,
            {
              name: action.payload.name,
              flag: action.payload.flag,
              qty: 1,
            },
          ],
        };
        localStorage.setItem("cart", JSON.stringify(newState.listCarts));
        return newState;
      }
    case REMOVE_FROM_CART:
      if (existInCart) {
        const qtyOfCart = existInCart.qty;
        if (qtyOfCart > 1) {
          const newState = {
            ...state,
            listCarts: state.listCarts.map((item) =>
              item.name === action.payload.name
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
          localStorage.setItem("cart", JSON.stringify(newState.listCarts));
          return newState;
        } else {
          const indexOfCart = state.listCarts.indexOf(existInCart);
          state.listCarts.splice(indexOfCart, 1);
          const newState = {
            ...state,
            listCarts: [...state.listCarts],
          };
          localStorage.setItem("cart", JSON.stringify(newState.listCarts));
          return newState;
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
