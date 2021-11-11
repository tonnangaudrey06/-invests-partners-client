import {
    SET_PAIEMENT_PENDING,
    SET_PAIEMENT_DONE,
    SET_PAIEMENT_FAILED,
    SET_SECTEUR,
    IS_LOADING,
    STOP_LOADING,
    SET_LANGUAGE
} from "../../utils/constants";

const initialState = {
    secteurs: [],
    paiement: {
        pending: false,
        failed: false
    },
    loading: false,
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
        default:
            return state;
    }
}

export default authReducer;