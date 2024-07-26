import http from '../utils/http-common';

const source = "api/actualite";

class ActualiteService {
    getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${id}`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    

    getLatest() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/latest`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new ActualiteService();