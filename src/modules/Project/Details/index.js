import React from "react";

import { Tabs, Tab, Row, Col } from 'react-bootstrap';

import Videoplay from './components/Videoplay';
import Description from "./components/Description";
import EnteteProjet from './components/EnteteProjet';
import Post from "./components/Post";

import { Container } from '../../../components'

import '../../../styles/detailProjet.scss'

const News = () => { return (<Post />); };
const Question = () => { return <h1>Questions</h1>; };

const ProjetDetails = () => {

    return (
        <Container header footer headerActive active="projets">
            <div className="container detailPage mt-5 py-5">
                <div className="master">
                    <container fluid>
                        <div className="corpsDetail">
                            <Row>
                                <Col>
                                    <div className="entete2 d-flex justify-content-center">
                                        <EnteteProjet />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="my-5">
                            <Row>
                                <Col lg={true} >
                                    <div className="embed-responsive embed-responsive-1by1 h-100">
                                        <Videoplay />
                                    </div>
                                </Col>
                                <Col lg={true} >
                                    <div className="card shadow-sm rounded">
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className="fw-bolder">Catégorie :</span> Agriculture</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Localité :</span> Douala, Littoral, Cameroun</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Montant minimum d'investissement :</span> 100 000 XAF</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Taux de rentabilité :</span> 20%</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Chiffre d'affaires :</span> 50 000 000 000 XAF</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Durée du projet :</span> 5 ans</li>
                                                <li className="list-group-item mt-1"><span className="fw-bolder">Retour sur investissement :</span> 10 ans</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-center py-3">
                                            <div>
                                                <a href="/investor/messages/new" className="btn btn-primary btn-sm rounded" type="button">Je suis interessé</a>
                                            </div>
                                            <div className="d-flex align-items-center fw-bolder">
                                                <span className="me-2"><i className="bi bi-heart"></i></span>
                                                <span>Ajouter au favoris</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="infoProj"><InformationsProjet /></div> */}
                                </Col>
                            </Row>
                        </div>
                        <div className="navigation mt-2">
                            <Row>
                                <Col lg={true} >
                                    <Tabs defaultActiveKey="description" className="projet-details-tab">
                                        <Tab eventKey="description" title="Histoire" className="projet-details-tab-header">
                                            <Description />
                                        </Tab>
                                        <Tab eventKey="actualite" title="Actualités">
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                                <div className="mb-2"></div>
                                                <News />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="question" title="Questions">
                                            <Question />
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>
                    </container>
                </div>
            </div>
        </Container>
    );
};

export default ProjetDetails;