import axios from "axios";
import config from './config';
import localStorage from './localstorage';
import { CampayService } from '../services'

axios.defaults.baseURL = config.CAMPAY;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(
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

axios.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {
        const originalConfig = error.config;
        if (!originalConfig.url.includes("token") && error.response) {
            if (error.response.status === 401) {
                try {
                    await CampayService.token();
                    return axios.request(originalConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
        }
        
        return Promise.reject(error);
    }
);

export default axios;