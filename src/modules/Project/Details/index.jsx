import React from "react";

import { Badge, Modal } from 'react-bootstrap';

import Videoplay from './components/Videoplay';
import Description from "./components/Description";
import EnteteProjet from './components/EnteteProjet';
import Post from "./components/Post";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import { ProjetService, MessageService } from '../../../core/services';
import { Container } from '../../../components'

import { moneyFormat } from '../../../core/utils/helpers';

import '../../../styles/detailProjet.scss'

import { connect } from "react-redux";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { withTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const News = (props) => { return (<Post {...props} />); };

const ProjetDetails = ({ match, user, t, location }) => {

    const { params: { projet } } = match;
    const [details, setProjetDetails] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [loadingData, setLoadingData] = React.useState(false);
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
        setMessage("Bonjour, je m'appelle " + user?.nom_complet + ". Je suis un investisseur sur votre plateforme \"IP INVESTMENT S.A.\". Je suis intéressé par le projet \"" + details?.intitule + "\" et je souhaite avoir plus de détails sur celui-ci.")
    }

    const sendMessage = (e) => {
        const data = {
            body: message,
            projet: details?.id
        }

        setLoading(true)

        MessageService.interesse(user?.id, details?.secteur_data?.conseiller_data?.id, data).then(
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
        const fetchData = async () => {
            setLoadingData(true);
            try {
                const rs = await ProjetService.getOneProjet(projet);
                setProjetDetails(rs.data.data);
                setLoadingData(false);
            } catch (error) {
                setLoadingData(false);
            }

        }

        fetchData();
    }, [projet]);

    const checkCanFianance = () => {
        if (details?.etat === "CLOTURE") return false;
        return true;
    }

    const checkUserCanInvest = () => {
        if (!user) return false;

        if (!user?.role === 4) return false;

        if (!user?.profil_invest) return false;

        return true;
    }

    const checkUserCanInvestWithPlage = () => {
        if (user?.profil_invest?.montant_max && (user?.profil_invest?.montant_max >= +details?.financement)) {
            return true;
        }

        return false;
    }

    const checkFileIsVideo = () => {
        const format = ['mp4', 'avi', 'mkv', 'm4v', 'mpg', 'mpeg', 'mov', '3gp', 'webm'];
        return format.includes(details?.doc_presentation?.split('.')?.pop())
    }

    return (
        <Container header footer headerActive active="projets">
            {!details ? (
                <div className="col-12 d-flex justify-content-center align-items-center" style={{ minHeight: "40rem" }}>
                    {loadingData && (<CircularProgress />)}

                    {!loadingData && (
                        <h5 className="fw-bolder text-muted">
                            {t('projet.not_found_projet_1')}
                        </h5>
                    )}
                </div>
            ) : (
                <div className="container mt-5 py-5">
                    <div className="my-5">
                        <Grid container columnSpacing={6} rowSpacing={3} alignItems="stretch">
                            <Grid item md={4} sm={12}>
                                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                    <EnteteProjet
                                        projet={details}
                                        errorMessage={(value) => setRsMessage(value)}
                                        setError={(value) => setError(value)}
                                        user={user}
                                        t={t}
                                    />

                                    {checkUserCanInvest() ? (
                                        checkCanFianance() ? (
                                            checkUserCanInvestWithPlage() ? (
                                                <div className="w-100 d-flex justify-content-center align-items-center">
                                                    <Button variant="contained" size="small" onClick={openMessage} className="btn-rounded btn-default w-50">{t('projet.details.btn._1')}</Button>
                                                </div>
                                            ) : (
                                                <p className="text-center">{t('projet.details.text.plage._1')} <Link to="/investor/profil">{t('projet.details.text.plage._2')}</Link></p>
                                            )
                                        ) : (
                                            <p className="text-center">{t('projet.details.text.done._1')} <Link to="/projets">{t('projet.details.text.done._2')}</Link> {t('projet.details.text.done._3')}</p>
                                        )
                                    ) : (
                                        <p className="text-center">{t('projet.details.text.auth._1')} <Link to={{ pathname: "/auth", search: "?page=login", state: { from: location } }} >{t('projet.details.text.auth._2')}</Link> {t('projet.details.text.auth._3')} <Link to={{ pathname: "/auth", search: "?page=register", state: { from: location } }}>{t('projet.details.text.auth._4')}</Link>.</p>
                                    )}
                                </div>

                                <div className="card border-0 shadow-sm rounded-lg mt-4">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <Badge pill bg="primary">
                                                {details?.secteur_data?.libelle}
                                            </Badge>
                                            <Badge pill bg={`${details?.etat === 'CLOTURE' ? 'success' : 'secondary'}`}>
                                                {`${details?.etat === 'CLOTURE' ? t('projet.etat.done') : t('projet.etat.ongoing')}`}
                                            </Badge>
                                        </div>

                                        <p className="fs-6" style={{ marginBottom: 10 }}>
                                            <span className="fw-bolder">{t('projet.details.localize')} : {" "} </span>
                                            {details?.ville_activite}, {details?.pays_activite}
                                        </p>
                                        <p className="fs-6" style={{ marginBottom: 10 }}>
                                            <span className="fw-bolder">{t('projet.details.taux')} :{" "} </span>
                                            {details?.taux_rentabilite ? details?.taux_rentabilite + '%' : t('projet.other._2')}
                                        </p>
                                        <p className="fs-6" style={{ marginBottom: 10 }}>
                                            <span className="fw-bolder">{t('projet.details.ca')} : {" "}</span>
                                            {details?.ca_previsionnel ? moneyFormat(details?.ca_previsionnel) + ' FCFA' : t('projet.other._2')}
                                        </p>
                                        <p className="fs-6" style={{ marginBottom: 10 }}>
                                            <span className="fw-bolder">{t('projet.details.duree')} :{" "}</span>
                                            {details?.duree ? `${details?.duree} ${t('projet.other._1')}` : t('projet.other._2')}
                                        </p>
                                        <p className="fs-6" style={{ marginBottom: 10 }}>
                                            <span className="fw-bolder">{t('projet.details.dead_line')} :{" "}</span>
                                            {details?.rsi ? `${details?.rsi} ${t('projet.other._1')}` : t('projet.other._2')}
                                        </p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item md={8} sm={12}>
                                <div className="bg-light shadow h-100 px-4">
                                    {checkFileIsVideo() &&
                                        <div className="embed-responsive embed-responsive-1by1 mb-5 bg-transparent">
                                            <Videoplay video={details?.doc_presentation} />
                                        </div>
                                    }

                                    <div className="card-body">
                                        <h4 className="fw-bolder">{t('projet.details.desc')}</h4>
                                        <p className="text-muted">{details?.description}</p>
                                    </div>

                                    {(details?.actualites || []).length > 0 && (
                                        <div className="card-body">
                                            <h4 className="fw-bolder">{t('projet.details.actu')}</h4>
                                            <div className="row gy-3 mt-1">
                                                {(details?.actualites || []).map((actualite, index) => (
                                                    <div className="col-md-6" key={index}>
                                                        <News actualite={actualite} logo={details?.logo} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
            }

            <Modal
                show={visible}
                onHide={hidePayement}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!loading}>
                    <Modal.Title>{t('projet.other.modal.title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">{t('projet.other.modal.message')}</h6>
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
                                    {t('projet.other.modal.btn')}
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
        </Container >
    );
};

function mapStateToProps(state) {
    return ({ user: state.auth.user });
}

export default withTranslation()(connect(mapStateToProps)(ProjetDetails));