import { Container } from '../../components';

import eventImg from '../../assets/img/events.png';
import ene from '../../assets/img/ene.png';

import '../../styles/event.scss';

import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, LinearProgress, CircularProgress, Button as Btn } from '@mui/material';

import React from 'react';

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

import { moneyFormat } from '../../core/utils/helpers'

import moment from 'moment';
import 'moment/locale/fr';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import { EventService, CampayService } from '../../core/services'

import { withNamespaces } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Event = ({ t, history }) => {

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

    const openParticipate = (event) => {
        setEvent(event);
        setVisible(true);
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

    const handleParticipe = () => {
        EventService.participate(event?.id, participation).then(
            (rs) => {
                fetchData();
                hideParticipate();
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

    const checkSeat = () => {
        EventService.checkSeat(event?.id, participation).then(
            (rs) => {
                handleParticipe()
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

    const payementDone = () => {
        setVisible(false);
        setNumero('');
        setPaiement({
            pending: false,
            failed: false,
            message: ''
        });
        setMethodPaiement('OM')
    }

    const countdown = (refrence) => {
        let x = setInterval(async () => {
            try {
                const rs = await CampayService.checkPayment(refrence);
                if (rs.status === "FAILED") {
                    clearInterval(x);
                    setPaiement({ pending: false, failed: true, message: `La transaction a échoué. Essayez à nouveau` });
                } else if (rs.status === "SUCCESSFUL") {
                    clearInterval(x);
                    payementDone()
                    handleParticipe();
                }
            } catch (error) {
                console.log(error);
            }
        }, 5000);
    }

    const payer = () => {
        EventService.checkSeat(event?.id, participation).then(
            async (rs) => {
                setPaiement({ pending: true, failed: false, message: '' });
                try {
                    const rs = await CampayService.payEvent(numero, event?.prix * participation?.places);
                    let messageP = 'La transaction ';

                    if (methodPaiement === 'MOMO') {
                        messageP = messageP + 'MTN Mobile Money'
                    }

                    if (methodPaiement === 'OM') {
                        messageP = messageP + 'Orange Money'
                    }

                    setPaiement((prevData) => {
                        return { ...prevData, message: `${messageP} a été initiée. Veuillez composer ${rs.ussd_code} sur votre téléphone pour valider la transaction.` }
                    });

                    countdown(rs.reference);
                } catch (error) {
                    setPaiement({ pending: false, failed: true, message: '' });
                    console.log(error);
                }
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
                setEvents(data.data.data.all);
                setMonths(data.data.data.month);
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

    return (
        <Container header active="events" footer>
            <div className="d-flex flex-column align-items-center justify-content-center event-header text-white text-center" style={{ backgroundImage: `url(${eventImg})` }}>
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
                    {t('event.sub._1')}
                </div>
                <div className="row">
                    {(months || []).length <= 0 && (
                        <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
                            {loading && (<CircularProgress />)}
                            {!loading && (
                                <h5 className="fw-bolder text-muted">
                                    {t('not_found.event')}
                                </h5>
                            )}
                        </div>
                    )}
                    {(months || []).map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="events-autre-item shadow">
                                <div className="events-autre-item-img">
                                    <div className="position-relative" style={{ height: 'inherit' }}>
                                        <img src={item.image ? item.image : ene} className="shadow w-100" style={{ objectFit: 'cover' }} alt="" />
                                        <div className="event-autre-item-img-cover position-absolute">
                                            <div className="button-price-events-component">{item.prix ? item.prix : 0} XAF</div>
                                            <div className="button-bookmark-events-component">{item.prix ? 'Payant' : 'Gratuit'}</div>
                                            {/* <div className="button-bookmark-events-component">{item.bookmark ? <BsBookmarkFill fill='#c5473b' size={15} /> : <BsBookmark fill='#c5473b' size={15} />}</div> */}
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
                                    <p className="lh-sm fs-6 ml-1">{moment(item.date_evenement).format("DD MMMM YYYY")} | <small>{t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}</small></p>
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
                                    <Btn disabled={item.places === item.total_reserve} variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => openParticipate(item)}>{item.places === item.total_reserve ? t('button.complet') : t('button.participer')}</Btn>
                                    <Btn variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => history.push(`events/${item.id}`)}>{t('button.savoir')}</Btn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="title-events mt-5 text-uppercase">
                    {t('event.sub._2')}
                </div>
                <div className="row">
                    {(events || []).length <= 0 && (
                        <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
                            {loading && (<CircularProgress />)}
                            {!loading && (
                                <h5 className="fw-bolder text-muted">
                                    {t('not_found.event')}
                                </h5>
                            )}
                        </div>
                    )}
                    {(events || []).map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="events-autre-item shadow">
                                <div className="events-autre-item-img">
                                    <div className="position-relative" style={{ height: 'inherit' }}>
                                        <img src={item.image ? item.image : ene} className="shadow w-100" style={{ objectFit: 'cover' }} alt="" />
                                        <div className="event-autre-item-img-cover position-absolute">
                                            <div className="button-price-events-component">{item.prix ? item.prix : 0} XAF</div>
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
                                    <p className="lh-sm fs-6 ml-1">{moment(item.date_evenement).format("DD MMMM YYYY")} | <small>{t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}</small></p>
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
                                    <Btn disabled={item.places === item.total_reserve} variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => openParticipate(item)}>{item.places === item.total_reserve ? t('button.complet') : t('button.participer')}</Btn>
                                    <Btn variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => history.push(`events/${item.id}`)}>{t('button.savoir')}</Btn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                show={visible}
                onHide={hideParticipate}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!paiement.pending}>
                    <Modal.Title>Participation à l'évenement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-1 lh-base text-center">Vous voulez participer à l'évenement <strong>{event?.libelle}</strong></p>
                    {event?.prix ? (
                        <p className="mb-1 text-muted text-center">La participation à cette évenement coûtera <strong>{moneyFormat(event?.prix * participation?.places)} XAF</strong></p>
                    ) : (
                        <p className="mb-1 text-muted text-center">La participation à cette évenement est gratuit</p>
                    )}
                    <hr />
                    <h5 className="fw-bolder my-1">Informations personnelles</h5>
                    <Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    required
                                    size="small"
                                    type="text"
                                    variant="filled"
                                    label="Nom complet"
                                    placeholder="Nom & prenom"
                                    value={participation.nom_complet}
                                    onChange={(e) => onChangeForm('nom_complet', e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    required
                                    size="small"
                                    type="email"
                                    variant="filled"
                                    label="Email"
                                    placeholder="example@domaine.com"
                                    value={participation.email}
                                    onChange={(e) => onChangeForm('email', e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    required
                                    variant="filled"
                                    label="Téléphone"
                                    placeholder="Téléphone"
                                    type="tel"
                                    value={participation.telephone}
                                    onChange={(e) => onChangeForm('telephone', e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    required
                                    variant="filled"
                                    label="Nombre places"
                                    placeholder="Places"
                                    type="number"
                                    InputProps={{ inputProps: { min: 0, max: event?.places - event?.total_reserve } }}
                                    value={participation.places || ''}
                                    onChange={(e) => onChangeForm('places', +e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2}>
                        {event?.prix && (
                            <Grid item xs={12} md={12}>
                                <FormControl component="fieldset" sx={{ my: .5, width: "100%" }} className="d-flex flex-column align-items-center">
                                    <h6 className="fw-bolder">Choisir le moyen de paiement</h6>
                                    <RadioGroup
                                        row
                                        value={methodPaiement || 'OM'}
                                        onChange={(e, value) => setMethodPaiement(value)}
                                    >
                                        <FormControlLabel value="OM" control={<Radio />} label="Orange Money" />
                                        <FormControlLabel value="MOMO" control={<Radio />} label="MTN Mobile Money" />
                                        {/* <FormControlLabel value="MASTER_CARD" control={<Radio />} label="Master card" /> */}
                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                    <h6 className="fw-bolder mt-2 text-center">Votre numéro de téléphone</h6>
                                    <PhoneInput
                                        defaultCountry={loc.country}
                                        placeholder="Numéro de téléphone"
                                        value={numero || ''}
                                        onChange={setNumero}
                                    />

                                </FormControl>
                                <p className="my-2 text-center fw-bolder">{paiement.message}</p>
                                {/* <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <h6 className="fw-bolder">Votre carte bancaire</h6>
                                <input type="text" />
                            </FormControl> */}
                            </Grid>
                        )}

                        <Grid item xs={12} md={12}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                {event?.prix ? (
                                    <LoadingButton
                                        className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                        loading={paiement.pending}
                                        disabled={!numero}
                                        onClick={payer}
                                        variant="contained"
                                    >
                                        Payer
                                    </LoadingButton>
                                ) : (
                                    <LoadingButton
                                        className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                        onClick={checkSeat}
                                        variant="contained"
                                    >
                                        Participer
                                    </LoadingButton>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                    {/*  */}
                </Modal.Body>
            </Modal>
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

export default withNamespaces()(Event);