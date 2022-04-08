import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "./CartTypes"
import { addItemToCart, removeItemFromCart } from "./CartUtils"

const initialState = {
    cart: []
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cart: removeItemFromCart(state.cart, action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default CartReducer;