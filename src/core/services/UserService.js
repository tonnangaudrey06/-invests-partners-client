import http from '../utils/http-common';

const source = "api/user";

class UserService {
    getMembres(user) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${user}/membres`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getUser(user) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${user}`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    subscribeNewsletter(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post('api/subscribe/newsletter', {email});
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    changeNewsletter(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source + '/subscribe/newsletter', data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAllUserProjets(user) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source + '/' + user + '/projets');
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAllUserProjetsInvesti(user) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source + '/' + user + '/projets/invest');
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    updateProfil(user, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.put(`${source}/${user}`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    updatePassword(user, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.put(`${source}/${user}/update/password`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    updatePhoto(user, file) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${user}/upload/photo`, file);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    updateCNI(user, file) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${user}/upload/cni`, file);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    updateDocumentFiscal(user, file) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${user}/upload/document/fiscal`, file);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new UserService();