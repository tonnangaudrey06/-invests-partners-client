import {
    SET_COUNTRY,
    SET_SECTEUR,
    SET_TOWN,
    SET_PROJET
} from "../../utils/constants";

const initialState = { secteurs: [], countries: [], towns: [], projects: [] };

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_SECTEUR:
            return {
                ...state,
                secteurs: payload,
            };
        case SET_COUNTRY:
            return {
                ...state,
                countries: payload,
            };
        case SET_TOWN:
            return {
                ...state,
                towns: payload,
            };
        case SET_PROJET:
            return {
                ...state,
                projects: payload,
            };
        default:
            return state;
    }
}

export default authReducer;