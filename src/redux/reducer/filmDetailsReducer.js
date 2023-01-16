import { GET_FILM_DETAILS, GET_FILM_DETAILS_FAILURE, GET_FILM_DETAILS_SUCCESS } from "../action/constants"

const initialState = {
    isLoading: false,
    filmDetailsData: {},
    error: null
}

export const filmDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM_DETAILS: {
            return { ...state, isLoading: true }
        }
        case GET_FILM_DETAILS_SUCCESS: {
            return { ...state, filmDetailsData: action.payload, isLoading: false }
        }
        case GET_FILM_DETAILS_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}