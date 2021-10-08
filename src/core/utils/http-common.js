import axios from "axios";
import config from './config';
import localStorage from './localstorage';

axios.defaults.baseURL = config.HOSTURL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(
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

axios.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default axios;