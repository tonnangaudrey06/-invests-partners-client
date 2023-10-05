// import { HomeData } from '../../../data';
import '../../../styles/projet.scss'

import React from 'react';
import Popup from 'reactjs-popup';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';

import { SecteurService } from '../../../core/services';
import projetimg from "../../../assets/img/projet.jpg";

import { Container } from '../../../components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { withTranslation } from "react-i18next";

import { moneyFormat } from '../../../core/utils/helpers';
import backgroundTop from '../../../assets/img/ban.png';
import { Button } from '@mui/material';
import LikeButton from './../../../components/LikeButton/index';

const ProjetTown = ({ match, history, user, t }) => {
    const { params: { section, town } } = match;

    const [likeCount, setLikeCount] = React.useState(0);
    const [projets, setProjets] = React.useState([]);
    const [secteur, setSecteur] = React.useState(null);
    const [allProjets, setAllProjets] = React.useState([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const searchFilterProjet = (value) => {
        const result = allProjets.filter((projet) =>
            (projet.intitule || "").toLowerCase().includes(value.toLowerCase())
        );
        setProjets(result);
    };

    const cardOnClick = (item) => {
        if (!checkCanFianance(item)) {
            setModalOpen(true);
            setSelectedCard(selectedCard);
        }
        return;
    }

    const checkCanFianance = (item) => {
        if (!user?.profil_invest) {
            return false;
        }

        if (!user?.profil_invest?.montant_max || +user?.profil_invest?.montant_max === 0) {
            return true;
        }

        if (+user?.profil_invest?.montant_max >= +item?.financement) {
            return true;
        }

        return false;
    }

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            Promise.all([SecteurService.getSecteurProjet(section, town), SecteurService.getOne(section)])
                .then(
                    ([projets, secteur]) => {
                        setSecteur(secteur.data.data);
                        setAllProjets(projets.data.data);
                        setProjets(projets.data.data);
                    }
                ).finally(() => setLoading(false))
        }
        fetchData();
    }, [section, town]);

    const goToProfile = () => {
        history.push('/investor/profil');
    }

    return (
        <Container header headerActive active="projets" className="bg-light" footer>
            <div className="projects-top shadow" style={{ backgroundImage: `url(${secteur?.photo || backgroundTop})` }}>
                <div className="search-bar-container-home">
                    <div className="container" style={{
                        minWidth: "35rem"
                    }}>
                        <h1 className="text-center text-white text-uppercase" style={{ marginBottom: '2rem', fontFamily: "building", fontSize: '4rem' }}>
                            {`${secteur?.libelle || 'Secteur'} - ${town}`}
                        </h1>
                        <div className="search-bar">
                            <input onKeyUp={(e) => searchFilterProjet(e.target.value)} placeholder="Nom du projet" className="projects-text-input" type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-md py-5">
                <div className="row g-4">
                    {(projets || []).length <= 0 && (
                        <div className="col-12 py-5 d-flex justify-content-center align-items-center">
                            {loading && (<CircularProgress />)}
                            {!loading && (
                                <h5 className="fw-bolder text-muted">
                                    {t('projet.not_found_projet')}
                                </h5>
                            )}
                        </div>
                    )}
                    {projets.map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <Card classes={{ root: 'projects-cards shadow' }} sx={{
                                borderRadius: '1rem',
                                position: 'relative'
                            }} onClick={() => cardOnClick(item)}>
                                <CardMedia
                                    component="img"
                                    classes={{ root: 'shadow' }}
                                    style={{ height: "15rem" }}
                                    image={item?.logo ? item.logo : projetimg}
                                    alt={item?.intitule}
                                />
                                <CardContent>
                                    <Link to={`${match.url}/${item.id}/details`} className="projects-cards-title-container">
                                        {item.intitule}
                                    </Link>
                                    <p className="projects-cards-content">{item.description}</p>
                                    <div className="projects-cards-invest text-muted mt-3 mb-1">{moneyFormat(item.iv_total)} {t('projet.details.invest')}</div>
                                    <div className="projects-cards-bottom text-muted">
                                        {moneyFormat(item.iv_count)} {t('projet.details.investor')}
                                        <div className="d-flex align-items-center gap-2">
                                            <LikeButton
                                                user={user}
                                                projet={item}
                                                likeCount={(value) => setLikeCount(value)}
                                            />
                                            {`${likeCount} likes`}
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="projects-cards-plus cursor-pointer" onClick={() => history.push(`${match.url}/${item.id}/details`)}>
                                    <Link to={`${match.url}/${item.id}/details`} className="projects-cards-plus-button text-decoration-none text-white">
                                        {t('projet.details.more')}
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

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
        </Container>
    );
}

const mapStateToProps = (state) => ({ user: state.auth.user });

export default withTranslation()(connect(mapStateToProps)(ProjetTown));