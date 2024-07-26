import React from "react";
import placeholder from "../../assets/img/ip-13.jpg";
import { FaClock, FaCalendarCheck } from "react-icons/fa";
import moment from "moment";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { GoLocation } from "react-icons/go";

export default function AccueilCard({ item, t, type, onClickDetail }) {

  const history = useHistory();

  const badgeContent = () => {
    if (type === "actualite") return item.secteur_libelle
    else if (item.price) return `${t("app.price")} : ${item?.price}`
    return (t("app.free"))
  }
  
  return (
    <div className="col-md-6 col-lg-4">
      <div className="event-item shadow">
        <div className="event-image">
          <img src={item.image ? item.image : placeholder} alt="" />
        </div>
        <div className="event-hover p-3">
          <div className="w-100 d-flex justify-content-between flex-column">
            <div className="d-flex gap-1 mb-1">
              <Badge
                pill
                bg="primary"
                style={{ width: "fit-content", display: "flex", gap: "4px" }}
              >
                {badgeContent()}
              </Badge>
            </div>
            <div className="">
              <div className="fw-bolder event-title">{item.libelle}</div>
              <div className="event-description">{item.description}</div>
              <div className="row gx-3 gy-2 mb-2">
                <div className="d-flex">
                  <div className="d-flex align-items-center justify-content-center">
                    <FaCalendarCheck
                      size={15}
                      fill="#c34839"
                      className="me-1"
                    />
                    {moment(item.date_debut).format("DD MMMM YYYY")}
                    {item.date_fin
                      ? ` - ${moment(item.date_fin).format("DD MMMM YYYY")}`
                      : ""}
                  </div>
                </div>
                {!type && <div className="d-flex align-items-center">
                  <FaClock size={15} fill="#c34839" className="me-1" />
                  De{" "}
                  {moment(
                    new Date(`Thu, 01 Jan 1970 ${item.heure_debut}`)
                  ).format("HH[H]mm")}
                  {item.heure_fin &&
                    ` - ${moment(new Date(`Thu, 01 Jan 1970 ${item.heure_fin}`))
                      .add(item.duree, "hours")
                      .format("HH[H]mm")}`}
                </div>}
                {!type && <div className="d-flex align-items-center gap-2"><GoLocation size={15} fill="#c34839" className="me-1"/>{item.lieu}</div>}
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-end">
              <Button
                size="small"
                className=""
                type="button"
                variant="contained"
                color="white"
                onClick={onClickDetail}
              >
                {t("button.savoir")}
              </Button>
              {!item.isPast &&
                new Date(item.date_debut) > new Date() &&
                item.places > item.total_reserve && (
                  <Button
                    disabled={new Date(item.date_fin) < new Date()}
                    size="small"
                    type="submit"
                    variant="contained"
                    onClick={(e) => history.push(`events/${item.id}/paiement`)}
                  >
                    {t("button.participer")}
                  </Button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
