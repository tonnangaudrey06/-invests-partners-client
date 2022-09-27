import http from '../utils/http-common';

const source = "api/projet";

class ProjetService {
    addProjet(projet) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(source, projet);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAllProjets(condition) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source, condition);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOneProjet(projet) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(source + '/' + projet);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    valideProjet(projet) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${projet}/valide`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    likeProjet(projet, user) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${projet}/like/${user}`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new ProjetService();