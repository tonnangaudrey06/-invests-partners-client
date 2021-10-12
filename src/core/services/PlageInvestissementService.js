import http from '../utils/http-common';

const source = "api/profilinvestisseur";

class PlageInvestissementService {
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

}

export default new PlageInvestissementService();