import axios from 'axios';
import { GET_FILM_DETAILS, GET_FILM_DETAILS_FAILURE, GET_FILM_DETAILS_SUCCESS } from './constants';

const filmDetails = () => {
    return {
        type: GET_FILM_DETAILS
    }
} 

const filmDetailsSuccess = (data) => {
    return {
        type: GET_FILM_DETAILS_SUCCESS,
        payload: data
    }
} 

const filmDetailsFailure = (error) => {
    return {
        type: GET_FILM_DETAILS_FAILURE,
        payload: error
    }
} 

export const fetchfilmDetails = (url) => {
    return (dispatch) => {
        dispatch(filmDetails())

        axios.get(url)
            .then(res => dispatch(filmDetailsSuccess(res.data)))
            .catch(error => dispatch(filmDetailsFailure(error)))
    }
}