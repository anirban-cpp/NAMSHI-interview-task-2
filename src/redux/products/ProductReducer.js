import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./ProductTypes"

const initialState = {
    loading: false,
    products: [],
    error: "",
}

const ProductsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                products: [],
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default ProductsReducer;