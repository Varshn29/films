import { combineReducers } from "redux";
import { filmDetailsReducer } from "./filmDetailsReducer";
import { filmListReducer } from "./filmListReducer";

export const reducer = combineReducers({
    filmList: filmListReducer,
    filmDetails: filmDetailsReducer
})