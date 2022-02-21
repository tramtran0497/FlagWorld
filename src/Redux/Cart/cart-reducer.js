import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart-types";

const INITIAL_STATE = {
  listCart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const inCart = state.listCart.find(
    (item) => item.name === action.payload.name
  );
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        listCart: inCart
          ? state.listCart.map((item) =>
              item.name === action.payload.name
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.listCart,
              {
                name: action.payload.name,
                flag: action.payload.flag,
                qty: 1,
              },
            ],
      };
    case REMOVE_FROM_CART:
      if (inCart) {
        const qtyCart = inCart.qty;
        if (qtyCart > 1) {
          return {
            ...state,
            listCart: state.listCart.map((item) =>
              item.name === action.payload.name
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
        } else {
          const indexOfCart = state.listCart.indexOf(inCart);
          const deletedCart = state.listCart.splice(indexOfCart, 1);
          return {
            ...state,
            listCart: [...state.listCart],
          };
        }
      }
      return state
    default:
      return state
  }
};

export default cartReducer;
