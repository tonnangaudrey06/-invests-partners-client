
import '../../styles/home.scss';
import 'reactjs-popup/dist/index.css'

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import { Container, SectionTitle, BannerSlider } from '../../components';

import { HomeData, SlideData } from '../../data';

import Slider from "react-slick";

import image1 from '../../assets/img/image1.png';
import image2 from "../../assets/img/partner-image.png";
// import image3 from "../../assets/img/arriereplan.png";
import imag22 from "../../assets/img/imag22.png";
import imag26 from "../../assets/img/imag26.png";
import imag27 from "../../assets/img/imag27.png";
import imag28 from "../../assets/img/imag28.png";

import { GrMail } from 'react-icons/gr';
import { TiCalendar } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { MdAddCircle, MdPhoneInTalk } from 'react-icons/md';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { WiDayHail } from "react-icons/wi";

import { AppService } from '../../core/services';

const CustomSlide = ({ projet, ...props }) => {

  return (
    <div className="p-3" {...props}>
      <div className="projet-ip-item d-flex justify-content-start">
        <div className="projet-ip-image">
          <img src={projet.image} alt="" style={{ borderRadius: "10px 0 0 10px" }} />
        </div>
        <div className="projet-ip-content justify-content-center" >
          <h3>{projet.title}</h3>
          <p>{projet.content}</p>
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
            {projet.cash} XAF déjà investi
          </div>
          <div className="projet-ip-details-fav">
            <AiOutlineHeart fill={"#c5473b"} size={25} />
          </div>
        </div>
      </div>
    </div >
  );
}

