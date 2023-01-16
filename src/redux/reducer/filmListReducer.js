import { GET_FILM_LIST, GET_FILM_LIST_SUCCESS, GET_FILM_LIST_FAILURE } from '../action/constants';

const initialState = {
    isLoading: false,
    filmListData: {},
    error: null
}

export const filmListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM_LIST: {
            return { ...state, isLoading: true }
        }
        case GET_FILM_LIST_SUCCESS: {
            return { ...state, filmListData: action.payload, isLoading: false }
        }
        case GET_FILM_LIST_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}