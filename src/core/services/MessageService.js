import http from '../utils/http-common';

const source = "api/chats";

class MessageService {
    send(sender, receiver, conversation, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${sender}/${conversation}/send/${receiver}`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    new(sender, receiver, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${sender}/conversation/${receiver}`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    deleteMessage(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.delete(`${source}/delete/message/${id}`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    interesse(sender, receiver, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.post(`${source}/${sender}/interesse/${receiver}`, data);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAll(sender, conversation) {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/${sender}/${conversation}/inbox`);
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