const HomeScreen = () => {

  const [navigateBanner, setNavigateBanner] = useState(false)
  
  const [sliders, setSliders] = React.useState([]);
  
  const [partenaires, setPartenaires] = React.useState([]);
  
  const [projets, setProjets] = React.useState([]);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  var settings2 = {
    dots: false,
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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let slider = new Slider(settings);
  let slider2 = new Slider(settings2);

  const fetchSlide = () => {
    AppService.slider().then(
      rs => {
        setSliders(rs.data.data);
      }
    )
  }

  const fetchPartenaire = () => {
    AppService.partenaire().then(
      rs => {
        setPartenaires(rs.data.data);
      }
    )
  }

  const fetchProjet = () => {
    AppService.partenaire().then(
      rs => {
        setProjets(rs.data.data);
      }
    )
  }

  React.useEffect(() => {
    fetchSlide();
    fetchPartenaire();
    fetchProjet();
  }, [])

  const next = () => {
    slider.slickNext();
  }

  const previous = () => {
    slider.slickPrev();
  }

  return (
    <div>
      <BannerSlider slides={sliders} />

      <Container header footer>
        <div className="section-service container-fluid px-5 pt-3 pb-5">
          <SectionTitle title="NOS SERVICES" />
          <div className="row mt-5">
            {HomeData?.servicesData.map((item, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4 service-item">
                <div className="service-icon">
                  <img src={item.icon} style={{ width: 30 }} alt="invests & partners service" />
                </div>
                <div className="service-content">
                  <div className="service-content-title">{item.title}</div>
                  <div className="service-content-text">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-banner">
          <img alt="Banner backgound" src={image1} className="banner-image" />
          <div className="banner-wrapper  ">
            <div className="banner-content">
              <h5 style={{ marginTop: '.5em' }}>Votre meilleur partenaire d'affaire</h5>
              <p className="sousT">Faire le choix de cheminer avec Invests & Partners, c’est opter pour une collaboration efficace et efficiente, parce que :</p>
              {navigateBanner &&
                <div className="vv lh-base mt-1 ">
                  {/* <p className="inner-wrapper" style={{ marginTop: '.5em' }} ><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} /> Invests & Partners est titulaire d’un agrément COSUMAF, afin de vous rassurer sur la légalité de ses activités et la tutelle habilitée à l’encadrement de son offre de services ;</p> */}
                  <p style={{ marginTop: '.5em' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} /> Nous avons accès par le canal de nos différents partenaires, à une base de données, régulièrement actualisée, des potentiels porteurs de projet ainsi que les réalités et opportunités disponibles au Cameroun, au Rwanda et en Cote d’Ivoire ;</p>
                  <p style={{ marginTop: '.5em' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} /> Présence dans les 10 régions à travers son réseau et ses partenariats avec des organisations professionnelles, des PME, etc.</p>
                </div>
              }
              {!navigateBanner &&
                <div className="fs-5 lh-base mt-1 vv">
                  <p style={{ marginTop: '.5em' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} /> Dans un souci de plus en plus urgent de dématérialisation des services, nous disposons  d’une plateforme Web et d’une application mobile (Apple et PlayStore)  pour faciliter les échanges en temps réel  entre investisseurs, porteurs de projet, partenaires et consultants d’I&P;</p>
                  <p style={{ marginTop: '.5em' }}><FaCheck style={{ fill: 'white', marginRight: '.5em' }} size={13} /> Nous vous garantissions enfin un accompagnement à 360° pour la réalisation de vos différents projets.</p>
                </div>
              }
            </div>
            <div className="banner-button">
              <FaArrowLeft className="previous" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
              <FaArrowRight className="next" style={{ cursor: 'pointer' }} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' />
            </div>
          </div>
        </div>

        <div className="section-expert pt-3 pb-5">
          <SectionTitle title="NOS EXPERTS" />
          <div className="expert-grid mt-5 row">
            {HomeData.expertsData.map((item, index) => (
              <div key={index} className="expert-item col-sm">
                <div style={{ width: '100%' }}>
                  <img className="expert-image" alt="Expert I&P" src={item.image} />
                </div>
                <div className="expert-name">{item.name}</div>
                <div className="expert-bibio"><p>{item.role}</p></div>
                <div className="expert-button">
                  <Popup
                    trigger={<MdAddCircle className="expert-button-view" fill="#c5473b" size={40} />}
                    modal
                    nested
                  >
                    {close => (
                      <div className="modal-experts">
                        <button className="modal-experts-close" onClick={close}>
                          &times;
                        </button>
                        <div className="modal-experts-content">
                          <img className="modal-experts-image" alt="Expert I&P" src={item.image} />
                          <div className="modal-experts-present">
                            <p className="name">{item.name}</p>
                            <div style={{ marginBottom: 20 }}>{item.role}</div>
                            <div className="bibio">Biographie</div>
                            <p>{item.bio}</p>
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
            ))}
          </div>
        </div>

        <div className="section-partner container-fluid pt-3 pb-5 bg-white">
          <SectionTitle title="NOS PARTENAIRES" />
          <div className="partner-text mt-5">
            <p>Invests & Partners s'assure de vous offrir le meilleur accompagnement possible dans vos projects, et s'entoure ainsi de partenaires de qualité qui ont une maitrise de l'environnement économique. Ce réseau de partenaires a vocation à s'élargir afin de répondre au mieux à vos attentes.</p>
            <div className="mt-4 row">
              <div className="col-sm">
                
                <img className="partner-image" alt="Partenaires" src={image2} />
              </div>

            </div>
          </div>
        </div>

        <div className="section-projet pt-3 pb-5">
          <SectionTitle title="Nos projets" />
          <div className="projet-ip-container mt-5">
            <div className="projet-ip-wrapper">
              <Slider ref={c => (slider = c)} {...settings2}>
                {HomeData?.projectsData.map((item, index) => (
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

        <div className="section-chiffre py-2 pb-5">
          <SectionTitle title="Le Cameroun: une terre propice pour l'agriculture" titleCss={{ color: 'white' }} dividerCss={{ borderColor: 'white' }} />
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex align-items-center flex-column">
                  <h3 className="display-3 text-white">10</h3>
                  <div>
                    <WiDayHail size={100} fill={'white'} />
                  </div>
                  <p className="fs-3 text-white my-3 text-center">
                    Les 10 régions du Cameroun offrent de nombreuses opportunités d'affaires
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center flex-column">
                  <h3 className="display-3 text-white">100 mm</h3>
                  <div>
                    <WiDayHail size={100} fill={'white'} />
                  </div>
                  <p className="fs-3 text-white my-3 text-center">
                    Les 10 régions du Cameroun offrent de nombreuses opportunités d'affaires
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center flex-column">
                  <h3 className="display-3 text-white">9M Ha</h3>
                  <div>
                    <WiDayHail size={100} fill={'white'} />
                  </div>
                  <p className="fs-3 text-white my-3 text-center">
                    Les 10 régions du Cameroun offrent de nombreuses opportunités d'affaires
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* <img className="img-banner" src={image3} alt="" /> */}
        </div>

        <div className="section-event pt-3 pb-5">
          <SectionTitle title="ÉVÉNEMENTS IMPORTANTS" />
          <div className="event-grid mt-5">
            <div className="event-wrapper">
              <div className="event-item">
                <img className="event-image" src={imag22} alt="" />
                <div className="event-hover">
                  <div style={{ margin: 8 }}>
                    <div className="fs-2 fw-bolder">
                      Titre de l'evenement
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <TiCalendar size={20} fill="#c5473b" className="me-1" /> 25-06-2021 | 12H00
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                      <div className="event-button">
                        Participer
                      </div>
                      <div className="event-button">
                        En savoir plus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <img className="event-image" src={imag26} alt="" />
                <div className="event-hover">
                  <div style={{ margin: 8 }}>
                    <div className="fs-2 fw-bolder">
                      Titre de l'evenement
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <TiCalendar size={20} fill="#c5473b" className="me-1" /> 25-06-2021 | 12H00
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                      <div className="event-button">
                        Participer
                      </div>
                      <div className="event-button">
                        En savoir plus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <img className="event-image" src={imag27} alt="" />
                <div className="event-hover">
                  <div style={{ margin: 8 }}>
                    <div className="fs-2 fw-bolder">
                      Titre de l'evenement
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <TiCalendar size={20} fill="#c5473b" className="me-1" /> 25-06-2021 | 12H00
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                      <div className="event-button">
                        Participer
                      </div>
                      <div className="event-button">
                        En savoir plus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="event-item">
                <img className="event-image" src={imag28} alt="" />
                <div className="event-hover">
                  <div style={{ margin: 8 }}>
                    <div className="fs-2 fw-bolder">
                      Titre de l'evenement
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <TiCalendar size={20} fill="#c5473b" className="me-1" /> 25-06-2021 | 12H00
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                      <div className="event-button">
                        Participer
                      </div>
                      <div className="event-button">
                        En savoir plus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeScreen;