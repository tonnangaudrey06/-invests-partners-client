import http from '../utils/http-common';

const source = "api/send/mail";

class MembreService {
    send(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(source, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new MembreService();