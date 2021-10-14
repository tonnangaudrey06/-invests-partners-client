import http from '../utils/http-common';

const source = "api/app";

class AppService {
    slider() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/slider`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    partenaire() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/partenaire`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    projet() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/partenaire`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new AppService();