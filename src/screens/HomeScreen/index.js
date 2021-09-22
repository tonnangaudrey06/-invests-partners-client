import { Container, Slider } from '../../components';
import { expertsData, projectsData, servicesData } from '../../data/homeData';
import '../../styles/Home.css'
import { TitleCustom } from './components';
import image1 from '../../assets/img/image1.png'
import image2 from "../../assets/img/partner-image.png";
import image3 from "../../assets/img/arriereplan.png";

import { FaCheck } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

import { SliderData } from '../../data/SliderData';

const HomeScreen = () => {
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
                i
              </div>
            </div>
            <div>
              <div style={{color: "#c5473b", marginBottom: 5, fontSize: "x-large"}}>
                {item.title}
              </div>
              <div>
                {item.content}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div className="image-banner">
        <img alt="img" src={image1} className="image-banner-image" />
        <div className="image-banner-content">
            <h5>Votre Meilleur Partenaire d'Affaire</h5>
            <p>Faire le choix de cheminer avec I&P, c’est opter pour une collaboration efficace et efficiente, parce que :</p>
            <p><FaCheck style={{fill: 'white'}} /> I&P est titulaire d’un agrément COSUMAF, afin de vous rassurer sur la légalité de ses activités et la tutelle habilitée à l’encadrement de son offre de services ;</p>
            <p><FaCheck style={{fill: 'white'}} /> Nous avons accès par le canal de nos différents partenaires, à une base de données, régulièrement actualisée, des potentiels porteurs de projet ainsi que les réalités et opportunités disponibles au Cameroun, au Rwanda et en Cote d’Ivoire ;</p>
            <p><FaCheck style={{fill: 'white'}} /> Présence dans les 10 régions à travers son réseau et ses partenariats avec des organisations professionnelles, des PME, etc.</p>
            <p><FaCheck style={{fill: 'white'}} /> Dans un souci de plus en plus urgent de dématérialisation des services, nous disposons  d’une plateforme Web et d’une application mobile (Apple et PlayStore)  pour faciliter les échanges en temps réel  entre investisseurs, porteurs de projet, partenaires et consultants d’I&P;</p>
            <p><FaCheck style={{fill: 'white'}} /> Nous vous garantissions enfin un accompagnement à 360° pour la réalisation de vos différents projets.</p>
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
              <div className="experts-bio">{item.bio}</div>
              <div className="experts-button"><MdAddCircle fill="#c5473b" size={40} /></div>
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
        <div className="projects">
          {projectsData.map((item) => (
            <div className="projects-component">
              <div style={{width: '40%'}}>
                <img className="projects-image" src={item.image} alt="" />
              </div>
              <div className="projects-content">
                {item.title}
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
      </div>

      <div>
        <img className="img-banner" src={image3}></img>
      </div>

      <div>
        <TitleCustom title="EVENEMENTS IMPORTANTS" />
        <div className="events">
        <div className="events-images">
          <img className="events-image" src={image1} alt="" />
          <img className="events-image" src={image1} alt="" />
          <img className="events-image" src={image1} alt="" />
          <img className="events-image" src={image1} alt="" />
        </div>
        </div>
      </div>
    </Container>
   );
}
 
export default HomeScreen;