import http from '../utils/http-common';

const source = "api/app";

class AppService {
    experts() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/expert`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    slider() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/slider`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    partenaire() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/partenaire`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    actualitesecteur (){
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/actualites`);
                resolve(rs.data); 
            } catch (error) {
                reject(error);
            }
        });
    };

    projet() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/projet`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }

    chiffre() {
        return new Promise(async (resolve, reject) => {
            try {
                const rs = await http.get(`${source}/chiffre`);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default new AppService();