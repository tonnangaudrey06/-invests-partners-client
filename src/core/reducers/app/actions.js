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
} from '../../utils/constants';

export const setSecteur = (secteurs) => {
    return { type: SET_SECTEUR, payload: secteurs };
};

export const setPaiementPending = () => {
    return { type: SET_PAIEMENT_PENDING };
};

export const setPaiementDone = () => {
    return { type: SET_PAIEMENT_DONE };
};

export const setPaiementFailed = () => {
    return { type: SET_PAIEMENT_FAILED };
};

export const setLoadingFalse = () => {
    return { type: STOP_LOADING };
};

export const setLoadingTrue = () => {
    return { type: IS_LOADING };
};

export const setStartAppLoading = () => {
    return { type: SET_APP_LOADING };
};

export const setStopAppLoading = () => {
    return { type: STOP_APP_LOADING };
};

export const setLanguage = (language) => {
    return { type: SET_LANGUAGE, payload: language };
};