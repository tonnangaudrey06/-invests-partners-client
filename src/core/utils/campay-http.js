import axios from "axios";
import config from './config';
import localStorage from './localstorage';
import { CampayService } from '../services'

const instance = axios.create({
    baseURL: config.CAMPAY,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
});

instance.interceptors.request.use(
    request => {
        const token = localStorage.exist('campay-token') ? localStorage.get('campay-token') : null;
        if (token !== null && !request.url.includes('token')) {
            request.headers['Authorization'] = 'Token ' + token;
            
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
    async (error) => {
        const originalConfig = error.config;
        if (!originalConfig.url.includes("token") && error.response) {
            if (error.response.status === 401) {
                try {
                    await CampayService.token();
                    return instance.request(originalConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default instance;