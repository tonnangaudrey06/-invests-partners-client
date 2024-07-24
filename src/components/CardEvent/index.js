import React from 'react'
import placeholder from '../../assets/img/ip-13.jpg';
import moment from 'moment';
import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, Button, LinearProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function CardEvent ({ item, t}) {
  const history = useHistory()
  const onParticipate = (event) => {
    history.push(`/events/${event.id}/paiement`)
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
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
                  <Button variant="contained" color="primary" className="btn-rounded btn-default px-2" onClick={(e) => onParticipate(item)}>
                      {item.places === item.total_reserve ? t('button.complet') : t('button.participer')}
                  </Button>
              }
              <Button color="primary" className="btn-rounded btn-default px-2" onClick={(e) => history.push(`events/${item.id}`)}>{t('button.savoir')}</Button>
          </div>
        </div>
    </div>
  )
}