import {
    SET_SECTEUR,
    SET_COUNTRY,
    SET_TOWN,
    SET_PROJET
} from '../../utils/constants';

export const setSecteur = (secteurs) => {
    return { type: SET_SECTEUR, payload: secteurs };
};

export const setCountry = (countries) => {
    return { type: SET_COUNTRY, payload: countries };
};

export const setTown = (towns) => {
    return { type: SET_TOWN, payload: towns };
};

export const setProjet = (projets) => {
    return { type: SET_PROJET, payload: projets };
};