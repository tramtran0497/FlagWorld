import {combineReducers} from "redux"
import cartReducer from "./Cart/cart-reducer"
import favoriteReducer from "./Favorite/favorite-reducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer,
})

export default rootReducer