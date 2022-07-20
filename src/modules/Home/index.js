
import '../../styles/home.scss';
import 'reactjs-popup/dist/index.css'

import React, { Fragment, useState } from 'react';
import Popup from 'reactjs-popup';

import { Container, SectionTitle } from '../../components';

import { HomeData } from '../../data';
import placeholder from '../../assets/img/ip-13.jpg';

import Slider from "react-slick";

import { Modal } from 'react-bootstrap';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import BannerSlider from "../../components/Slider";

import { moneyFormat, millionFormat, sleep } from '../../core/utils/helpers'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import moment from 'moment';
import 'moment/locale/fr';

import { GrMail } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaCheck, FaClock, FaCalendarCheck } from 'react-icons/fa';
import { RiEyeFill, RiTeamLine, RiCoinsLine } from 'react-icons/ri';
import { MdPhoneInTalk } from 'react-icons/md';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

import { AppService, EventService, CampayService, MessageService, PaiementService } from '../../core/services';

import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
// import PageLoader from '../../components/PageLoader';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomSlide = ({
  history,
  projet,
  t,
  user,
  errorMessage = (value) => { return },
  setSuccess = (value) => { return },
  setError = (value) => { return },
  onOpenModal = (value) => { }
}) => {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);

  const openMessage = () => {
    setMessage("Bonjour, je m'appelle " + user?.nom_complet + ". Je suis un investisseur sur votre plateforme \"Invest & Partners\". Je suis intéressé par le projet \"" + projet?.intitule + "\" et je souhaite avoir plus de détails sur celui-ci.")
  }

  const sendMessage = (e) => {
    const data = {
      body: message,
      projet: projet?.id
    }

    setLoading(true)

    MessageService.interesse(user?.id, projet?.secteur_data?.conseiller_data?.id, data).then(
      (rs) => {
        setOpenPopup(false);
        setSuccess(true);
        errorMessage('Votre message a été envoyé avec succès')
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        errorMessage(resMessage);
        setError(true)
      }
    )

    setLoading(false)
  }

  const checkCanFianance = () => {
    if (!user?.profil_invest) {
      return false;
    }

    if (!user?.profil_invest?.montant_max || +user?.profil_invest?.montant_max === 0) {
      return true;
    }

    if (+user?.profil_invest?.montant_max >= +projet?.financement) {
      return true;
    }

    return false;
  }

  const handleOpenInvest = () => {
    if (checkCanFianance()) {
      setOpenPopup(true)
    } else {
      onOpenModal(true);
    }
  }

  const goToDetails = () => {
    if (checkCanFianance()) {
      history.push(`projets/${projet.id}/details`);
    } else {
      onOpenModal(true);
    }
  }

  return (
    <div className="p-3">
      <div className="projet-ip-item shadow">
        <div className="projet-ip-image">
          <img src={projet.logo} alt={projet.intitule} />
        </div>
        <div className='projet-ip-box'>
          <div className="projet-ip-content" >
            <h3>{projet.intitule}</h3>
            <p>{projet.description}</p>

            {/* <Link to={`projets/${projet.id}/details`} className="projects-cards-plus-button text-decoration-none text-white">
              {t('projet.details.more')}
            </Link> */}

            {user &&
              <Fragment>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => handleOpenInvest()}
                >
                  {t('projet.details.btn._1')}
                </Button>

                <Button
                  type="button"
                  className="ms-3"
                  onClick={() => goToDetails()}
                >
                  {t('projet.details.more')}
                </Button>
              </Fragment>
            }

            <Popup
              modal
              nested
              onClose={() => setMessage('')}
              onOpen={() => openMessage()}
              open={openPopup}
            >
              <div className="modal-experts">
                <button className="modal-experts-close" onClick={() => setOpenPopup(false)}>
                  &times;
                </button>
                <div className="modal-experts-content p-3">
                  <div className='row w-100 gy-3'>
                    <div className='col-md-12'>
                      <FormControl sx={{ m: 1, width: "100%" }}>
                        <h6 className="fw-bolder">{t('projet.other.modal.message')}</h6>
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{ shrink: true }}
                          label="Message"
                          placeholder="Message"
                          variant="filled"
                          multiline
                          rows={5}
                          value={message || ''}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormControl>
                    </div>
                    <div className='col-md-12'>
                      <div className="d-flex justify-content-center align-items-center w-100">
                        <LoadingButton
                          className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                          loading={loading}
                          disabled={!message}
                          onClick={sendMessage}
                          variant="contained"
                        >
                          {t('projet.other.modal.btn')}
                        </LoadingButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <div className='projet-ip-bottom'>
            <div className="projet-ip-details-invest">
              {projet.iv_total ? `${moneyFormat(projet.iv_total)} XAF déjà investis` : `Aucun investissement pour l'instant`}
            </div>
            {/* {user &&
              <div className="projet-ip-details-fav">
                <AiOutlineHeart fill={"#c5473b"} size={25} />
              </div>
            } */}
          </div>
        </div>
      </div>
    </div >
  );
}

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RiEyeFillIcon = React.forwardRef((props) => {
  return <RiEyeFill {...props} />;
});

