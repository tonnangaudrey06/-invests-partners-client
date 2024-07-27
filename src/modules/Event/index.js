import { Container } from "../../components";

import eventImg from "../../assets/img/events2.jpeg";
import ene from "../../assets/img/ip-13.jpg";

import "../../styles/event.scss";

import { CircularProgress } from "@mui/material";

import React from "react";
import { useHistory } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import moment from "moment";
import "moment/locale/fr";

import "react-phone-number-input/style.css";

import { EventService } from "../../core/services";

import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import CardEvent from "../../components/CardEvent";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Event = ({ t, user }) => {
  const [events, setEvents] = React.useState([]);
  const [months, setMonths] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [etat, setEtat] = React.useState({
    message: "",
    error: false,
    success: false,
  });

  const history = useHistory();

  const onParticipate = (event) => {
    history.push(`/events/${event.id}/paiement`);
  };

  const handleErrorAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEtat((prevData) => {
      return { ...prevData, error: false };
    });
  };

  const handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEtat((prevData) => {
      return { ...prevData, success: false };
    });
  };

  const fetchData = () => {
    setLoading(true);
    EventService.getAll().then((data) => {
      setLoading(false);
      setEvents(data?.data?.data?.all);
      setMonths(data?.data?.data?.month);
    });
  };

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container header active="events" footer>
      <div
        className="d-flex flex-column align-items-center justify-content-center event-header text-white text-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${eventImg})`,
        }}
      >
        <h3
          className="fw-default-title text-uppercase"
          style={{ fontSize: "3.5rem" }}
        >
          {t("event.title")}
        </h3>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-4">
            <h3
              className="fw-default-title event-all-list-title text-uppercase"
              style={{ fontSize: "3em" }}
            >
              {t("event.header")}
            </h3>
            <p className="event-all-list-text">{t("event.text")}</p>
          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center">
            <img
              src={ene}
              className="img-fluid rounded shadow"
              alt=""
              width="600"
            />
          </div>
        </div>
        <div className="title-events mt-5 text-uppercase">
          {t("event.sub_title._1")}
        </div>
        <div className="row">
          {!events.filter((item) => moment().isBefore(item.date_fin))
            .length ? (
            <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
              {loading ? (
                <CircularProgress />
              ) : (
                <h5 className="fw-bolder text-muted">
                  {t("not_found.event")}
                </h5>
              )}
            </div>
          ) : (
            events
              .filter((item) => moment().isBefore(item.date_fin))
              .map((item) => <CardEvent item={item} t={t} key={item.id} />)
          )}
        </div>
        <div className="title-events mt-5 text-uppercase">
          {t("event.sub_title._2")}
        </div>
        <div className="row">
          {!events.filter((item) => moment().isAfter(item.date_fin)).length ? (
            <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
              {loading ? (
                <CircularProgress />
              ) : (
                <h5 className="fw-bolder text-muted">
                  {t("not_found.event")}
                </h5>
              )}
            </div>
          ) : (
            events
              .filter((item) => moment().isAfter(item.date_fin))
              .map((item) => <CardEvent item={item} t={t} key={item.id} />)
          )}
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomrighterror"
        open={etat.error}
        autoHideDuration={10000}
        onClose={handleErrorAlertClose}
      >
        <Alert
          onClose={handleErrorAlertClose}
          severity="error"
          sx={{ width: "100%", textAlign: "center" }}
        >
          {etat.message}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomrightsuccess"
        open={etat.success}
        autoHideDuration={10000}
        onClose={handleSuccessAlertClose}
      >
        <Alert
          onClose={handleSuccessAlertClose}
          severity="success"
          sx={{ width: "100%", textAlign: "center" }}
        >
          {etat.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user });

export default withTranslation()(connect(mapStateToProps)(Event));
