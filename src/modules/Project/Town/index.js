// import { HomeData } from '../../../data';
import '../../../styles/projet.scss'

import React from 'react';
import Popup from 'reactjs-popup';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Divider from '@mui/material/Divider';
// import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import { SecteurService } from '../../../core/services';
import projetimg from "../../../assets/img/projet.jpg";

// import { AiOutlineHeart } from 'react-icons/ai';
// import { MdPlace } from 'react-icons/md';
// import { GiHistogram } from 'react-icons/gi';

import { Container } from '../../../components';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { withNamespaces } from "react-i18next";

import { moneyFormat } from '../../../core/utils/helpers';
import backgroundTop from '../../../assets/img/ban.png';
import { Button } from '@mui/material';

const ProjetTown = ({ match, location, history, user, t }) => {

    const { params: { section, town } } = match;

    // const [ville, setVille] = React.useState('');
    // const [pays, setPays] = React.useState('');
    // const [level, setLevel] = React.useState('');
    const [projets, setProjets] = React.useState([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    // const handleChange = (event) => {
    //     if (event.target.name === "ville") {
    //         setVille(event.target.value);
    //     } else if (event.target.name === "pays") {
    //         setPays(event.target.value);
    //     } else if (event.target.name === "level") {
    //         setLevel(event.target.value);
    //     }
    // };

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
            try {
                const rs = await SecteurService.getSecteurProjet(section, town);
                setProjets(rs.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchData();
    }, [section, town]);

    const goToProfile = () => {
        history.push('/investor/profil');
    }

    return (
        <Container header headerActive active="projets" className="bg-light" footer>
            {/* <div className="projects-top-all-projet bg-white">
                <div className="search-bar-container-all-projet" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
                    <div className="container">
                        <div className="row gy-3">
                            <div className="col-12 d-flex justify-content-center align-items-center" style={{ marginBottom: '2rem' }}>
                                <div className="search-bar">
                                    <select className="projects-input-button" type="button" value="OK">
                                        <option>{t('projet.option.title')}</option>
                                    </select>
                                    <input placeholder="Rechercher" className="projects-text-input" type="text" name="search" id="" />
                                </div>
                            </div>
                            <div className="col-12 row">
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="pays"
                                            variant="filled"
                                            label={t('projet.form._1.title')}
                                            value={pays}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdPlace />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }}
                                        >
                                            <MenuItem value=""></MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="ville"
                                            variant="filled"
                                            label={t('projet.form._2.title')}
                                            value={ville}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdPlace />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }} >
                                            <MenuItem value=""></MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="level"
                                            variant="filled"
                                            label={t('projet.form._3.title')}
                                            value={level}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <GiHistogram />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }} >
                                            <MenuItem value="">{t('projet.form._3.value._1')}</MenuItem>
                                            <MenuItem value={'IDEE'}>{t('projet.form._3.value._2')}</MenuItem>
                                            <MenuItem value={'PROTOTYPE'}>{t('projet.form._3.value._3')}</MenuItem>
                                            <MenuItem value={'SUR_MARCHE'}>{t('projet.form._3.value._4')}</MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <Divider /> */}

            <div className="projects-top shadow" style={{ backgroundImage: `url(${backgroundTop})` }}>
                <div className="search-bar-container-home">
                    <div className="container" style={{
                        minWidth: "35rem"
                    }}>
                        <h1 className="text-center text-white text-uppercase" style={{ marginBottom: '2rem', fontFamily: "building", fontSize: '4rem' }}>
                            {town}
                        </h1>
                        <div className="search-bar">
                            <select className="projects-input-button" type="button" value="OK">
                                <option>{t('projet.option.title')}</option>
                            </select>
                            <input placeholder="Rechercher" className="projects-text-input" type="text" />
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
                        <div key={index} className="col-md-6 col-lg-4">
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
                                    <div className="projects-cards-title-container mb-1">
                                        {checkCanFianance(item) ? (
                                            <Link to={`${match.url}/${item.id}/details`} className="text-decoration-none">
                                                <h5 className="fw-bold">{item.intitule}</h5>
                                            </Link>
                                        ) : (
                                            <h5 className="fw-bold text-muted">{item.intitule}</h5>
                                        )}
                                    </div>
                                    <p className={checkCanFianance(item) ? "projects-cards-content mb-1" : "projects-cards-content mb-1 text-muted"}>{item.description}</p>
                                    <p className={checkCanFianance(item) ? "mb-1 fw-bold" : "mb-1 text-muted fw-bold"}>{moneyFormat(item.iv_total)} {t('projet.details.invest')}</p>
                                    <div className={checkCanFianance(item) ? "projects-cards-bottom" : "projects-cards-bottom text-muted"}>
                                        <div>{moneyFormat(item.iv_count)} {t('projet.details.investor')}</div>
                                        {/* <div className="d-flex align-items-center"><AiFillLike className="me-1" />4</div> */}
                                    </div>
                                </CardContent>
                                {checkCanFianance(item) && (
                                    <div className="projects-cards-plus cursor-pointer" onClick={() => history.push(`${match.url}/${item.id}/details`)}>
                                        <Link to={`${match.url}/${item.id}/details`} className="projects-cards-plus-button text-decoration-none text-white">
                                            {t('projet.details.more')}
                                        </Link>
                                    </div>
                                )}
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

export default withNamespaces()(connect(mapStateToProps)(ProjetTown));