import {
    SET_PAIEMENT_PENDING,
    SET_PAIEMENT_DONE,
    SET_PAIEMENT_FAILED,
    SET_SECTEUR,
    IS_LOADING,
    STOP_LOADING,
    SET_LANGUAGE,
    STOP_APP_LOADING,
    SET_APP_LOADING
} from "../../utils/constants";

const initialState = {
    secteurs: [],
    projets: [],
    stats: [],
    sliders: [],
    patners: [],
    actuality:[],
    events: [],
    paiement: {
        pending: false,
        failed: false
    },
    loading: false,
    appLoading: true,
    language: 'fr'
};

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_SECTEUR:
            return {
                ...state,
                secteurs: payload,
            };
        case "SET_PROJET":
            return {
                ...state,
                projets: payload,
            };
        case "SET_STATS":
            return {
                ...state,
                stats: payload,
            };
        case "SET_SLIDER":
            return {
                ...state,
                sliders: payload,
            };
        case "SET_PATNER":
            return {
                ...state,
                patners: payload,
            };
        case "SET_EVENT":
            return {
                ...state,
                events: payload,
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: payload,
            };
        case SET_PAIEMENT_PENDING:
            return {
                ...state,
                pending: true,
                failed: false,
            };
        case SET_PAIEMENT_DONE:
            return {
                ...state,
                pending: false,
                failed: false,
            };
        case SET_PAIEMENT_FAILED:
            return {
                ...state,
                pending: false,
                failed: true
            };
        case IS_LOADING:
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            };
        case STOP_APP_LOADING:
            return {
                ...state,
                appLoading: false
            };
        case SET_APP_LOADING:
            return {
                ...state,
                appLoading: true
            };
        default:
            return state;
    }
}

export default authReducer;