import { Container } from '../../components';

import eventImg from '../../assets/img/events2.jpeg';
import ene from '../../assets/img/ip-13.jpg';
import placeholder from '../../assets/img/ip-13.jpg';

import '../../styles/event.scss';

import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, LinearProgress, CircularProgress, Button as Btn } from '@mui/material';

import React from 'react';
import { Link, useHistory } from "react-router-dom"

import { Modal } from 'react-bootstrap';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { moneyFormat, sleep } from '../../core/utils/helpers'

import moment from 'moment';
import 'moment/locale/fr';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import { EventService, CampayService, PaiementService } from '../../core/services'

import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const currentMonth = moment().month();
const currentYear = moment().year();

const Event = ({ t, user }) => {

    const [events, setEvents] = React.useState([]);
    const [months, setMonths] = React.useState([]);
    const [event, setEvent] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [etat, setEtat] = React.useState({
        message: '',
        error: false,
        success: false,
    })
    const [participation, setParticipation] = React.useState({
        nom_complet: '',
        email: '',
        telephone: '',
        places: 0
    })
    const [methodPaiement, setMethodPaiement] = React.useState('OM')
    const [numero, setNumero] = React.useState('')
    const [paiement, setPaiement] = React.useState({
        pending: false,
        failed: false,
        message: ''
    })

    
    const loc = useGeoLocation();
    const history = useHistory()

    const onParticipate = (event) => {
        history.push(`/events/${event.id}/paiement`)
    }

    const onChangeForm = (key, value) => {
        setParticipation(prevData => {
            return { ...prevData, [key]: value }
        })
    }

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEtat(prevData => {
            return { ...prevData, error: false }
        });
    };

    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEtat(prevData => {
            return { ...prevData, success: false }
        });
    };

    const hideParticipate = () => {
        setVisible(false);
    }

    const handleParticipe = (trans = "") => {
        EventService.participate(event?.id, participation).then(
            async (rs) => {
                fetchData();
                hideParticipate();
                await PaiementService.save(rs?.id, {
                    trans_id: trans,
                    methode: methodPaiement,
                    telephone: numero,
                    montant: event?.prix * participation?.places,
                    type: "EVENT",
                    etat: "REUSSI",
                    event: event?.id,
                    participant: true
                });
                setEtat({ error: false, success: true, message: 'Votre réservation a été effectuée' });
                setParticipation({
                    nom_complet: '',
                    email: '',
                    telephone: '',
                    places: 0
                })
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setEtat({ error: true, success: false, message: resMessage });
            }
        )
    }




    const fetchData = () => {
        setLoading(true);
        EventService.getAll().then(
            (data) => {
                setLoading(false);
                setEvents(data?.data?.data?.all);
                setMonths(data?.data?.data?.month);
            }
        )
    };

    React.useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            fetchData();
        }
        return () => { isMounted = false };
    }, [])

    React.useEffect(() => {
        if (user) {
            setParticipation({
                nom_complet: user?.nom_complet,
                email: user?.email,
                telephone: user?.telephone,
                places: 0
            })
        }
    }, [user])

    return (
        <Container header active="events" footer>
            <div className="d-flex flex-column align-items-center justify-content-center event-header text-white text-center" style={{ background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${eventImg})` }}>
                <h3 className="fw-default-title text-uppercase" style={{ fontSize: '3.5rem' }}>{t('event.title')}</h3>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6 mb-4">
                        <h3 className="fw-default-title event-all-list-title text-uppercase" style={{ fontSize: '3em' }}>
                            {t('event.header')}
                        </h3>
                        <p className="event-all-list-text">
                            {t('event.text')}
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center">
                        <img src={ene} className="img-fluid rounded shadow" alt="" width="600" />
                    </div>
                </div>
                <div className="title-events mt-5 text-uppercase">
                    {t('event.sub_title._1')}
                </div>
                <div className="row">
                {(months || []).filter(item => moment(item.date_debut).month() === currentMonth && moment(item.date_debut).year() === currentYear).length <= 0 && (
                    <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
                        {loading && (<CircularProgress />)}
                        {!loading && (
                            <h5 className="fw-bolder text-muted">
                                {t('not_found.event')}
                            </h5>
                        )}
                    </div>
                )}
                {(months || []).filter(item => moment(item.date_debut).month() === currentMonth && moment(item.date_debut).year() === currentYear).map((item, index) => (
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="events-autre-item shadow">
                            <div className="events-autre-item-img">
                                <div className="position-relative" style={{ height: 'inherit' }}>
                                    <img src={item.image ? item.image : placeholder} className="shadow w-100" style={{ objectFit: 'cover' }} alt="" />
                                    <div className="event-autre-item-img-cover position-absolute">
                                        <div className="button-price-events-component">{item.prix ? item.prix : 0} FCFA</div>
                                        <div className="button-bookmark-events-component">{item.prix ? 'Payant' : 'Gratuit'}</div>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted small" style={{ fontSize: ".8em" }}>
                                {t('event.organise')} INVEST AND PARTNERS
                            </small>
                            <h3 className="fw-default-title" style={{ margin: '.5em 0' }}>
                                {item.libelle}
                            </h3>
                            <div className="d-flex align-items-center w-100 mt-1">
                                <GoCalendar />
                                <p className="lh-sm fs-6 ml-1">{moment(item.date_debut).format("DD MMMM YYYY")} | <small>{t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}</small></p>
                            </div>
                            <div className="d-flex align-items-center w-100 mt-1">
                                <GoLocation />
                                <p className="lh-sm fs-6 ml-1">{item.lieu}</p>
                            </div>
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ my: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey' }}><div>{t('event.places.restant')}</div><div>{item.total_reserve}/{item.places}</div></div>
                                    <LinearProgress sx={{ width: '100%' }} variant="determinate" value={(item.total_reserve * 100) / item.places} />
                                </Box>
                            </Box>
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <Btn disabled={item.places === item.total_reserve} variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => onParticipate(item)}>{item.places === item.total_reserve ? t('button.complet') : t('button.participer')}</Btn>
                                <Btn color="primary" className="btn-rounded btn-default px-2" onClick={(e) => history.push(`events/${item.id}`)}>{t('button.savoir')}</Btn>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <div className="title-events mt-5 text-uppercase">
                    {t('event.sub_title._2')}
                </div>
                <div className="row">
                {(events || []).filter(item => moment(item.date_debut).month() !== currentMonth || moment(item.date_debut).year() !== currentYear).length <= 0 && (
                    <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
                        {loading && (<CircularProgress />)}
                        {!loading && (
                            <h5 className="fw-bolder text-muted">
                                {t('not_found.event')}
                            </h5>
                        )}
                    </div>
                )}
                {(events || []).filter(item => moment(item.date_debut).month() !== currentMonth || moment(item.date_debut).year() !== currentYear).map((item, index) => (
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="events-autre-item shadow">
                            <div className="events-autre-item-img">
                                <div className="position-relative" style={{ height: 'inherit' }}>
                                    <img src={item.image ? item.image : placeholder} className="shadow w-100" style={{ objectFit: 'cover' }} alt="" />
                                    <div className="event-autre-item-img-cover position-absolute">
                                        <div className="button-price-events-component">{item.prix ? item.prix : 0} FCFA</div>
                                        <div className="button-bookmark-events-component">{item.prix ? 'Payant' : 'Gratuit'}</div>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted small" style={{ fontSize: ".8em" }}>
                                {t('event.organise')} INVEST AND PARTNERS
                            </small>
                            <h3 className="fw-default-title" style={{ margin: '.5em 0' }}>
                                {item.libelle}
                            </h3>
                            <div className="d-flex align-items-center w-100 mt-1">
                                <GoCalendar />
                                <p className="lh-sm fs-6 ml-1">{moment(item.date_debut).format("DD MMMM YYYY")} | <small>{t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}</small></p>
                            </div>
                            <div className="d-flex align-items-center w-100 mt-1">
                                <GoLocation />
                                <p className="lh-sm fs-6 ml-1">{item.lieu}</p>
                            </div>
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ my: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey' }}><div>{t('event.places.restant')}</div><div>{item.total_reserve}/{item.places}</div></div>
                                    <LinearProgress sx={{ width: '100%' }} variant="determinate" value={(item.total_reserve * 100) / item.places} />
                                </Box>
                            </Box>
                            <div className="d-flex justify-content-between align-items-center w-100">
                                {!item.isPast && item.places > item.total_reserve &&
                                    <Btn variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => onParticipate(item)}>
                                        {item.places === item.total_reserve ? t('button.complet') : t('button.participer')}
                                    </Btn>
                                }
                                <Btn color="primary" className="btn-rounded btn-default px-2" onClick={(e) => history.push(`events/${item.id}`)}>{t('button.savoir')}</Btn>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>


            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrighterror" open={etat.error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                    {etat.message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={etat.success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
                    {etat.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}

const mapStateToProps = (state) => ({ user: state.auth.user })

export default withTranslation()(connect(mapStateToProps)(Event));