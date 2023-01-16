import { GET_FILM_LIST, GET_FILM_LIST_SUCCESS, GET_FILM_LIST_FAILURE } from './constants';
import axios from 'axios';

const listOfFlims = () => {
    return {
        type: GET_FILM_LIST
    }
} 

const listOfFlimsSuccess = (data) => {
    return {
        type: GET_FILM_LIST_SUCCESS,
        payload: data
    }
} 

const listOfFlimsFailure = (error) => {
    return {
        type: GET_FILM_LIST_FAILURE,
        payload: error
    }
} 

export const fetchListOfFilms = () => {
    return (dispatch) => {
        dispatch(listOfFlims())

        axios.get('https://swapi.dev/api/films/')
            .then(res => dispatch(listOfFlimsSuccess(res.data)))
            .catch(error => dispatch(listOfFlimsFailure(error)))
    }
}