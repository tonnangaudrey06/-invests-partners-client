import http from '../utils/http-common';

const source = "api/event";

class EventService {
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

    participate(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(data)
                const rs = await http.post(`${source}/${id}/participer`, data);
                resolve(rs.data.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    participateElement(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/participants`, data);
                resolve(rs.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    checkSeat(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${id}/participer/check/seat`, data);
                resolve(rs);
                console.log(rs)
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new EventService();