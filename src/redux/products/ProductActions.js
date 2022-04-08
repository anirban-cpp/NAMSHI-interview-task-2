import axios from "axios"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./ProductTypes"

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST,
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            dispatch(fetchProductSuccess(res.data))
        }).catch(error => {
            dispatch(fetchProductFailure(error))
        })
    }
}