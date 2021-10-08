import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    SET_USER,
    SET_USER_PROJETS
} from "../../utils/constants";
import localstorage from "../../utils/localstorage";

const initialState = localstorage.exist('user')
    ? { isLoggedIn: true, user: localstorage.getJson('user'), projets: [] }
    : { isLoggedIn: false, user: null, projets: [] };

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: payload,
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_USER_PROJETS:
            return {
                ...state,
                projets: payload,
            };
        default:
            return state;
    }
}

export default authReducer;