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

import { withTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EventDetails = ({ t, match, user }) => {
  const { params: { id } } = match;
  const history = useHistory()

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

  const onParticipate = () => {
    history.push(`/events/${event.id}/paiement`);
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
              <Button fullWidth size="small" variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => onParticipate()}>{event?.places === event?.total_reserve ? t('button.complet') : t('button.participer')}</Button>
            </div>
          }
        </section>

        <section className="col-md-8 m-0 p-4">
          <small className="text-muted small" style={{ fontSize: ".8em" }}>
            {t('event.organise')} IP INVESTMENT S.A.
          </small>

          <h3 className="fw-default-title" style={{ margin: '.5em 0' }}>
            {event?.libelle}
          </h3>

          <div className="d-flex flex-wrap align-items-center">
            {event?.date_debut &&
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoCalendar />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {moment(event?.date_debut).format("DD MMMM YYYY")}
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

    </Container>
  );
}

const mapStateToProps = (state) => ({ user: state.auth.user })

export default withTranslation()(connect(mapStateToProps)(EventDetails));