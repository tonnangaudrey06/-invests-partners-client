import http from '../utils/http-common';

const source = "api/membre";

class MembreService {
    addMembre(membre) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(source, membre);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new MembreService();