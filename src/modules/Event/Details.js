import { Container } from '../../components';

import * as React from 'react';

import { GoCalendar, GoClock, GoLocation } from 'react-icons/go';
import { BiMoney } from 'react-icons/bi';

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  TextField,
  Snackbar,
  Grid
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MuiAlert from '@mui/material/Alert';

import { Modal } from 'react-bootstrap';

import eventImg from '../../assets/img/events.png';
import ene from '../../assets/img/ip-13.jpg';

import '../../styles/event.scss';

import { moneyFormat, sleep } from '../../core/utils/helpers'

import moment from 'moment';
import 'moment/locale/fr';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import { connect } from "react-redux";

import { EventService, CampayService, PaiementService } from '../../core/services';

import { withNamespaces } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EventDetails = ({ t, match, user }) => {
  const { params: { id } } = match;

  const [event, setEvent] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);
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

  const openParticipate = () => {
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

  const countdown = async (refrence) => {
    let status = "PENDING";
    setPaiement({ ...paiement, pending: true, failed: false });

    while (status === "PENDING" || status === "ERROR") {
      try {
        const rs = await CampayService.checkPayment(refrence);
        status = rs.status;
        if (rs.status !== "PENDING") {
          break;
        }
        await sleep(5000);
      } catch (error) {
        status = "ERROR";
        console.error(error);
        break;
      }
    }

    switch (status) {
      case "SUCCESSFUL":
        payementDone()
        handleParticipe(refrence);
        break;
      case "FAILED":
        setPaiement({ pending: false, failed: true, message: `La transaction a échoué. Essayez à nouveau` });
        break;
      default:
        // setPaiement({ pending: false, failed: true });
        // setMessagePay(`La transaction a échoué. Essayez à nouveau`);
        await countdown(refrence)
        break;
    }
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
          console.error(error);
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
    EventService.getOne(id).then(
      (data) => {
        setEvent(data.data.data);
      }
    )
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Container header headerActive active="Events" footer>
      <div style={{ backgroundImage: `url(${eventImg})` }} className="event-details-bg-image">
        <div className="blur"></div>
      </div>

      <div className="event-details shadow row g-2 bg-white">
        <section className="col-md-4 m-0 p-4">
          <section className="event-details-image shadow">
            <img src={event?.image ? event?.image : ene} alt="" />
          </section>
          <Box sx={{ mb: 5 }}>
            <Box sx={{ my: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey' }}><div>{t('event.places.restant')}</div><div>{event?.total_reserve}/{event?.places}</div></div>
              <LinearProgress sx={{ width: '100%' }} variant="determinate" value={(event?.total_reserve * 100) / event?.places} />
            </Box>
          </Box>
          {!event?.isPast && event?.places > event?.total_reserve &&
            <div className="d-flex justify-content-between align-items-center w-100">
              <Button fullWidth size="small" variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => openParticipate()}>{event?.places === event?.total_reserve ? t('button.complet') : t('button.participer')}</Button>
            </div>
          }
        </section>

        <section className="col-md-8 m-0 p-4">
          <small className="text-muted small" style={{ fontSize: ".8em" }}>
            {t('event.organise')} Invest & Partners
          </small>

          <h3 className="fw-default-title" style={{ margin: '.5em 0' }}>
            {event?.libelle}
          </h3>

          <div className="d-flex flex-wrap align-items-center">
            {event?.date_evenement &&
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoCalendar />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {moment(event?.date_evenement).format("DD MMMM YYYY")}
                </span>
              </div>
            }
            {event?.heure_debut &&
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoClock />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + event?.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + event?.heure_debut)).add(+event?.duree, 'hours').format('HH[H]mm') })}
                </span>
              </div>
            }
            {event?.lieu &&
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoLocation />
                <span style={{ marginLeft: 10, fontSize: 14 }}>{event?.lieu}</span>
              </div>
            }
            {event?.prix &&
              <div className="d-flex align-items-center pt-2 pe-4">
                <BiMoney />
                <span style={{ marginLeft: 10, fontSize: 14 }}>{event?.prix ? moneyFormat(event?.prix) + ' FCFA' : t('app.free')}</span>
              </div>
            }
          </div>

          {event?.description && (
            <section className="py-4 d-none d-lg-block">
              <p className="lh-base fs-6">{event?.description}</p>
            </section>
          )}
        </section>
        {event?.description && (
          <section className="col-md-12 p-4 d-block d-lg-none">
            <p className="lh-base fs-6">{event?.description}</p>
          </section>
        )}
      </div>

      <Modal
        show={visible}
        onHide={hideParticipate}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton={!paiement.pending}>
          <Modal.Title>{t('event.form.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-1 lh-base text-center">{t('event.form.text._1')} <strong>{event?.libelle}</strong></p>
          {event?.prix ? (
            <p className="mb-1 text-muted text-center">
              {t('event.form.text._2', {
                prix: moneyFormat(event?.prix)
              })}
            </p>
          ) : (
            <p className="mb-1 text-muted text-center">{t('event.form.text._3')}</p>
          )}
          <hr />
          <h5 className="fw-bolder my-1">{t('event.form.sub_title_1')}</h5>
          <Grid>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  type="text"
                  variant="filled"
                  label={t('event.form.input._1.title')}
                  placeholder={t('event.form.input._1.placeholder')}
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
                  label={t('event.form.input._2.title')}
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
                  label={t('event.form.input._3.title')}
                  placeholder={t('event.form.input._3.placeholder')}
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
                  label={t('event.form.input._4.title')}
                  placeholder={t('event.form.input._4.placeholder')}
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
                  <h6 className="fw-bolder">{t('event.form.sub_title_2')}</h6>
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
                  <h6 className="fw-bolder mt-2 text-center">{t('event.form.pay._1.title')}</h6>
                  <PhoneInput
                    defaultCountry={loc.country}
                    placeholder={t('event.form.pay._1.placeholder')}
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
                    {t('event.form.btn._1')}
                  </LoadingButton>
                ) : (
                  <LoadingButton
                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                    onClick={checkSeat}
                    variant="contained"
                  >
                    {t('event.form.btn._2')}
                  </LoadingButton>
                )}
              </div>
            </Grid>
          </Grid>
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

const mapStateToProps = (state) => ({ user: state.auth.user })

export default withNamespaces()(connect(mapStateToProps)(EventDetails));