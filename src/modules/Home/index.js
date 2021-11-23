
import '../../styles/home.scss';
import 'reactjs-popup/dist/index.css'

import React, { useState } from 'react';
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

import { moneyFormat, millionFormat } from '../../core/utils/helpers'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

// import imag22 from "../../assets/img/imag22.png";
import moment from 'moment';
import 'moment/locale/fr';

import { GrMail } from 'react-icons/gr';
import { TiCalendar } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { RiEyeFill, RiTeamLine, RiCoinsLine } from 'react-icons/ri';
import { MdPhoneInTalk } from 'react-icons/md';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

import { AppService, EventService, CampayService } from '../../core/services';

import { withNamespaces } from "react-i18next";

const CustomSlide = ({ projet, ...props }) => {

  return (
    <div className="p-3" {...props}>
      <div className="projet-ip-item d-flex justify-content-start">
        <div className="projet-ip-image">
          <img src={projet.logo} alt="" style={{ borderRadius: "10px 0 0 10px" }} />
        </div>
        <div className="projet-ip-content justify-content-center" >
          <h3>{projet.intitule}</h3>
          <p>{projet.description}</p>
          <Popup
            trigger={<button className="btn btn-primary btn-sm">
              Je suis intéressé
            </button>}
            modal
            nested
          >
            {close => (
              <div className="modal-experts">
                <button className="modal-experts-close" onClick={close}>
                  &times;
                </button>
                <div className="modal-experts-content">

                </div>
              </div>
            )}
          </Popup>

          <div className="projet-ip-details-invest">
            {projet.iv_total} XAF déjà investis
          </div>
          <div className="projet-ip-details-fav">
            <AiOutlineHeart fill={"#c5473b"} size={25} />
          </div>
        </div>
      </div>
    </div >
  );
}