const HomeScreen = ({ history, t, user, language }) => {

  const [navigateBanner, setNavigateBanner] = useState(false)

  const [sliders, setSliders] = React.useState([])

  const [partenaires, setPartenaires] = React.useState([])

  const [experts, setExperts] = React.useState([])

  const [projets, setProjets] = React.useState([])

  const [events, setEvents] = React.useState([])

  const [chiffre, setChiffres] = React.useState([])

  const [lang, setLang] = React.useState(language);

  const [modalOpen, setModalOpen] = React.useState(false);

  const [event, setEvent] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          lazyLoad: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          button: false,
          initialSlide: 0,
          lazyLoad: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          dots: true
        }
      }
    ]
  }

  let slider = new Slider(settings);

  const openParticipate = (event) => {
    setEvent(event);
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

  const handleParticipe = (trans = "") => {
    EventService.participate(event?.id, participation).then(
      async (rs) => {
        fetchEvents();
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

  const loadDatas = async () => {
    Promise.all([
      AppService.slider(),
      AppService.chiffre(),
      AppService.partenaire(),
      AppService.projet(),
      EventService.getLatest(),
      AppService.experts()
    ]).then(
      values => {
        const [
          slidesData,
          statsData,
          partnersDatas,
          projectsData,
          eventsData,
          expertData
        ] = values;
        setSliders(slidesData?.data?.data);
        setPartenaires(partnersDatas?.data?.data);
        setProjets(projectsData?.data?.data);
        setEvents(eventsData?.data?.data);
        setChiffres(statsData?.data?.data);
        setExperts(expertData?.data?.data);
      }
    ).finally(
      () => setPageLoading(false)
    );
  }

  const fetchEvents = () => {
    EventService.getLatest().then(
      rs => {
        setEvents(rs?.data?.data);
      }
    )
  }

  const next = () => {
    slider.slickNext();
  }

  const previous = () => {
    slider.slickPrev();
  }

  React.useEffect(() => {
    loadDatas();
  }, [])

  React.useEffect(() => {
    setLang(language);
  }, [language])

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

  const goToProfile = () => {
    history.push('/investor/profil');
  }

  return (
    <Fragment>
      {/* <PageLoader loading={pageLoading} /> */}

      <div className="carousel mb-5">
        <BannerSlider slides={sliders || []} translate={t} lang={lang} />
      </div>

      <Container header footer>
        <div className="section-service container-fluid px-5 mb-5">
          <SectionTitle title="service.title" />
          <div className="row">
            {(HomeData?.servicesData || []).map((item, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4 service-item">
                <div className="service-icon">
                  <img src={item.icon} style={{ width: 30 }} alt="Invest & partners service" />
                </div>
                <div className="service-content">
                  <div className="service-content-title text-uppercase">{t(item.title)}</div>
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
              <h5 className="text-white">{t('banner.title')}</h5>
              <p className="text-white text-justify" style={{ margin: '1.2rem 0' }}>{t('banner.sub_title')}</p>
              {navigateBanner &&
                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: '1.1rem' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />{t('banner.des_1._1')}</li>
                  <li className="text-white" style={{ marginTop: '1.1rem' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />{t('banner.des_1._2')}</li>
                </ul>
              }
              {!navigateBanner &&

                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: '1.1rem' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />{t('banner.des_2._1')}</li>
                  <li className="text-white" style={{ marginTop: '1.1rem' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />{t('banner.des_2._2')}</li>
                </ul>
              }
            </div>
            <div className="banner-button">
              <FaArrowLeft className="previous" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
              <FaArrowRight className="next" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
            </div>
          </div>
        </div>

        <div className="section-expert mb-5">
          <SectionTitle title="expert.title" />
          <div className="expert-grid">
            {(experts || []).map((item, index) => (
              <div key={index} className="d-flex justify-content-center">
                <div className="expert-item" style={{ width: '17rem' }}>
                  <div className="expert-image-home shadow" style={{ width: '100%' }}>
                    <img className="expert-image" alt="Expert I&P" src={item.photo_url} />
                  </div>
                  <div className="expert-name">{item.nom_complet}</div>
                  <div className="expert-bibio fw-bolder"><p>{item.fonction}</p></div>
                  <div className="expert-button">
                    <Popup
                      trigger={<RiEyeFillIcon className="expert-button-view" fill="#c5473b" size={30} />}
                      modal
                      nested
                      className="expert-modal"
                      style={{ zIndex: 1000 }}
                    >
                      {close => (
                        <div className="modal-experts p-3">
                          <button className="modal-experts-close" onClick={close}>
                            &times;
                          </button>
                          <div className="modal-experts-content">
                            <img className="modal-experts-image" alt="Expert I&P" src={item.photo_url} />
                            <div className="modal-experts-present">
                              <p className="name">{item.nom_complet}</p>
                              <div className="poste" style={{ marginBottom: 20 }}>{item.fonction}</div>
                              <div className="bibio">{t('bio')}</div>
                              <p className="lh-base text-justify">{item.description}</p>
                              <p className="modal-experts-contact">
                                {item.telephone &&
                                  <Fragment>
                                    <MdPhoneInTalk fill="#c5473b" size={20} style={{ marginRight: 5 }} />
                                    {item.tel}
                                    <span style={{ marginLeft: 20 }}></span>
                                  </Fragment>
                                }
                                {item.email &&
                                  <Fragment>
                                    <GrMail fill="#c5473b" size={20} style={{ marginRight: 5 }} />
                                    {item.email}
                                  </Fragment>
                                }
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

        <div className="section-partner mb-5">
          <SectionTitle title={"partner.title"} />
          <div className="partner-text">
            <p>{t('partner.text')}</p>
            <div className="partner-box mt-5">
              {(partenaires || []).map((item, index) => (
                <div key={index} className="partner-image shadow">
                  <img className="img-fluid rounded" alt="Partenaires" src={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {(projets || []).length > 0 && (
          <div className="section-projet mb-5">
            <SectionTitle title="projet_ip.title" />
            <div className="projet-ip-container">
              <div className="projet-ip-wrapper">
                <Slider ref={c => (slider = c)} {...settings}>
                  {(projets || []).map((item, index) => (
                    <CustomSlide history={history} onOpenModal={(value) => setModalOpen(value)} projet={item} t={t} user={user} key={index} />
                  ))}
                </Slider>
              </div>
              <div>
                <span className="projet-ip-button-left " onClick={previous}>
                  <IoArrowBack />
                </span>
                <span className="projet-ip-button-right" onClick={next}>
                  <IoArrowForward />
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="section-chiffre mb-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{chiffre?.users || 0}</h3>
                <div>
                  <RiTeamLine size={100} fill={'white'} />
                </div>
                <p className="text-white my-3 text-center" style={{ fontSize: '2rem' }}>
                  {t('chiffre.user')}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{chiffre?.projets || 0}</h3>
                <div>
                  <RiTeamLine size={100} fill={'white'} />
                </div>
                <p className="text-white my-3 text-center" style={{ fontSize: '2rem' }}>
                  {t('chiffre.projet')}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 my-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{`${millionFormat(chiffre?.total || 0)} XAF`}</h3>
                <div>
                  <RiCoinsLine size={100} fill={'white'} />
                </div>
                <p className="text-white my-3 text-center" style={{ fontSize: '2rem' }}>
                  {t('chiffre.money')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {(events || []).length > 0 && (
          <div className="section-event container mb-5">
            <SectionTitle title="event.title" />
            <div className="row g-2">
              {(events || []).map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="event-item shadow-lg">
                    <div className="event-image">
                      <img src={item.image ? item.image : placeholder} alt="" />
                    </div>
                    <div className="event-hover p-3">
                      <div className="w-100">
                        <div className="fw-bolder event-title">
                          {item.libelle}
                        </div>
                        <div className="row gx-3 gy-2 mb-2">
                          <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <FaCalendarCheck size={15} fill="#c5473b" className="me-1" />
                            {moment(item.date_evenement).format("DD MMMM YYYY")}
                          </div>
                          <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <FaClock size={15} fill="#c5473b" className="me-1" />
                            {t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          {item.places > item.total_reserve && (
                            <Button
                              className="mr-2"
                              type="submit"
                              variant="contained"
                              onClick={() => openParticipate(item)}
                            >
                              {t('button.participer')}
                            </Button>
                          )}
                          <Button
                            type="submit"
                            variant="contained"
                            color="white"
                            onClick={() => history.push(`events/${item.id}`)}
                          >
                            {t('button.savoir')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

        <Popup
          position="top center"
          open={modalOpen}
          closeOnDocumentClick={false}
          closeOnEscape={false}
          onClose={() => setModalOpen(false)}
        >
          <div className="container d-flex flex-column align-items-center text-center m-2">
            <p className="mt-1">{t('projet.details.warn._1')}</p>
            <p className="mt-1">{t('projet.details.warn._2')}</p>
            <div className="mt-3 d-flex justify-content-center">
              <Button variant="outlined" className="me-2" onClick={() => setModalOpen(false)}>
                {t('projet.details.warn.btn._1')}
              </Button>
              <Button variant="contained" className="me-2" onClick={() => goToProfile()}>
                {t('projet.details.warn.btn._2')}
              </Button>
            </div>
          </div>
        </Popup>

        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={etat.error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
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
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ language: state.app.language, user: state.auth.user })

export default withNamespaces()(connect(mapStateToProps)(HomeScreen));