import { Container } from "../../components";

import * as React from "react";

import { GoCalendar, GoClock, GoLocation } from "react-icons/go";
import { BiMoney } from "react-icons/bi";

import { Box, Button, LinearProgress } from "@mui/material";

import eventImg from "../../assets/img/events.png";
import ene from "../../assets/img/ip-13.jpg";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../../styles/event.scss";

import { moneyFormat } from "../../core/utils/helpers";

import moment from "moment";
import "moment/locale/fr";

import "react-phone-number-input/style.css";

import { connect } from "react-redux";

import { EventService } from "../../core/services";

import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { DownloadRounded } from "@mui/icons-material";

const EventDetails = ({ t, match, user }) => {
  const {
    params: { id },
  } = match;
  const history = useHistory();

  const [event, setEvent] = React.useState(null);

  const onParticipate = () => {
    history.push(`/events/${event.id}/paiement`);
  };

  const fetchData = () => {
    EventService.getOne(id).then((data) => {
      setEvent(data.data.data);
    });
  };
  
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container header headerActive active="Events" footer>
      <div
        style={{ backgroundImage: `url(${eventImg})` }}
        className="event-details-bg-image"
      >
        <div className="blur"></div>
      </div>

      <div className="event-details shadow row g-2 bg-white">
        <section className="col-md-4 m-0 p-4">
          <section className="event-details-image shadow">
            <img src={event?.image ? event?.image : ene} alt="" />
          </section>
          <Box sx={{ mb: 5 }}>
            <Box
              sx={{
                my: 2,
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "grey",
                }}
              >
                <div>{t("event.places.restant")}</div>
                <div>
                  {event?.total_reserve}/{event?.places}
                </div>
              </div>
              <LinearProgress
                sx={{ width: "100%" }}
                variant="determinate"
                value={(event?.total_reserve * 100) / event?.places}
              />
            </Box>
          </Box>
          {event?.fichier ? (
            <a
              title="Telecharger le fichier Join"
              target="_blank"
              rel="noreferrer"
              href={event.fichier}
              className="d-flex justify-content-center align-items-center my-1 gap-2"
            >
              <DownloadRounded className="cursor-pointer" color="success" />
              {t("details.join")}
            </a>
          ) : (
            <div className="d-flex justify-content-center align-items-center my-1 gap-2">
              <HighlightOffIcon color="error" />
              {t("details.noJoin")}
            </div>
          )}
          {/* {!event?.isPast && event?.places > event?.total_reserve && (
            <div className="d-flex justify-content-between align-items-center w-100">
              <Button
                fullWidth
                size="small"
                variant="contained"
                disabled={event.date_fin || new Date(event?.date_fin) < new Date()}
                color="primary"
                className="btn-rounded btn-default px-2"
                onClick={(e) => onParticipate()}
              >
                {event?.places === event?.total_reserve
                  ? t("button.complet")
                  : t("button.participer")}
              </Button>
            </div>
          )} */}
          {!event?.isPast && event?.places > event?.total_reserve && (
            <Button
              disabled={event.date_fin && new Date(event?.date_fin) < new Date()}
              variant="contained"
              color="primary"
              className="btn-rounded btn-default px-2"
              onClick={(e) => onParticipate()}
            >
              {event?.places === event?.total_reserve
                ? t("button.complet")
                : t("button.participer")}
            </Button>
          )}
        </section>

        <section className="col-md-8 m-0 p-4">
          <small className="text-muted small" style={{ fontSize: ".8em" }}>
            {t("event.organise")} IP INVESTMENT S.A.
          </small>

          <h3 className="fw-default-title" style={{ margin: ".5em 0" }}>
            {event?.libelle}
          </h3>

          <div className="d-flex flex-wrap align-items-center">
            {event?.date_debut && (
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoCalendar />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {moment(event?.date_debut).format("DD MMMM YYYY")}
                </span>
              </div>
            )}
            {event?.heure_debut && (
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoClock />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {t("date.time_format", {
                    start: moment(
                      new Date("Thu, 01 Jan 1970 " + event?.heure_debut)
                    ).format("HH[H]mm"),
                    end: moment(
                      new Date("Thu, 01 Jan 1970 " + event?.heure_debut)
                    )
                      .add(+event?.duree, "hours")
                      .format("HH[H]mm"),
                  })}
                </span>
              </div>
            )}
            {event?.lieu && (
              <div className="d-flex align-items-center pt-2 pe-4">
                <GoLocation />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {event?.lieu}
                </span>
              </div>
            )}
            {event?.prix && (
              <div className="d-flex align-items-center pt-2 pe-4">
                <BiMoney />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                  {event?.prix
                    ? moneyFormat(event?.prix) + " FCFA"
                    : t("app.free")}
                </span>
              </div>
            )}
          </div>

          {event?.description && (
            <section className="py-4 d-block">
              <p className="lh-base fs-6">{event?.description}</p>
            </section>
          )}
        {event?.partenaires.length > 0 && (
          <>
            <div className="lh-base fs-8 mb-1" style={{color: "#c34839", fontWeight: "bold"}}>{t("event.partner")}</div>
            <div className="d-flex align-items-center w-full flex-wrap gap-2">
              {event?.partenaires.map(partenaire => <img key={partenaire.id} alt="Partenaire profile" src={partenaire.image} style={{width: "100px", objectFit: "cover"}}/>)}
            </div>
          </>
        )}
        </section>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user });

export default withTranslation()(connect(mapStateToProps)(EventDetails));
