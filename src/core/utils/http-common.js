import axios from "axios";
import config from './config';
import localStorage from './localstorage';

import { logout } from '../reducers/auth/actions'
import store from '../reducers'

const instance = axios.create({
    baseURL: config.HOSTURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
});

instance.interceptors.request.use(
    request => {
        const token = localStorage.get('token');
        if (token !== null) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const originalConfig = error.config;
        if (!originalConfig.url.includes("profil") && error.response) {
            if (error.response.status === 401) {
                store.dispatch(logout());
                window.location.replace('/auth');
            }
            return Promise.reject(error);
        }
    }
);

export default instance;