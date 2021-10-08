import http from '../utils/campay-http'
import config from '../utils/config'
import localstorage from '../utils/localstorage'

class CampayService {

    post(path, data) {
        return new Promise((resolve, reject) => {
            http.post(path, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    get(path) {
        return new Promise((resolve, reject) => {
            http.get(path)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    token() {
        const data = {
            username: config.CAMPAY_USERNAME,
            password: config.CAMPAY_PASSWORD
        }
        return new Promise((resolve, reject) => {
            http.post('token/', data)
                .then(response => {
                    localstorage.set('campay-token', response.data.token);
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}


export default new CampayService();