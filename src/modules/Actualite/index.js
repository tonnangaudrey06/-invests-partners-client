import { Container } from "../../components";

import eventImg from "../../assets/img/events2.jpeg";
import ene from "../../assets/img/ip-13.jpg";

import "../../styles/event.scss";

import { CircularProgress } from "@mui/material";

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import moment from "moment";
import "moment/locale/fr";

import "react-phone-number-input/style.css";

import { ActualiteService } from "../../core/services";

import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import CardEvent from "../../components/CardEvent";

const currentMonth = moment().month();
const currentYear = moment().year();

const Event = ({ t, user }) => {
  const [actualites, setActualites] = React.useState([]);
  const [months, setMonths] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const fetchData = () => {
    setLoading(true);
    ActualiteService.getAll().then((data) => {
      setLoading(false);
      setActualites(data?.data?.data);
      setMonths(data?.data?.data?.month);
    });
  };

  useEffect(() => {
    console.log(actualites);
    console.log(
      months.filter(
        (item) =>
          moment(item.date_debut).month() === currentMonth &&
          moment(item.date_debut).year() === currentYear
      )
    );
    // console.log()
  }, []);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container header active="actualites" footer>
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
          {t("actualite.title")}
        </h3>
      </div>

      <div className="container my-5">
        
        <div className="row">
          {!actualites.length ? (
            <div className="col-12 py-5 d-flex justify-content-center align-items-center flex-wrap w-100">
              {loading && <CircularProgress />}
              {!loading && (
                <h5 className="fw-bolder text-muted">
                  {t("not_found.actualite")}
                </h5>
              )}
            </div>
          ) : (
            actualites.map((item) => (
              <CardEvent item={item} t={t} key={item.id} />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user });

export default withTranslation()(connect(mapStateToProps)(Event));
