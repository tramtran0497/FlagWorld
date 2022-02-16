import { ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_ITEM, REMOVE_FROM_CART } from "./cart-types"

const INITIAL_STATE = {
    countries: [],
    cart: [],
    currentItem: null,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {}
        case REMOVE_FROM_CART:
            return {}
        case ADJUST_QTY:
            return {}
        case LOAD_CURRENT_ITEM:
            return {}
        default: 
        return state
    }
       
}

export default cartReducer