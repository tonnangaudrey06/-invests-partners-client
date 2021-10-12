import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    SET_USER,
    SET_USER_PROJETS
} from '../../utils/constants';
import localstorage from '../../utils/localstorage';

export const login = (user) => {
    return { type: SET_CURRENT_USER, payload: user };
};

export const logout = () => {
    localstorage.remove('token');
    localstorage.remove('user');
    return { type: REMOVE_CURRENT_USER };
};

export const user = (user) => {
    return { type: SET_USER, payload: user };
};

export const projets = (projets) => {
    return { type: SET_USER_PROJETS, payload: projets };
};