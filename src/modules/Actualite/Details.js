import { Container } from '../../components';

import * as React from 'react';

import { GoCalendar, GoClock, GoLocation } from 'react-icons/go';
import { BiMoney } from 'react-icons/bi';

import {
  Box,
  Button,
  LinearProgress,
} from '@mui/material';

import eventImg from '../../assets/img/events.png';
import ene from '../../assets/img/ip-13.jpg';

import '../../styles/event.scss';

import { moneyFormat } from '../../core/utils/helpers'

import moment from 'moment';
import 'moment/locale/fr';

import 'react-phone-number-input/style.css'

import { connect } from "react-redux";

import { ActualiteService } from '../../core/services';

import { withTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { FaTag } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

const EventDetails = ({ t, match, user }) => {
  const { params: { id } } = match;
  const history = useHistory()

  const [actualite, setActualite] = React.useState(null);

  const onParticipate = () => {
    history.push(`/actualite`);
  }


  const fetchData = () => {
    ActualiteService.getOne(id).then(
      (data) => {
        setActualite(data.data.data);
      }
    )
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container header headerActive active="Events" footer>
      <div style={{ backgroundImage: `url(${eventImg})` }} className="event-details-bg-image">
        <div className="blur"></div>
      </div>

      <div className="event-details shadow row g-2 bg-white">
        <section className="col-md-4 m-0 p-4">
          <section className="event-details-image">
            <img src={actualite?.image ? actualite?.image : ene} alt="" />
          </section>
        </section>

        <section className="col-md-8 m-0 p-4">
          <div className="d-flex align-items-center justify-content-between w-full">
          <small className="text-muted small" style={{ fontSize: ".8em" }}>
            IP INVESTMENT S.A.
          </small>
          <Badge
                pill
                bg="primary"
                style={{ width: "fit-content", display: "flex", gap: "4px" }}
              >
                {actualite?.secteur_libelle && actualite.secteur_libelle}
          </Badge>
          </div>

          <h3 className="fw-default-title" style={{ margin: '.5em 0' }}>
            {actualite?.libelle}
          </h3>

            {actualite?.updated_at &&
              <div className="d-flex align-items-center pe-4">
                <GoCalendar />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {moment(actualite?.updated_at).format("DD MMMM YYYY")}
                </span>
              </div>
            }

          {actualite?.description && (
            <section className="py-4 d-none d-lg-block">
              <p className="lh-base fs-6">{actualite?.description}</p>
            </section>
          )}
        </section>
        {actualite?.description && (
          <section className="col-md-12 p-4 d-block d-lg-none">
            <p className="lh-base fs-6">{actualite?.description}</p>
          </section>
        )}
      </div>

    </Container>
  );
}

const mapStateToProps = (state) => ({ user: state.auth.user })

export default withTranslation()(connect(mapStateToProps)(EventDetails));