const BannerSlider = React.lazy(() => import('../../components/Slider'));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const HomeScreen = ({ history, t }) => {

  const [navigateBanner, setNavigateBanner] = useState(false)

  const [sliders, setSliders] = React.useState([])

  const [partenaires, setPartenaires] = React.useState([])

  const [projets, setProjets] = React.useState([])

  const [events, setEvents] = React.useState([])

  const [chiffre, setChiffres] = React.useState([])

  const [event, setEvent] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
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

  const handleParticipe = () => {
    EventService.participate(event?.id, participation).then(
      (rs) => {
        fetchEvents();
        hideParticipate();
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

  const countdown = (refrence) => {
    let x = setInterval(async () => {
      try {
        const rs = await CampayService.checkPayment(refrence);
        if (rs.status === "FAILED") {
          clearInterval(x);
          setPaiement({ pending: false, failed: true, message: `La transaction a échoué. Essayez à nouveau` });
        } else if (rs.status === "SUCCESSFUL") {
          clearInterval(x);
          payementDone()
          handleParticipe();
        }
      } catch (error) {
        console.log(error);
      }
    }, 5000);
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
          console.log(error);
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

  // var settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "100px",
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   arrows: false,
  // };

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

  const fetchSlide = () => {
    AppService.slider().then(
      rs => {
        setSliders(rs?.data?.data);
      }
    )
  }

  const fetchPartenaire = () => {
    AppService.partenaire().then(
      rs => {
        setPartenaires(rs?.data?.data);
      }
    )
  }

  const fetchProjet = () => {
    AppService.projet().then(
      rs => {
        setProjets(rs?.data?.data);
      }
    )
  }

  const fetchEvents = () => {
    EventService.getLatest().then(
      rs => {
        setEvents(rs?.data?.data);
      }
    )
  }

  const fetchChiffre = () => {
    AppService.chiffre().then(
      rs => {
        setChiffres(rs?.data?.data);
      }
    )
  }

  React.useEffect(() => {
    fetchSlide();
    fetchPartenaire();
    fetchProjet();
    fetchEvents();
    fetchChiffre();
  }, [])

  const next = () => {
    slider.slickNext();
  }

  const previous = () => {
    slider.slickPrev();
  }

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <BannerSlider slides={sliders} translate={t} />
      </div>

      <Container header footer>
        <div className="section-service container-fluid px-5 pt-3 pb-5">
          <SectionTitle title="service.title" />
          <div className="row mt-5">
            {HomeData?.servicesData.map((item, index) => (
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

        <div className="section-banner">
          <div className="seperator"></div>
          <div className="banner-wrapper">
            <div className="banner-content">
              <h5 className="text-white">Votre meilleur partenaire d'affaire</h5>
              <p className="text-white text-justify" style={{ margin: '1.2vw 0' }}>Faire le choix de cheminer avec Invest & Partners, c’est opter pour une collaboration efficace et efficiente, parce que :</p>
              {navigateBanner &&
                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: '1.1vw' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />Nous avons accès par le canal de nos différents partenaires, à une base de données, régulièrement actualisée, des potentiels porteurs de projet ainsi que les réalités et opportunités disponibles au Cameroun, au Rwanda et en Cote d’Ivoire ;</li>
                  <li className="text-white" style={{ marginTop: '1.1vw' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />Présence dans les 10 régions à travers son réseau et ses partenariats avec des organisations professionnelles, des PME, etc.</li>
                </ul>
              }
              {!navigateBanner &&

                <ul className="list-unstyled lh-base">
                  <li className="text-white" style={{ marginTop: '1.1vw' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />Dans un souci de plus en plus urgent de dématérialisation des services, nous disposons  d’une plateforme Web et d’une application mobile (Apple et PlayStore)  pour faciliter les échanges en temps réel  entre investisseurs, porteurs de projet, partenaires et consultants d’I&P;</li>
                  <li className="text-white" style={{ marginTop: '1.1vw' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} />Nous vous garantissions enfin un accompagnement à 360° pour la réalisation de vos différents projets.</li>
                </ul>
              }
            </div>
            <div className="banner-button">
              <FaArrowLeft className="previous" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
              <FaArrowRight className="next" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
            </div>
          </div>
        </div>

        <div className="section-expert pt-3">
          <SectionTitle title="expert.title" />
          <div className="expert-grid mt-5 row d-flex justify-content-center">
            {HomeData.expertsData.map((item, index) => (
              <div key={index} className="col-md-3 d-flex justify-content-center mb-5">
                <div className="expert-item" style={{ width: '16rem' }}>
                  <div className="expert-image-home shadow" style={{ width: '100%' }}>
                    <img className="expert-image" alt="Expert I&P" src={item.image} />
                  </div>
                  <div className="expert-name">{item.name}</div>
                  <div className="expert-bibio fw-bolder"><p>{item.role}</p></div>
                  <div className="expert-button">
                    <Popup
                      trigger={<RiEyeFill className="expert-button-view" fill="#c5473b" size={30} />}
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
                            <img className="modal-experts-image" alt="Expert I&P" src={item.image} />
                            <div className="modal-experts-present">
                              <p className="name">{item.name}</p>
                              <div className="poste" style={{ marginBottom: 20 }}>{item.role}</div>
                              <div className="bibio">Biographie</div>
                              <p className="lh-base text-justify">{item.bio}</p>
                              <p className="modal-experts-contact">
                                <MdPhoneInTalk fill="#c5473b" size={20} style={{ marginRight: 5 }} />
                                {item.tel}
                                <GrMail fill="#c5473b" size={20} style={{ marginLeft: 20, marginRight: 5 }} />
                                {item.email}
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

        <div className="section-partner py-3">
          <SectionTitle title="partner.title" />
          <div className="partner-text mt-5">
            <p>{t('partner.text')}</p>
            <div className="mt-5 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              {(partenaires || []).map((item, index) => (
                <div key={index} className="partner-image shadow-lg mx-2">
                  <img className="img-fluid rounded" alt="Partenaires" src={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {projets.length > 0 && (
          <div className="section-projet pt-3 pb-5">
            <SectionTitle title="projet_ip.title" />
            <div className="projet-ip-container mt-5">
              <div className="projet-ip-wrapper">
                <Slider ref={c => (slider = c)} {...settings}>
                  {projets.map((item, index) => (
                    <CustomSlide projet={item} key={index} />
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

        <div className="section-chiffre py-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{chiffre.users}</h3>
                <div>
                  <RiTeamLine size={100} fill={'white'} />
                </div>
                <p className="text-white my-3 text-center" style={{ fontSize: '2rem' }}>
                  {t('chiffre.user')}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{chiffre.projets}</h3>
                <div>
                  <RiTeamLine size={100} fill={'white'} />
                </div>
                <p className="text-white my-3 text-center" style={{ fontSize: '2rem' }}>
                  {t('chiffre.projet')}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-4">
              <div className="d-flex align-items-center flex-column mb-md-2 m-lg-0">
                <h3 className="text-white" style={{ fontSize: '3rem' }}>{millionFormat(chiffre.total)} XAF</h3>
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

        {events.length > 0 && (
          <div className="section-event container pt-3 pb-5">
            <SectionTitle title="event.title" />
            <div className="row mt-5">
              {/* <div className="event-wrapper"> */}
              {events.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="event-item shadow-lg mx-1 mb-2">
                    <div className="event-image">
                      <img src={item.image ? item.image : placeholder} alt="" />
                    </div>
                    <div className="event-hover">
                      <div style={{ margin: 8 }}>
                        <div className="fw-bolder event-title" style={{ fontSize: '1.5rem' }}>
                          {item.libelle}
                        </div>
                        {/* <p className="event-text">{item.description}</p> */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                          <TiCalendar size={20} fill="#c5473b" className="me-1" />{moment(item.date_evenement).format("DD MMMM YYYY")} | <small>{t('date.time_format', { start: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).format("HH[H]mm"), end: moment(new Date('Thu, 01 Jan 1970 ' + item.heure_debut)).add(+item.duree, 'hours').format('HH[H]mm') })}</small>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                          {item.places > item.total_reserve && (
                            <div className="event-button" onClick={() => openParticipate(item)}>
                              {t('button.participer')}
                            </div>
                          )}
                          <button className="event-button" onClick={() => history.push(`events/${item.id}`)}>
                            {t('button.savoir')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* </div> */}
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
            <Modal.Title>Participation à l'évenement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-1 lh-base text-center">Vous voulez participer à l'évenement <strong>{event?.libelle}</strong></p>
            {event?.prix ? (
              <p className="mb-1 text-muted text-center">La participation à cette évenement coûtera <strong>{moneyFormat(event?.prix * participation?.places)} XAF</strong></p>
            ) : (
              <p className="mb-1 text-muted text-center">La participation à cette évenement est gratuit</p>
            )}
            <hr />
            <h5 className="fw-bolder my-1">Informations personnelles</h5>
            <Grid>
              <Grid item xs={12} md={12}>
                <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    type="text"
                    variant="filled"
                    label="Nom complet"
                    placeholder="Nom & prenom"
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
                    label="Email"
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
                    label="Téléphone"
                    placeholder="Téléphone"
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
                    label="Nombre places"
                    placeholder="Places"
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
                    <h6 className="fw-bolder">Choisir le moyen de paiement</h6>
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
                    <h6 className="fw-bolder mt-2 text-center">Votre numéro de téléphone</h6>
                    <PhoneInput
                      defaultCountry={loc.country}
                      placeholder="Numéro de téléphone"
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
                      Payer
                    </LoadingButton>
                  ) : (
                    <LoadingButton
                      className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                      onClick={checkSeat}
                      variant="contained"
                    >
                      Participer
                    </LoadingButton>
                  )}
                </div>
              </Grid>
            </Grid>
            {/*  */}
          </Modal.Body>
        </Modal>
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
    </div>
  );
}

export default withNamespaces()(HomeScreen);