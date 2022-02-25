import { CLICK } from "./favorite-types";

const INITIAL_STATE = {
  listFavorites: [],
};

const favoriteReducer = (state, action) => {
  state = localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : INITIAL_STATE;

  const existInFavorite = state.listFavorites?.find(
    (item) => item.name === action.payload?.name
  );
  switch (action.type) {
    case CLICK:
      if (existInFavorite) {
        const indexOfFavorite = state.listFavorites.indexOf(existInFavorite);
        state.listFavorites.splice(indexOfFavorite, 1);
        const newState = {
          ...state,
          listFavorites: [...state.listFavorites],
        };
        localStorage.setItem("favorite", JSON.stringify(newState));
        return newState;
      } else {
        const newState = {
          ...state,
          listFavorites: [
            ...state.listFavorites,
            {
              name: action.payload.name
            },
          ],
        };
        localStorage.setItem("favorite", JSON.stringify(newState));
        return newState;
      }

    default:
      return state;
  }
};

export default favoriteReducer;
