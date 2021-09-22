import { Container, Slider } from '../../components';
import { expertsData, projectsData, servicesData } from '../../data/homeData';
import '../../styles/Home.css'
import { TitleCustom } from './components';
import image1 from '../../assets/img/image1.png'
import image2 from "../../assets/img/partner-image.png";
import image3 from "../../assets/img/arriereplan.png";
import imag22 from "../../assets/img/imag22.png";
import imag26 from "../../assets/img/imag26.png";
import imag27 from "../../assets/img/imag27.png";
import imag28 from "../../assets/img/imag28.png";

import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { MdAddCircle, MdPhoneInTalk } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

import { SliderData } from '../../data/SliderData';
import { TiCalendar, TiInfoLarge } from 'react-icons/ti';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { GrMail } from 'react-icons/gr';
import React, { useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const HomeScreen = () => {
  const [navigateBanner, setNavigateBanner] =useState(false)
  const sideScroll = (
    element,
    speed,
    distance,
    step
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const contentWrapper = React.useRef(null);

  return ( 
    <Container header footer>
      <Slider slides={SliderData} />
      <div>
        <TitleCustom title="NOS SERVICES" />
        <div className="services-grid">
          {servicesData.map((item) => (
            <div className="service-component">
            <div>
              <div className="services-icon">
                <img src={item.icon} style={{width:30}} />
              </div>
            </div>
            <div>
              <div style={{color: "#c5473b", marginBottom: 5, fontSize: "x-large"}}>
                {item.title}
              </div>
              <div style={{fontWeight: 'bold'}}>
                {item.content}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div className="image-banner">
        <img alt="img" src={image1} className="image-banner-image" />
        <div style={{position: 'absolute', right:25, top:25, maxWidth:700, height:"90%"}}>
        <div className="image-banner-content">
            <h5>Votre Meilleur Partenaire d'Affaire</h5>
            <p>Faire le choix de cheminer avec I&P, c’est opter pour une collaboration efficace et efficiente, parce que :</p>
            {navigateBanner && 
            <div>
              <p><FaCheck style={{fill: 'white'}} size={15} /> I&P est titulaire d’un agrément COSUMAF, afin de vous rassurer sur la légalité de ses activités et la tutelle habilitée à l’encadrement de son offre de services ;</p>
              <p><FaCheck style={{fill: 'white'}} size={15} /> Nous avons accès par le canal de nos différents partenaires, à une base de données, régulièrement actualisée, des potentiels porteurs de projet ainsi que les réalités et opportunités disponibles au Cameroun, au Rwanda et en Cote d’Ivoire ;</p>
              <p><FaCheck style={{fill: 'white'}} size={15} /> Présence dans les 10 régions à travers son réseau et ses partenariats avec des organisations professionnelles, des PME, etc.</p>
            </div>
            }
            {!navigateBanner && 
            <div>
              <p><FaCheck style={{fill: 'white'}} size={15} /> Dans un souci de plus en plus urgent de dématérialisation des services, nous disposons  d’une plateforme Web et d’une application mobile (Apple et PlayStore)  pour faciliter les échanges en temps réel  entre investisseurs, porteurs de projet, partenaires et consultants d’I&P;</p>
              <p><FaCheck style={{fill: 'white'}} size={15} /> Nous vous garantissions enfin un accompagnement à 360° pour la réalisation de vos différents projets.</p>
            </div>
            }
        </div>
          <div style={{position: 'absolute', bottom: 30, right:"50%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 100}}>
            <FaArrowLeft style={{cursor: 'pointer'}} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' size={30}/>
            <FaArrowRight style={{cursor: 'pointer'}} onClick={() => setNavigateBanner(!navigateBanner)} fill='white' size={30}/>
          </div>
        </div>
      </div>

      <div>
        <TitleCustom title="NOS EXPERTS" />
        <div className="experts-grid">
          {expertsData.map((item) => (
            <div className="experts-component">
              <div style={{width: '100%'}}>
                <img className="experts-image" alt="img" src={item.image} />
              </div>
              <div className="experts-name">{item.name}</div>
              <div className="experts-bio"><p>{item.role}</p></div>
              <div className="experts-button">
                
                <Popup
                  trigger={<MdAddCircle className="experts-button-icon" fill="#c5473b" size={40} />}
                  modal
                  nested

                >
                  {close => (
                    <div className="modal">
                      <button className="close-modal" onClick={close}>
                        &times;
                      </button>
                      <div className="modal-content">
                        <img className="modal-image" alt="img" src={item.image} />
                        <div className="modal-text">
                          <p style={{marginTop: 0, color: "#c5473b", fontSize: 25, marginBottom: 0}}>{item.name}</p>
                            <div style={{marginBottom:20}}>{item.role}</div>
                            <div style={{marginTop: 0, color: "#c5473b", fontSize: 25}}>Biographie</div>
                            {item.bio}
                          <p className="contact-modal">
                          <MdPhoneInTalk fill="#c5473b" size={20} style={{marginRight: 5}} /> 
                          {item.tel}
                          <GrMail fill= "#c5473b" size={20} style={{marginLeft:20, marginRight: 5}} /> 
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
      
      <div>
        <TitleCustom title="NOS PARTENAIRES" />
        <div className="partner-text">
          <p>I&P s'assure de vous offrir le meilleur accompagnement possible dans vos projects, et s'entoure ainsi de partenaires de qualité qui ont une maitrise de l'environnement économique. Ce réseau de partenaires a vocation à s'élargir afin de répondre au mieux à vos attentes.</p>
          <img className="partner-image" alt="partner-img" src={image2} />
        </div>
      </div>

      <div>
        <TitleCustom title="PROJETS POPULAIRES" />
        <div className="projects-container">
        <div ref={contentWrapper} className="projects">
          {projectsData.map((item) => (
            <div className="projects-component">
              <div style={{width: '40%'}}>
                <img className="projects-image" src={item.image} alt="" />
              </div>
              <div className="projects-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="projects-button">
                  Je suis intéressé
                </div>
                <div className="projects-content-bottom">
                  {item.cash} XAF Déjà investi
                  <AiOutlineHeart fill={"#c5473b"} size={25} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
            <IoArrowBack className="projects-button-left" 
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, -10);
            }} />
            <IoArrowForward className="projects-button-right"
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, 10);
            }} />
        </div>
        </div>
      </div>

      <div>
        <img className="img-banner" src={image3}></img>
      </div>

      <div>
        <TitleCustom title="EVENEMENTS IMPORTANTS" />
        <div className="events">
        <div className="events-images">
          <div className="events-component">          
            <img className="events-image" src={imag22} alt="" /> 
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div>           
          </div>

          <div className="events-component">          
            <img className="events-image" src={imag26} alt="" /> 
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div>           
          </div>

          <div className="events-component">          
            <img className="events-image" src={imag27} alt="" /> 
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    En savoir plus
                  </div>
                </div>
              </div>
            </div>           
          </div>

          <div className="events-component">          
            <img className="events-image" src={imag28} alt="" /> 
            <div className="events-div-hover">
              <div style={{margin: 8}}>
                <div style={{fontWeight: 'bold'}}>
                  Titre de l'evenement
                </div>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <div className="events-hover-button">
                    Participer
                  </div>
                  <div style={{cursor: 'pointer'}}>
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
   );
}
 
export default HomeScreen;