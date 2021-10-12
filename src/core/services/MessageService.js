import http from '../utils/http-common';

const source = "api/chats";

class MessageService {
    send(sender, receiver, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${sender}/send/${receiver}`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAll(sender) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${sender}/inbox`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAllContacts(sender) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${sender}/contacts`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new MessageService();