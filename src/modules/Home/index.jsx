import "../../styles/home.scss";
import "reactjs-popup/dist/index.css";

import React, { Fragment, useState } from "react";
import Popup from "reactjs-popup";

import { Container, SectionTitle } from "../../components";

import { HomeData } from "../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Badge } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";

import BannerSlider from "../../components/Slider";

import { moneyFormat, millionFormat } from "../../core/utils/helpers";

import "react-phone-number-input/style.css";

import "moment/locale/fr";

import { GrMail } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import { RiEyeFill, RiTeamLine, RiCoinsLine } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { AppService, EventService, MessageService } from "../../core/services";

import { withTranslation } from "react-i18next";

import { connect } from "react-redux";
import { Button, CircularProgress } from "@mui/material";
import LikeButton from "../../components/LikeButton/index";
import DOMPurify from "dompurify";
import AccueilCard from "../../components/AccueilCard/AccueilCard";

const CustomSlide = ({
  history,
  projet,
  t,
  user,
  className,
  errorMessage = (value) => {
    return;
  },
  setSuccess = (value) => {
    return;
  },
  setError = (value) => {
    return;
  },
  onOpenModal = (value) => {},
}) => {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);
  const [openPopup, setOpenPopup] = React.useState(false);

  const openMessage = () => {
    setMessage(
      "Bonjour, je m'appelle " +
        user?.nom_complet +
        '. Je suis un investisseur sur votre plateforme "IP INVESTMENT S.A.". Je suis intéressé par le projet "' +
        projet?.intitule +
        '" et je souhaite avoir plus de détails sur celui-ci.'
    );
  };

  const sendMessage = (e) => {
    const data = {
      body: message,
      projet: projet?.id,
    };

    setLoading(true);

    MessageService.interesse(
      user?.id,
      projet?.secteur_data?.conseiller_data?.id,
      data
    ).then(
      (rs) => {
        setOpenPopup(false);
        setSuccess(true);
        errorMessage("Votre message a été envoyé avec succès");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        errorMessage(resMessage);
        setError(true);
      }
    );

    setLoading(false);
  };

  const checkCanFianance = () => {
    if (!user?.profil_invest) {
      return false;
    }

    if (
      !user?.profil_invest?.montant_max ||
      +user?.profil_invest?.montant_max === 0
    ) {
      return true;
    }

    if (+user?.profil_invest?.montant_max >= +projet?.financement) {
      return true;
    }
    return false;
  };

  const handleOpenInvest = () => {
    if (checkCanFianance()) {
      setOpenPopup(true);
    } else {
      onOpenModal(true);
    }
  };

  const goToDetails = () => {
    history.push(`projets/${projet.id}/details`);
  };

  return (
    <>
      <div className={`mx-4 my-2 projet-ip-item shadow-sm ${className}`}>
        <div className="projet-ip-image">
          <img src={projet.logo} alt={projet.intitule} />
        </div>
        <div className="projet-ip-box">
          <div className="projet-ip-content mb-2">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <Badge pill bg="primary">
                {projet?.secteur_data?.libelle}
              </Badge>
              <Badge
                pill
                bg={`${projet?.etat === "CLOTURE" ? "success" : "secondary"}`}
              >
                {`${
                  projet?.etat === "CLOTURE"
                    ? t("projet.etat.done")
                    : t("projet.etat.ongoing")
                }`}
              </Badge>
            </div>

            <h3>{projet.intitule}</h3>

            <p>{projet.description}</p>

            {user && projet?.etat !== "CLOTURE" && (
              <Button
                size="small"
                type="button"
                variant="contained"
                className="me-3"
                onClick={() => handleOpenInvest()}
              >
                {t("projet.details.btn._1")}
              </Button>
            )}

            <Button
              size="small"
              type="button"
              variant="contained"
              color="white"
              onClick={() => goToDetails()}
            >
              {t("projet.details.more")}
            </Button>

            <Popup
              modal
              nested
              onClose={() => setMessage("")}
              onOpen={() => openMessage()}
              open={openPopup}
            >
              <div className="modal-experts">
                <button
                  className="modal-experts-close"
                  onClick={() => setOpenPopup(false)}
                >
                  &times;
                </button>
                <div className="modal-experts-content p-3">
                  <div className="row w-100 gy-3">
                    <div className="col-md-12">
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <h6 className="fw-bolder">
                          {t("projet.other.modal.message")}
                        </h6>
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{ shrink: true }}
                          label="Message"
                          placeholder="Message"
                          variant="filled"
                          multiline
                          rows={5}
                          value={message || ""}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormControl>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex justify-content-center align-items-center w-100">
                        <LoadingButton
                          className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                          loading={loading}
                          disabled={!message}
                          onClick={sendMessage}
                          variant="contained"
                        >
                          {t("projet.other.modal.btn")}
                        </LoadingButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <div className="projet-ip-bottom">
            <div className="projet-ip-details-invest">
              {projet.iv_total
                ? t("projet.invest.none", moneyFormat(projet.iv_total))
                : t("projet.invest.none")}
            </div>
            <div className="projet-ip-details-fav">
              <LikeButton
                user={user}
                projet={projet}
                likeCount={(value) => setLikeCount(value)}
                errorMessage={(value) => errorMessage(value)}
                setError={(value) => setError(value)}
              />
              {`${likeCount} likes`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RiEyeFillIcon = React.forwardRef((props) => {
  return <RiEyeFill {...props} />;
});

const HomeScreen = ({
  history,
  t,
  user,
  language,
  appLoading,
  setStopAppLoading,
}) => {
  const [navigateBanner, setNavigateBanner] = useState(false);

  const [sliders, setSliders] = React.useState([]);

  const [partenaires, setPartenaires] = React.useState([]);

  const [experts, setExperts] = React.useState([]);

  const [actualites, setActualites] = React.useState([]);

  const [projets, setProjets] = React.useState([]);

  const [events, setEvents] = React.useState([]);

  const [chiffre, setChiffres] = React.useState([]);

  const [lang, setLang] = React.useState(language);

  const [modalOpen, setModalOpen] = React.useState(false);

  const [pageLoading, setPageLoading] = React.useState(true);

  //const sortedEvents = events.sort((a, b) => new Date(b.date_debut) - new Date(a.date_debut));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const actualitesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  const processDescription = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;

    let textContent = div.textContent || div.innerText || "";
    if (textContent.length > 10) {
      textContent = textContent.substring(0, 20) + "...";
    }

    let truncatedHTML = div.innerHTML;

    const parser = new DOMParser();
    const doc = parser.parseFromString(truncatedHTML, "text/html");
    const images = doc.getElementsByTagName("img");

    for (let img of images) {
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.float = "left";
      img.style.marginRight = "10px";
    }

    return div.innerHTML;
  };

  const [selectedActualite, setSelectedActualite] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (actualite) => {
    setSelectedActualite(actualite);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedActualite(null);
  };

  let slider = new Slider(settings);

  const loadDatas = async () => {
    setPageLoading(true);
    Promise.all([
      AppService.slider(),
      AppService.chiffre(),
      AppService.partenaire(),
      AppService.actualitesecteur(),
      AppService.projet(),
      EventService.getLatest(),
      AppService.experts(),
    ]).then((values) => {
      const [
        slidesData,
        statsData,
        partnersDatas,
        actualityData,
        projectsData,
        eventsData,
        expertData,
      ] = values;
      setSliders(slidesData?.data?.data);
      setPartenaires(partnersDatas?.data?.data);
      setActualites(actualityData?.data);
      setProjets(projectsData?.data?.data);
      setEvents(eventsData?.data?.data);
      setChiffres(statsData?.data?.data);
      setExperts(expertData?.data?.data);
      setPageLoading(false);
    });
  };

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

  React.useEffect(() => {
    loadDatas();
  }, []);

  React.useEffect(() => {
    setLang(language);
    console.log(t)
  }, [language]);

  const goToProfile = () => {
    history.push("/investor/profil");
  };

  return (
    <Fragment>
      <div className="carousel mb-5">
        {pageLoading && (
          <div
            style={{ minHeight: 680 }}
            className="py-5 d-flex justify-content-center align-items-center"
          >
            <CircularProgress color="white" />
          </div>
        )}
        <BannerSlider slides={sliders || []} translate={t} lang={lang} />
      </div>

      <Container className="overflow-hidden" header footer>
        <div className="section-service container-fluid px-5 mb-5">
          <SectionTitle title="service.title" />
          <div className="row">
            {(HomeData?.servicesData || []).map((item, index) => (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-4 service-item"
              >
                <div className="service-icon">
                  <img
                    src={item.icon}
                    style={{ width: 30 }}
                    alt="IP INVESTMENT S.A. service"
                  />
                </div>
                <div className="service-content">
                  <div className="service-content-title text-uppercase">
                    {t(item.title)}
                  </div>
                  <div className="service-content-text">{t(item.content)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-banner mb-5">
          <div className="seperator"></div>
          <div className="banner-wrapper">
            <div className="banner-content">
              <h5 className="text-white">{t("banner.title")}</h5>
              <p
                className="text-white text-justify"
                style={{ margin: "1.2rem 0" }}
              >
                {t("banner.sub_title")}
              </p>
              {navigateBanner && (
                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: "1.1rem" }}>
                    <FaCheck
                      style={{ fill: "white", marginRight: ".5em" }}
                      size={13}
                    />
                    {t("banner.des_1._1")}
                  </li>
                  <li className="text-white" style={{ marginTop: "1.1rem" }}>
                    <FaCheck
                      style={{ fill: "white", marginRight: ".5em" }}
                      size={13}
                    />
                    {t("banner.des_1._2")}
                  </li>
                </ul>
              )}
              {!navigateBanner && (
                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: "1.1rem" }}>
                    <FaCheck
                      style={{ fill: "white", marginRight: ".5em" }}
                      size={13}
                    />
                    {t("banner.des_2._1")}
                  </li>
                  <li className="text-white" style={{ marginTop: "1.1rem" }}>
                    <FaCheck
                      style={{ fill: "white", marginRight: ".5em" }}
                      size={13}
                    />
                    {t("banner.des_2._2")}
                  </li>
                </ul>
              )}
            </div>
            <div className="banner-button">
              <FaArrowLeft
                className="previous"
                style={{ cursor: "pointer" }}
                onClick={() => setNavigateBanner(!navigateBanner)}
                fill="white"
              />
              <FaArrowRight
                className="next"
                style={{ cursor: "pointer" }}
                onClick={() => setNavigateBanner(!navigateBanner)}
                fill="white"
              />
            </div>
          </div>
        </div>

        {pageLoading && (
          <div className="my-5 d-flex justify-content-center align-items-center">
            <CircularProgress />
          </div>
        )}

        {(experts || []).length > 0 && (
          <div className="section-expert mb-5">
            <SectionTitle title="expert.title" />
            <div className="expert-grid">
              {(experts || []).map((item, index) => (
                <div key={index} className="d-flex justify-content-center">
                  <div className="expert-item" style={{ width: "17rem" }}>
                    <div
                      className="expert-image-home shadow"
                      style={{ width: "100%" }}
                    >
                      <img
                        className="expert-image"
                        alt="Expert IP INVESTMENT S.A."
                        src={item.photo_url}
                      />
                    </div>
                    <div className="expert-name">{item.nom_complet}</div>
                    <div className="expert-bibio fw-bolder">
                      <p>{item.fonction}</p>
                    </div>
                    <div className="expert-button">
                      <Popup
                        trigger={
                          <RiEyeFillIcon
                            className="expert-button-view"
                            fill="#c34839"
                            size={30}
                          />
                        }
                        modal
                        nested
                        className="expert-modal"
                        style={{ zIndex: 1000 }}
                      >
                        {(close) => (
                          <div className="modal-experts p-3">
                            <button
                              className="modal-experts-close"
                              onClick={close}
                            >
                              &times;
                            </button>
                            <div className="modal-experts-content">
                              <img
                                className="modal-experts-image"
                                alt="Expert IP INVESTMENT S.A."
                                src={item.photo_url}
                              />
                              <div className="modal-experts-present">
                                <p className="name">{item.nom_complet}</p>
                                <div
                                  className="poste"
                                  style={{ marginBottom: 20 }}
                                >
                                  {item.fonction}
                                </div>
                                <div className="bibio">{t("bio")}</div>
                                <p className="lh-base text-justify">
                                  {item.description}
                                </p>
                                <p className="modal-experts-contact">
                                  {item.telephone && (
                                    <Fragment>
                                      <MdPhoneInTalk
                                        fill="#c34839"
                                        size={20}
                                        style={{ marginRight: 5 }}
                                      />
                                      {item.telephone}
                                      <span style={{ marginLeft: 20 }}></span>
                                    </Fragment>
                                  )}
                                  {item.email && (
                                    <Fragment>
                                      <GrMail
                                        fill="#c34839"
                                        size={20}
                                        style={{ marginRight: 5 }}
                                      />
                                      {item.email}
                                    </Fragment>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(partenaires || []).length > 0 && (
          <div className="section-partner bg-light pt-5 pb-1">
            <SectionTitle title={"partner.title"} />
            <div className="partner-text">
              <p>{t("partner.text")}</p>
              <div className="partner-box mt-5">
                {(partenaires || []).map((item, index) => (
                  <div key={index} className="partner-image shadow">
                    <img
                      className="img-fluid rounded"
                      alt="Partenaires"
                      src={item.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-popup" onClick={closePopup}>
                X
              </button>
              <div className="popup-inner">
                <div className="popup-image-container">
                  <img
                    src={selectedActualite.image}
                    alt="Actualité"
                    className="popup-image"
                  />
                </div>
                <div className="popup-text">
                  <h3 className="popup-libelle">{selectedActualite.libelle}</h3>
                  <p>{selectedActualite.secteur_libelle}</p>
                  <div
                    className="popup-description"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(selectedActualite.description),
                    }}
                  />
                  <p className="popup-date">
                    Publié le :{" "}
                    {new Date(
                      selectedActualite.created_at
                    ).toLocaleDateString()}
                  </p>
                  {/* Ajoutez d'autres détails ici si nécessaire */}
                </div>
              </div>
            </div>
          </div>
        )}
        {(projets || []).length > 0 && (
          <div className="section-projet py-5">
            <SectionTitle title="projet_ip.title" />
            <div className="projet-ip-container mb-3">
              <div className="projet-ip-wrapper">
                
                {projets.length <= 2 ? (
                  <div className="d-flex">
                    {projets.map((projet) => (
                      <CustomSlide
                        className="flex-grow-1"
                        key={projet.id}
                        projet={projet}
                        history={history}
                        t={t}
                        onOpenModal={(value) => setModalOpen(value)}
                      />
                    ))}
                  </div>
                ) : (
                  <Slider ref={(c) => (slider = c)} {...settings}>
                    {(projets || []).map((projet) => (
                      <CustomSlide
                        history={history}
                        onOpenModal={(value) => setModalOpen(value)}
                        projet={projet}
                        t={t}
                        user={user}
                        key={projet.id}
                      />
                    ))}
                  </Slider>
                )}
                {/* <Slider ref={(c) => (slider = c)} {...settings}>
                    {(projets || []).map((projet) => (
                      <CustomSlide
                        history={history}
                        onOpenModal={(value) => setModalOpen(value)}
                        projet={projet}
                        t={t}
                        user={user}
                        key={projet.id}
                      />
                    ))}
                  </Slider> */}
                
              </div>

              {projets?.length > 2 && <div>
                <span className="projet-ip-button-left " onClick={previous}>
                  <IoArrowBack />
                </span>
                <span className="projet-ip-button-right" onClick={next}>
                  <IoArrowForward />
                </span>
              </div>}
            </div>
          </div>
        )}

        <div className="section-chiffre mb-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: "3rem" }}>
                  {chiffre?.users || 0}
                </h3>
                <div>
                  <RiTeamLine size={100} fill={"white"} />
                </div>
                <p
                  className="text-white my-3 text-center"
                  style={{ fontSize: "2rem" }}
                >
                  {t("chiffre.user")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: "3rem" }}>
                  {chiffre?.projets || 0}
                </h3>
                <div>
                  <RiTeamLine size={100} fill={"white"} />
                </div>
                <p
                  className="text-white my-3 text-center"
                  style={{ fontSize: "2rem" }}
                >
                  {t("chiffre.projet")}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3
                  className="text-white"
                  style={{ fontSize: "3rem" }}
                >{`${millionFormat(chiffre?.total || 0)} FCFA`}</h3>
                <div>
                  <RiCoinsLine size={100} fill={"white"} />
                </div>
                <p
                  className="text-white my-3 text-center"
                  style={{ fontSize: "2rem" }}
                >
                  {t("chiffre.money")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {pageLoading && (
          <div className="my-5 d-flex justify-content-center align-items-center">
            <CircularProgress />
          </div>
        )}

        {(events || []).length > 0 && (
          <div className="section-event container pb-5">
            <SectionTitle title="event.title" />
            <div className="row g-2 justify-content-center">
              {(events || [])
                .sort((a, b) => new Date(b.date_debut) - new Date(a.date_debut))
                .slice(0, 3)
                .map((item) => (
                  <AccueilCard
                    key={item.id}
                    item={item}
                    t={t}
                    onClickDetail={() => history.push(`/events/${item.id}`)}
                  />
                ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              className="btn-rounded d-block mt-4 mx-auto btn-default px-2"
              onClick={(e) => history.push(`/events`)}
            >
              {t("button.see_more")} <FaArrowRight className="ml-1" />
            </Button>
          </div>
        )}

        {(actualites || []).length > 0 && (
          <div className="section-event container py-5">
            <SectionTitle title="actualite.title" />
            <div className="row g-2 justify-content-center">
              {actualites.slice(0, 3).map((item) => (
                <AccueilCard
                  type="actualite"
                  key={item.id}
                  item={item}
                  t={t}
                  onClickDetail={() => history.push(`/actualites/${item.id}`)}
                />
              ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              className="btn-rounded d-block mt-4 mx-auto btn-default px-2"
              onClick={(e) => history.push(`/actualites`)}
            >
              {t("button.see_more")} <FaArrowRight className="ml-1" />
            </Button>
          </div>
        )}

        <Popup
          position="top center"
          open={modalOpen}
          closeOnDocumentClick={false}
          closeOnEscape={false}
          onClose={() => setModalOpen(false)}
        >
          <div className="container d-flex flex-column align-items-center text-center m-2">
            <p className="mt-1">{t("projet.details.warn._1")}</p>
            <p className="mt-1">{t("projet.details.warn._2")}</p>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="outlined"
                className="me-2"
                onClick={() => setModalOpen(false)}
              >
                {t("projet.details.warn.btn._1")}
              </Button>
              <Button
                variant="contained"
                className="me-2"
                onClick={() => goToProfile()}
              >
                {t("projet.details.warn.btn._2")}
              </Button>
            </div>
          </div>
        </Popup>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
  language: state.app.language,
  user: state.auth.user,
}};

export default withTranslation()(connect(mapStateToProps)(HomeScreen));
