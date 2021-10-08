import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    SET_USER,
    SET_USER_PROJETS
} from '../../utils/constants';

export const login = (user) => {
    return { type: SET_CURRENT_USER, payload: user };
};

export const logout = () => {
    return { type: REMOVE_CURRENT_USER };
};

export const user = (user) => {
    return { type: SET_USER, payload: user };
};

export const projets = (projets) => {
    return { type: SET_USER_PROJETS, payload: projets };
};