import http from '../utils/http-common';

const source = "api/secteur";

class SecteurService {
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

    getSecteurProjet(id, town) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${id}/${town}`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new SecteurService();