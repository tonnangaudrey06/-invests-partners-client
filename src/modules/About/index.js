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
import manage from "../../assets/img/ip-12.jpg";

import { withNamespaces } from "react-i18next";

import "../../styles/about.scss";

const Cei = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={ceiImg} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>{t('button.conseiller')}</Button>} rightMessage={
                <div>
                    <h4 className="lh-base">
                        {t('service._7.des.title')}
                    </h4>
                    <div className="points mt-4">
                        <span className="check">
                            <span className="icone me-1">
                                <i className="bi bi-check-square-fill"></i>
                            </span>
                            <span className="text">
                                {t('service._7.des._1.title')}
                            </span>
                            <p>{t('service._7.des._1.text')}</p>
                        </span>
                        <span className="check mt-1">
                            <span className="icone me-1">
                                <i className="bi bi-check-square-fill"></i>
                            </span>
                            <span className="text">
                                {t('service._7.des._2.title')}
                            </span>
                            <p>{t('service._7.des._2.text')}</p>
                        </span>
                        <span className="check mt-1">
                            <span className="icone me-1">
                                <i className="bi bi-check-square-fill"></i>
                            </span>
                            <span className="text">
                                {t('service._7.des._3.title')}
                            </span>
                            <p>{t('service._7.des._3.text')}</p>
                        </span>
                    </div>
                </div>
            } titreService={t('service._7.title')} />
        </div>
    );
};

const Aii = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={Assii} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>{t('button.conseiller')}</Button>} rightMessage={
                <p>
                    {t('service._2.des._1')}
                    <br /> <br />
                    {t('service._2.des._2')}
                    <br /> <br />
                    {t('service._2.des._3')}
                    <br /> <br />
                    {t('service._2.des._4')}
                </p>
            } titreService={t('service._2.title')} />
        </div>
    );
};

const Rf = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={rechFinancement} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/dashboard')}>{t('button.look_finance')}</Button>} rightMessage={
                <p>
                    {t('service._1.des._1')}
                    <br /> <br />
                    {t('service._1.des._2')}
                    <br /> <br />
                    {t('service._1.des._3')}
                    <br /> <br />
                    {t('service._1.des._4')}
                </p>
            } titreService={t('service._1.title')} />
        </div>
    );
};

const Ip = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={rechFinancement} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/dashboard')}>{t('button.look_finance')}</Button>} rightMessage={
                <div>
                    <p>{t('service._4.des._1')}</p>
                    <br />
                    <p>{t('service._4.des._2')}</p>
                    <p className="bold">{t('service._4.des._3')}</p>
                    <div className="points2">
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._4.des.list._1')}</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._4.des.list._2')}</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._4.des.list._3')}</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._4.des.list._4')}</span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._4.des.list._5')}</span></span>
                    </div>
                </div>
            } titreService={t('service._4.title')} />
        </div>
    );
};

const Mr = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={relation} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/projets')}>{t('button.opportuniter')}</Button>} rightMessage={
                <p>
                    {t('service._5.des._1')}
                    <br /><br />

                    {t('service._5.des._2')}
                    <br /> <br />

                    {t('service._5.des._3')}
                    <br /> <br />

                    {t('service._5.des._4')}
                    <br /> <br />
                </p>
            } titreService={t('service._5.title')} />
        </div>
    );
};

const Se = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={strategy} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/contact')}>{t('button.conseiller')}</Button>} rightMessage={
                <p>
                    {t('service._3.des._1')}
                    <br /><br />

                    {t('service._3.des._2')}
                </p>
            } titreService={t('service._3.title')} />
        </div>
    );
};

const Gsp = (props) => {
    const { history, t } = props;
    return (
        <div className="service-details-content">
            <ServicesDetails imageLeft={manage} button={<Button fullWidth variant="contained" className="btn-rounded btn-default container-md" onClick={() => history.push('/projets')}>{t('button.opportuniter')}</Button>} rightMessage={
                <div>
                    <p>
                        {t('service._6.des._1')}
                    </p>
                    <br />
                    <p className="bold">{t('service._6.des._2')}</p>

                    <div className="points2">
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._1')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._2')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._3')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._4')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._5')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._6')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._7')}
                        </span></span>
                        <span className="check"> <span className="icone"><i className="bi bi-check-square-fill"></i></span> <span className="text">{t('service._6.des.list._8')}
                        </span></span>
                    </div>
                </div>
            } titreService={t('service._6.title')} />
        </div >
    );
};

const About = ({ match, location, history, t }) => {

    const [inactive, setInactive] = useState(false);

    return (
        <Container header footer headerActive active="about-us">
            <div className="about">
                <div className="about-content container-md">
                    <div className="about-head">
                        <div className="row">
                            <div className="col-md-6 mb-4 px-4">
                                <div className="about-text">
                                    <h1 className="fw-bolder">{t('header.about')}</h1>
                                    <h4>{t('about.header')}.</h4>
                                    <p>{t('about.text')}</p>
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
                                <ServicesNavigation t={t} rootUrl={match.url} onCollapse={(inactive) => { setInactive(inactive) }} />
                                <div className={`containerInf ${inactive ? "inactive" : ""}`}>
                                    <Switch>
                                        <Route exact path={`${match.path}/service-1`}>
                                            <Cei history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-2`}>
                                            <Aii history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-3`}>
                                            <Rf history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-4`}>
                                            <Ip history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-5`}>
                                            <Mr history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-6`}>
                                            <Se history={history} t={t} />
                                        </Route>
                                        <Route exact path={`${match.path}/service-7`}>
                                            <Gsp history={history} t={t} />
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

export default withNamespaces()(About);