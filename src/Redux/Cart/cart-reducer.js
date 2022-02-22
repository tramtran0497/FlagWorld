import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart-types";

const INITIAL_STATE = {
  listCart: [],
};

const cartReducer = (state, action) => {
  state = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : INITIAL_STATE
  const inCart = state.listCart.find(
    item => {
      return item?.name === action.payload?.name
    }
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (inCart) {
        const newState = {
          ...state,
          listCart: state.listCart.map((item) =>
            item.name === action.payload.name
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
        localStorage.setItem("cart", JSON.stringify(newState))
        return newState
      } else {
        const newState = {
          ...state,
          listCart: [...state.listCart,
            {
              name: action.payload.name,
              flag: action.payload.flag,
              qty: 1,
            },
          ],
        };
        localStorage.setItem("cart", JSON.stringify(newState))
        return newState
      }
    case REMOVE_FROM_CART:
      if (inCart) {
        const qtyCart = inCart.qty;
        if (qtyCart > 1) {
          const newState = {
            ...state,
            listCart: state.listCart.map((item) =>
              item.name === action.payload.name
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
          localStorage.setItem("cart", JSON.stringify(newState))
          return newState
        } else {
          const indexOfCart = state.listCart.indexOf(inCart);
          const deletedCart = state.listCart.splice(indexOfCart, 1);
          const newState = {
            ...state,
            listCart: [...state.listCart],
          };
          localStorage.setItem("cart", JSON.stringify(newState))
          return newState
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
