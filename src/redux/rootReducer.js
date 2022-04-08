import { combineReducers } from "redux";
import CartReducer from "./cart/CartReducer";
import ProductsReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
    product: ProductsReducer,
    cart: CartReducer
})

export default rootReducer;