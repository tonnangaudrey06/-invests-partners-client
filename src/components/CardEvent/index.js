import React from "react";
import placeholder from "../../assets/img/ip-13.jpg";
import moment from "moment";
import { GoCalendar, GoLocation } from "react-icons/go";
import { Box, Button, LinearProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./style.css";

//Composants contenant à la fois la card des evenements et des actualites
export default function CardEvent({ item, t }) {
  const history = useHistory();
  const onParticipate = (event) => {
    history.push(`/events/${event.id}/paiement`);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="events-autre-item shadow">
        <div className="events-autre-item-img">
          <div className="position-relative" style={{ height: "inherit" }}>
            <img
              src={item.image ? item.image : placeholder}
              className="shadow w-100"
              style={{ objectFit: "cover" }}
              alt=""
            />
            <div className="event-autre-item-img-cover position-absolute">
              {item.places ? (
                <>
                  <div className="button-price-events-component">
                    {item.prix ? item.prix : 0} FCFA
                  </div>
                  <div className="button-bookmark-events-component">
                    {item.prix ? "Payant" : "Gratuit"}
                  </div>
                </>
              ) : (
                <div className="button-bookmark-events-component">
                  {item.secteur_libelle}
                </div>
              )}
            </div>
          </div>
        </div>
        <small className="text-muted small" style={{ fontSize: ".8em" }}>
          {t("event.organise")} INVEST AND PARTNERS
        </small>
        <h3 className="fw-default-title title" style={{ margin: ".5em 0" }}>
          {item.libelle}
        </h3>
        <div className="d-flex align-items-center gap-2 w-100 mt-1">
          <GoCalendar />
          {moment(item.date_debut).format("DD MMMM YYYY")}
          {item.date_fin
            ? ` - ${moment(item.date_fin).format("DD MMMM YYYY")}`
            : ""}
        </div>
        {!item?.places && <p className="description">{item.description}</p>}
        {item?.lieu && (
          <div className="d-flex align-items-center w-100 mt-1">
            <GoLocation />
            <p className="lh-sm fs-6 ml-1">{item.lieu}</p>
          </div>
        )}
        {item?.places && (
          <Box>
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
                  {item.total_reserve / item.places}
                </div>
              </div>
              <LinearProgress
                sx={{ width: "100%" }}
                variant="determinate"
                value={(item.total_reserve * 100) / item.places}
              />
            </Box>
          </Box>
        )}
        <div
          className="d-flex justify-content-center gap-3 align-items-center w-100"
          style={{ marginTop: 40 }}
        >
          <Button
            variant={!item?.prix && item?.prix === "undifined" && "contained"}
            color="primary"
            className="btn-rounded btn-default px-2"
            onClick={(e) => item.places ? history.push(`events/${item.id}`) : history.push(`actualites/${item.id}`)}
          >
            {t("button.savoir")}
          </Button>
          {!item.isPast && item.places > item.total_reserve && (
            <Button
              disabled={new Date(item.date_fin) < new Date()}
              variant="contained"
              color="primary"
              className="btn-rounded btn-default px-2"
              onClick={(e) => onParticipate(item)}
            >
              {item.places === item.total_reserve
                ? t("button.complet")
                : t("button.participer")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
