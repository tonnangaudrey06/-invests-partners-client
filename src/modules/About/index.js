import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ServicesNavigation from './components/ServicesNavigation';
import ServicesDetails from "./components/ServicesDetails";
import { Container } from '../../components'

import Button from '@mui/material/Button';

import Assii from "../../assets/img/assii.jpg";
import ceiImg from "../../assets/img/cal.jpg";
import rechFinancement from "../../assets/img/argent.jpg";
import relation from "../../assets/img/relation.jpg";
import strategy from "../../assets/img/strategy.jpg";
import manage from "../../assets/img/manage.jpg";

import "../../styles/about.scss";

const Cei = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={ceiImg} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>Parler à un conseiller</Button>} rightMessage={
                <div>
                    <h4 className="lh-base">
                        Vous souhaitez  placer des capitaux dans un projet financier, immobilier ou d’entreprise? I&P est le conseiller qu’il vous faut :
                    </h4>
                    <div className="points mt-4">
                        <span className="check"><span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">Conseil en investissement financier</span> <p>
                            Notre défi ici est de vous recommander l'investissement financier le mieux adapté à vos projets et objectifs. Ainsi, nous sélectionnons pour vous  les fonds  réalisant les meilleurs profits.

                        </p></span>
                        <span className="check mt-1"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">Conseil en investissement immobilier</span> <p>
                            Grâce à un réseau fort de promoteurs immobiliers, notre offre s’adapte parfaitement à vos attentes, vous assurant ainsi un minimum de rentabilité.

                        </p></span>
                        <span className="check mt-1"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">Conseil en investissement dans les projets d’entreprises</span> <p>
                            Notre rôle consiste à préconiser l’investissement dans les projets d’entreprise à fort potentiel mieux adaptés et donc plus rentables.

                        </p></span>
                    </div>
                </div>
            } titreService="CONSEIL EN INVESTISSEMENT" />
        </div>
    );
};

const Aii = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={Assii} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>Parler à un conseiller</Button>} rightMessage={
                <p>
                    Le Cameroun est un pays offrant d'énormes possibilités d'investissement. I&P accompagne les entreprises, en particulier les TPE et les SME, qui sont généralement lésées dans la recherche d'opportunités d'investissement.
                    <br /> <br />

                    I&P accompagne l'investisseur dans une ou plusieurs phases de son processus d'implantation : évaluation ou identification de l'idée du projet, choix de la localisation du site d'implantation, préparation du business plan, constitution de la société, mise en place et lancement de l'activité, extension et développement de la société etc…
                    <br /> <br />

                    Prenant en considération les nombreuses incertitudes de notre environnement économique et sociopolitique susceptible d’impacter le succès, I&P s'efforce d’en minimiser les effets au travers d’une méthodologie qui permet de quantifier l'activité prévisible, de mesurer les ressources nécessaires et enfin de rassembler les moyens à mettre en œuvre.
                    <br /> <br />

                    Aussi, ayant une parfaite connaissance des réalités de l'environnement des affaires au Cameroun, nous déployons les ressources nécessaires pour identifier et définir les besoins des entreprises afin d’y apporter promptement des solutions efficaces orientée " efficacité et valeur ajoutée ".
                </p>
            } titreService="ASSISTANCE A L'INVESTISSEMENT ET L'IMPLANTATION" />
        </div>
    );
};

const Rf = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={rechFinancement} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/dashboard')}>Chercher un financement</Button>} rightMessage={
                <p>
                    La recherche de financements et de contributions est une étape importante de la réalisation d'un projet où on fait appel à la collaboration de partenaires. Leur contribution peut être financière et prendre la forme de subventions, de dons ou de commandites. Elle peut aussi se faire par une contribution en biens et services, tels que le prêt d'équipements, la participation d'experts, les services divers d'analyses.
                    <br /> <br />
                    Dans son approche, I&P considère, en plus des financements traditionnels (banque, levée de fonds, demandes aux institutions financières, etc.), des financements moins conventionnels ou alternatifs ; comme les tontines.
                    <br /> <br />
                    Les tontines ont le potentiel pour devenir l'une des principales sources de financement des projets.  Il suffit de redéfinir certains aspects structurels et organisationnels de ce concept populaire pour l'adapter au monde de l'entreprise.
                    <br /> <br />
                    Notre objectif est de permettre aux entrepreneurs de différentes régions, parties du continent et du monde d'être en mesure d'autofinancer leurs projets en se soutenant mutuellement.
                </p>
            } titreService="RECHERCHE DE FINANCEMENTS" />
        </div>
    );
};

const Ip = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={rechFinancement} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/dashboard')}>Chercher un financement</Button>} rightMessage={
                <div>
                    <p>
                        I&P offre ce service aux particuliers et aux entreprises pour leur faciliter la <span className='marked'>prise de décisions éclairées</span>. En ce qui concerne tous les choix importants liés à un projet d’investissement ou à un projet de vie. Nous fournissons ainsi des <span className='marked'>bilans précis et détaillés</span> de la situation patrimoniale, proposons des <span className='marked'>ajustements en fonction de la mutation des besoins du client</span>.  <br /> <br />
                        A cet effet, nous effectuons au préalable un diagnostic patrimonial indispensable pour définir les attentes, les besoins, les contraintes et les freins du commanditaire. Ce diagnostic permet de hiérarchiser ses priorités et de définir avec lui la stratégie la plus adaptée à une gestion optimale de son patrimoine. <br />
                    </p>
                    <p className="bold">
                        Aussi nous intervenons dans les domaines de :
                    </p>
                    <div className="points2">
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">gestion financière (épargne, capital)</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">gestion immobilière: achat, vente, location</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">accompagnement lors du rachat ou lors de la vente d’une entreprise</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">accompagnement juridique: préparation du contrat de mariage, divorce</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">conseil fiscal.</span></span>
                    </div>
                </div>
            } titreService="INGENIERIE PATRIMONIALE" />
        </div>
    );
};

