import React from 'react';

import { Container } from '../../components'

import '../../styles/contact.scss'

import { setLoadingTrue, setLoadingFalse } from '../../core/reducers/app/actions'

import { ContactService } from '../../core/services'

import { connect } from 'react-redux'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingTrue: () => dispatch(setLoadingTrue()),
        setLoadingFalse: () => dispatch(setLoadingFalse())
    }
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = (props) => {
    const [state, setState] = React.useState({
        nom_complet: '',
        email: '',
        object: '',
        message: ''
    })

    const [message, setMessage] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    };

    const handelOnChange = (key, value) => {
        setState(prevState => {
            return {...prevState, [key]: value}
        })
    }

    const handelOnSubmit = (e) => {
        e.preventDefault();
        props.setLoadingTrue();
        ContactService.send(state).then(
            () => {
                setSuccess(true);
                props.setLoadingFalse();
                setMessage("Votre message a été envoyé ");
            },
            error => {
                const rsMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(rsMessage);
                props.setLoadingFalse();
                setError(true);
            }
        );
    }

    return (
        <Container header footer headerActive active="contact">
            <div className="contact">
                <div className="container-md">
                    <div className="d-flex justify-content-center mb-5">
                        <h1 className="heading-section">Contactez nous</h1>
                    </div>
                    <div className="row gy-4 mb-5">
                        <div className="col-md-12">
                            <div className="row mb-5">
                                <div className="col-md-4">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <i className="bi bi-map-fill"></i>
                                            {/* <span className="fa fa-map-marker"></span> */}
                                        </div>
                                        <div className="text">
                                            <p><span>Adresse:</span> BP: 2308 Douala, Cameroun</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {/* <span className="fa fa-phone"></span> */}
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>
                                        <div className="text">
                                            <p><span>Téléphone:</span> <a href="tel://1234567920">(+237) 6 55 45 90 79</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            {/* <span className="fa fa-paper-plane"></span> */}
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p><span>Email:</span> <a href="mailto:info@invest--partners.com">info@invest--partners.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row g-0 ff">
                                <div className="col-md-7 kjk">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Envoyez-nous un message</h3>
                                        {/* <div id="form-message-warning" className="mb-4"></div> */}
                                        <form  className="contactForm" onSubmit={handelOnSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" for="name">Nom complet</label>
                                                        <input type="text" className="form-control" onChange={(e) => handelOnChange('nom_complet', e.target.value)} placeholder="Nom" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" for="email">Email</label>
                                                        <input type="email" className="form-control" onChange={(e) => handelOnChange('email', e.target.value)} placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" for="subject">Objet</label>
                                                        <input type="text" className="form-control" onChange={(e) => handelOnChange('object', e.target.value)} placeholder="Objet" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label">Message</label>
                                                        <textarea name="message" className="form-control" onChange={(e) => handelOnChange('message', e.target.value)} cols="30" rows="4" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-4 d-flex justify-content-end">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary">Envoyer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-stretch rt">
                                    <div className="info-wrap w-100  img imageRight" >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrighterror" open={error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
};
export default connect(null, mapDispatchToProps)(Contact);