import axios from "axios";
import config from './config';
import localStorage from './localstorage';

const instance = axios.create({
    baseURL: config.URL,
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
    async (error) => {
        return Promise.reject(error);
    }
);

export default instance;