import http from '../utils/http-common';
import localstorage from '../utils/localstorage';

const source = "api/auth/";

class AuthService {
    login(user) {
        return new Promise(async (resolve, reject) => {
            try {

                console.log("testttttttttt");
                const rs = await http.post(source + 'login', user);
                
                console.log(rs.data.data);
                localstorage.set('token', rs.data.data.token);
                localstorage.setJson('user', { role: rs.data.data.user.role });
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            http.post(source + 'logout', {})
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    register(user) {
        return new Promise((resolve, reject) => {
            http.post(source + 'register', user)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    check(user) {
        return new Promise((resolve, reject) => {
            http.post(source + 'check/register', user)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    profile() {
        return new Promise((resolve, reject) => {
            http.get(source + 'profile')
                .then(response => {
                    localstorage.setJson('user', { role: response.data.data.role });
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    forgot(user) {
        return new Promise((resolve, reject) => {
            http.post(source + 'forgot/password', user)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    reset(user) {
        return new Promise((resolve, reject) => {
            http.post(source + 'reset/password', user)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default new AuthService();