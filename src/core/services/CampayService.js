import http from '../utils/campay-http'
import config from '../utils/config'
import localstorage from '../utils/localstorage'

class CampayService {
    payInscription(numero) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "Creation de votre compte d´investisseur sur la plateforme Invest & Partners",
            external_reference: "",
            external_user: ""
        };

        return new Promise((resolve, reject) => {
            http.post('collect/', data)
                .then(response => {
                    resolve(response.data);
                },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    payProjet(numero) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "Etude de votre projet sur la plateforme Invest & Partners",
            external_reference: "",
            external_user: ""
        };

        return new Promise((resolve, reject) => {
            http.post('collect/', data)
                .then(response => {
                    resolve(response.data);
                },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    checkPayment(reference) {
        return new Promise((resolve, reject) => {
            http.get('transaction/' + reference + '/').then(
                response => {
                    resolve(response.data);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    token() {
        const data = {
            username: config.CAMPAY_USERNAME,
            password: config.CAMPAY_PASSWORD
        }
        return new Promise((resolve, reject) => {
            http.post('token/', data)
                .then(response => {
                    localstorage.set('campay-token', response.data.token);
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}


export default new CampayService();