const Mr = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={relation} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/projets')}>Découvrir les opportunités</Button>} rightMessage={
                <p>
                    Par le biais de sa plateforme, I&P offre une <span className='marked'>véritable zone de flux</span> entre l’offre des porteurs de projets et la demande des investisseurs potentiels.  <br /><br />

                    L’objectif ici est de mettre en relation des entreprises avec des entreprises, des entreprises avec des particuliers ou des particuliers avec des particuliers afin qu’ils puissent <span className='marked'>trouver et/ou rentabiliser le produit ou le service dont ils ont besoin</span>. <br /> <br />

                    Cette dématérialisation de l’offre et de la demande <span className='marked'>va inciter la rencontre</span> entre des personnes physiques et morales qui n’avaient, jusque-là, rien en commun. <br /> <br />

                    Le principe est simple : lorsque vous avez <span className='marked'>une offre à proposer</span>, vous la publiez sur la plateforme I&P afin qu’elle soit visible de vos éventuels futurs partenaires d’affaires; et dans le cas où vous êtes à la <span className='marked'>recherche d’une offre</span>, vous avez la possibilité de consulter celles présentes et les comparer entre elles afin d’opérer le choix qui correspond le mieux à vos attentes. <br /> <br />
                </p>
            } titreService="MISE EN RELATION" />
        </div>
    );
};

const Se = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={strategy} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>Parler à un conseiller</Button>} rightMessage={
                <p>
                    Ce service s’adresse principalement aux dirigeants d’entreprise dans la meure ou I&P les accompagne dans l’élaboration de leur business model, avec l’objectif de capitaliser sur les avantages de l’entreprise pour dégager des axes de croissance et de compétitivité. Nous intervenons ainsi dans le cadre de nombreuses missions : mise en place d’une stratégie de croissance, repositionnement de l’entreprise sur son marché, diversification, développement de nouveaux produits ou services, transformation digitale, optimisation de la relation client, entre autres. <br /><br />

                    Au-delà de cette fonction de conseil, nous déployons également un volet opérationnel à travers la réalisation des audits et benchmarks, l’analyse des marchés, I ’appropriation de l’environnement interne et externe, l’identification des problématiques et la mise en place des scénarios qui vont y répondre.
                </p>
            } titreService="STRATEGIE D'INVESTISSEMENT" />
        </div>
    );
};

const Gsp = (props) => {
    const { history } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={manage} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/projets')}>Découvrir les opportunités</Button>} rightMessage={
                <div>
                    <p>
                        Notre mission consiste à permettre aux porteurs de projets, organisations de la société civile, institutions publiques et privées (mairies, bailleurs de fonds tant bilatéraux que multilatéraux, projets internationaux basés en Afrique, aux organisations non gouvernementales) de pouvoir recourir à tout moment à notre expertise. <br />
                    </p>
                    <p className="bold">Pour ce faire, nous réalisons un accompagnement dans le cadre non exhaustif de : </p>

                    <div className="points2">
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">la conception, et la mise en œuvre, le suivi-évaluation et l’analyse financière des projets ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">le développement économique ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">le renforcement des capacités ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">l’élaboration du plan d’action et de développement ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">la négociation des partenariats ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">le conseil en stratégie et organisation ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">la coordination de projet ;
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">l’assistance à la maitrise d’ouvrage.
                        </span></span>
                    </div>
                </div>
            } titreService="GESTION ET SUIVI DE PROJET" />
        </div >
    );
};

const About = ({ match, location, history }) => {

    const [inactive, setInactive] = useState(false);

    return (
        <Container header footer headerActive active="about-us">
            <div className="about">
                <div className="about-content container-md">
                    <div className="about-head">
                        <div className="row">
                            <div className="col-md-6 mb-4 px-4">
                                <div className="about-text">
                                    <h1 className="fw-bolder">QUI SOMMES NOUS ?</h1>
                                    <h4>La plateforme panafricaine adéquate pour vos investissements et la prise en main de vos projets </h4>
                                    <p>
                                        L’Afrique en général et le Cameroun en particulier sont devenus au fil du temps, et plus encore au cours des trois dernières décennies, des espaces propices aux investissements de toute nature.
                                        Le cabinet <span className="fw-bolder">INVEST & PARTNERS (I&P)</span>  se positionne désormais au Cameroun comme le conseiller par excellence dans cette démarche de capter les opportunités à capitaliser.
                                        Grâce au dynamisme et à l’expertise de nos spécialistes, notre connaissance parfaite de l’environnement économique, et notre réseau de partenaires, notamment en Cote d’Ivoire et au Rwanda, nous ne ménageons aucun effort dans  l’optique de répondre à vos différents besoins  en termes d’investissement, d’accompagnement, de diagnostic, de suivi, de gestion et d’implémentation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img rounded shadow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="services mb-5">
                        <div className="border rounded shadow">
                            <Router>
                                <ServicesNavigation rootUrl={match.url} onCollapse={(inactive) => { setInactive(inactive) }} />
                                <div className={`containerInf ${inactive ? "inactive" : ""}`}>
                                    <Switch>
                                        <Route exact path={`${match.path}/service-1`}>
                                            <Cei history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-2`}>
                                            <Aii history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-3`}>
                                            <Rf history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-4`}>
                                            <Ip history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-5`}>
                                            <Mr history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-6`}>
                                            <Se history={history} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-7`}>
                                            <Gsp history={history} />
                                        </Route>
                                        <Redirect from={match.path} to={`${match.path}/service-1`} />
                                    </Switch>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;