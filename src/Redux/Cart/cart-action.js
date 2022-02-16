import {ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_ITEM, REMOVE_FROM_CART} from "./cart-types"

export const addToCart = (itemName) => {
    return {
        type: ADD_TO_CART,
        payload: {
            name: itemName
        }
    }
}

export const removeFromCart = (itemName) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            name: itemName
        }
    }
}

export const adjustQty = (itemName, value) => {
    return {
        type: ADJUST_QTY,
        payload: {
            name: itemName,
            quantity: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item
    }
}