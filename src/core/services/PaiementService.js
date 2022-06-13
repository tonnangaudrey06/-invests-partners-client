import http from '../utils/http-common';

const source = "api/pay";

class PaymentService {
    save(id, payment) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${id}`, payment);
                resolve(rs.data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new PaymentService();