import React from "react";

import { Row, Col } from 'react-bootstrap';

import Videoplay from './components/Videoplay';
import Description from "./components/Description";
import EnteteProjet from './components/EnteteProjet';
import Post from "./components/Post";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';

import { ProjetService, MessageService } from '../../../core/services';
import { Container } from '../../../components'

import { moneyFormat } from '../../../core/utils/helpers';

import '../../../styles/detailProjet.scss'

import { Modal } from 'react-bootstrap';
import { connect } from "react-redux";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const News = () => { return (<Post />); };

const ProjetDetails = ({ match, location, history, user }) => {

    const { params: { projet } } = match;
    const [details, setProjetDetails] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [rs_message, setRsMessage] = React.useState('');

    const hidePayement = () => {
        setVisible(false);
        setMessage('')
    }

    const openMessage = (e) => {
        setVisible(true);
        setMessage("Bonjour, je m'appelle " + user?.nom_complet + ". Je suis un investisseur sur votre plateforme \"Invest & Partners\". Je suis intéressé par le projet \"" + details?.intitule + "\" et je souhaite avoir plus de détails sur celui-ci.")
    }

    const sendMessage = (e) => {
        const data = {
            body: message,
            projet: details?.id
        }

        setLoading(true)

        MessageService.send(user?.id, details?.secteur_data?.conseiller_data?.id, data).then(
            (rs) => {
                hidePayement();
                setSuccess(true);
                setRsMessage('Votre message a été envoyé avec succès')
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setRsMessage(resMessage);
                setError(true)
            }
        )

        setLoading(false)
    }


    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    };

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    React.useEffect(() => {
        async function fetchData() {
            const rs = await ProjetService.getOneProjet(projet);
            setProjetDetails(rs.data.data);
        }
        fetchData();
    }, [projet]);

    const checkFileIsVideo = (file) => {
        const format = ['mp4', 'avi', 'mkv', 'm4v', 'mpg', 'mpeg', 'mov', '3gp'];
        return format.includes(file?.split('.')?.pop())
    }

    return (
        <Container header footer headerActive active="projets">
            <div className="container mt-5 py-5">
                <div className="corpsDetail">
                    <Row>
                        <Col>
                            <div className="entete2 d-flex justify-content-center">
                                <EnteteProjet projet={details} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="my-5">
                    <Row>
                        {checkFileIsVideo(details?.doc_presentation) && (
                            <Col lg={true} >
                                <div className="shadow embed-responsive embed-responsive-1by1 h-100">
                                    <Videoplay video={details?.doc_presentation} />
                                </div>
                            </Col>
                        )}
                        <Col lg={true} >
                            <div className="card shadow rounded">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><span className="fw-bolder">Catégorie :</span> {details?.secteur_data?.libelle}</li>
                                        <li className="list-group-item mt-1"><span className="fw-bolder">Localité :</span> {details?.ville_activite}, {details?.pays_activite}</li>
                                        {/* <li className="list-group-item mt-1"><span className="fw-bolder">Montant minimum d'investissement :</span> {details?.ville_activite} XAF</li> */}
                                        <li className="list-group-item mt-1"><span className="fw-bolder">Taux de rentabilité :</span> {details?.taux_rentabilite ? details?.taux_rentabilite + '%' : 'Non defini'}</li>
                                        <li className="list-group-item mt-1"><span className="fw-bolder">Chiffre d'affaires :</span> {details?.ca_previsionnel ? moneyFormat(details?.ca_previsionnel) + '%' : 'Non defini'}</li>
                                        <li className="list-group-item mt-1"><span className="fw-bolder">Durée du projet :</span>{details?.duree ? details?.duree + ' ans' : 'Non defini'}</li>
                                        <li className="list-group-item mt-1"><span className="fw-bolder">Retour sur investissement :</span> {details?.rsi ? details?.rsi + ' ans' : 'Non defini'}</li>
                                    </ul>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center py-3">
                                    <div className="d-flex align-items-center fw-bolder">
                                        <span className="me-2"><i className="bi bi-heart"></i></span>
                                        <span>Ajouter au favoris</span>
                                    </div>
                                    <div>
                                        <button onClick={openMessage} className="btn btn-primary btn-sm rounded" type="button">Je suis interessé</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="infoProj"><InformationsProjet /></div> */}
                        </Col>
                    </Row>
                </div>
                <div className="navigation mt-2">
                    <Row>
                        <Col lg={true} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="nav nav-pills nav-fill profile-nav" role="tablist">
                                        <button className="nav-link active fw-bolder fs-5 mr-1" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">
                                            Description
                                        </button>
                                        <button className="nav-link fw-bolder fs-5" id="nav-news-tab" data-bs-toggle="tab" data-bs-target="#nav-news" type="button" role="tab" aria-controls="nav-news" aria-selected="false">
                                            Actualités
                                        </button>
                                        {/* <button className="nav-link fw-bolder fs-5" id="nav-securite-tab" data-bs-toggle="tab" data-bs-target="#nav-securite" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                    Securité
                                                </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="container rounded border shadow bg-white my-5" >
                                <div className="tab-content mh-100">
                                    <div className="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="desc-tab">
                                        <Description desc={details?.description || ''} />
                                    </div>
                                    <div className="tab-pane fade" id="nav-news" role="tabpanel" aria-labelledby="news-tab">
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="mb-2"></div>
                                            <News />
                                            <div className="mb-2"></div>
                                            <News />
                                            <div className="mb-2"></div>
                                            <News />
                                            <div className="mb-2"></div>
                                            <News />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-question" role="tabpanel" aria-labelledby="question-tab">
                                    </div>
                                </div>
                            </div>
                            {/* <Tabs defaultActiveKey="description" className="projet-details-tab">
                                        <Tab eventKey="description" title="Histoire" className="projet-details-tab-header">
                                            <Description />
                                        </Tab>
                                        <Tab eventKey="actualite" title="Actualités">
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="question" title="Questions">
                                            <Question />
                                        </Tab>
                                    </Tabs> */}
                        </Col>
                    </Row>
                </div>
            </div>

            <Modal
                show={visible}
                onHide={hidePayement}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!loading}>
                    <Modal.Title>Vous êtes intéressé par ce projet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Votre message</h6>
                                <TextField
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                    label="Message"
                                    placeholder="Message"
                                    variant="filled"
                                    multiline
                                    rows={5}
                                    value={message || ''}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <LoadingButton
                                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                    loading={loading}
                                    disabled={!message}
                                    onClick={sendMessage}
                                    variant="contained"
                                >
                                    Envoyer le message
                                </LoadingButton>
                            </div>
                        </Grid>
                    </Grid>
                </Modal.Body>
            </Modal>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                    {rs_message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright2" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
                    {rs_message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

function mapStateToProps(state) {
    return ({ user: state.auth.user });
}

export default connect(mapStateToProps)(ProjetDetails);