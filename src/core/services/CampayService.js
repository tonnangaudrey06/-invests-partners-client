import http from '../utils/campay-http'
import config from '../utils/config'
import localstorage from '../utils/localstorage'

class CampayService {
    payInscription(numero, montant) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "creation de votre compte d´investisseur sur la plateforme IP INVESTMENT S.A.",
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

    payEvent(numero, montant) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "participation à un événement organiser par IP INVESTMENT S.A.",
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

    payProjet(numero, montant) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "étude de votre projet sur la plateforme IP INVESTMENT S.A.",
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

    payPlage(numero, montant) {
        const data = {
            amount: 5,
            currency: "XAF",
            from: numero,
            description: "frais d'abonement à une plage d'investissement sur la plateforme IP INVESTMENT S.A.",
            external_reference: "",
            external_user: ""
        };

        console.log(numero)

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

    payVisa(amount, description, user = null) {
        const data = {
            amount,
            currency: "FCFA",
            description,
            redirect_url: "",
            payment_options: "CARD",
            first_name: user?.firstName || "",
            last_name: user?.lastName || "",
            email: user?.email || ""
        };

        return new Promise((resolve, reject) => {
            http.post('get_payment_link/', data)
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