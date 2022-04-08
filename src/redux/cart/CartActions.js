import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "./CartTypes"

export const AddToCart = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item
    }
}

export const RemoveFromCart = (item) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: item
    }
}

export const ClearCart = () => {
    return {
        type: CLEAR_CART
    }
}