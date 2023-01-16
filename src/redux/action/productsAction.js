import axios from 'axios';
import { GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_FAILURE, GET_PRODUCTS_LIST_SUCCESS } from './constants';

export const getAllProducts = () => {
    return {
        type: GET_PRODUCTS_LIST
    }
}

export const getAllProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: data
    }
}

export const getAllProductsFailure = (error) => {
    return {
        type: GET_PRODUCTS_LIST_FAILURE,
        payload: error
    }
}

export const productsList = () => {
    return (dispatch) => {
    dispatch(getAllProducts())

    axios.get('https://fakestoreapi.com/products')
        .then(res => dispatch(getAllProductsSuccess(res.data)))
        .catch(err => dispatch(getAllProductsFailure(err)))
    }
}