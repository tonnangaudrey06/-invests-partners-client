import '../../../styles/projet.scss'

import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { Container } from '../../../components';

import backgroundTop from '../../../assets/img/ban.png';

import { SecteurService } from '../../../core/services';

import countryImg from '../../../assets/img/country.jpg';

import { withTranslation } from "react-i18next";

const ProjetSecteur = (props) => {

    const { match, t } = props;
    const { params: { section } } = match;

    const [secteur, setSecteur] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const rs = await SecteurService.getOne(section);
                setSecteur(rs.data.data);
                setCountry(rs.data.data?.pays[0]);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchData();
    }, [section]);

    return (
        <Container header footer headerActive active="projets">
            <div className="projects-top" style={{ backgroundImage: `url(${secteur?.photo || backgroundTop})` }}>
                <div className="container m-auto" style={{ zIndex: 1 }}>
                    <h1 className="text-center text-white text-uppercase" style={{ marginBottom: '2rem', fontFamily: "building", fontSize: '4rem' }}>{secteur?.libelle}</h1>
                </div>
            </div>
            <div>
                <div className="section-grid-container row g-0">
                    <div className="col-md-6 p-3">
                        {(secteur?.pays || []).length <= 0 && (
                            <div className="col-12 py-5 d-flex justify-content-center align-items-center">
                                {loading && (<CircularProgress />)}
                                {!loading && (
                                    <h5 className="fw-bolder text-muted">
                                        {t('projet.not_found_pays')}
                                    </h5>
                                )}
                            </div>
                        )}
                        <div className="row gx-3 g-0">
                            {secteur?.pays.map((item, index) => (
                                <div className="col-md-6 col-lg-4" key={index}>
                                    <div className="project-item rounded shadow" onClick={() => setCountry(item)}>
                                        <div className={country?.libelle === item?.libelle ? "project-title active" : "project-title"}>
                                            {item.libelle}
                                        </div>
                                        <div className="project-content" style={{ backgroundImage: `url(${countryImg})` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex col-md">
                        <div className="vr"></div>

                        {!country ?
                            <div className="py-3 d-flex justify-content-center align-items-center w-100">
                                {loading && (<CircularProgress />)}
                                {!loading && (
                                    <h5 className="fw-bolder text-muted">
                                        {t('projet.not_found_ville')}
                                    </h5>
                                )}
                            </div>
                            :
                            <div className="p-3">
                                {country?.libelle &&
                                    <h2 className="text-uppercase fw-bold" style={{ fontSize: '3em', marginTop: 0, fontFamily: 'Building' }} >{country?.libelle}</h2>
                                }

                                {(country?.viles || []).length > 0 && <p className="fw-bolder fs-5">{t('projet.pays.title')}</p>}

                                <div className="mt-1 d-flex align-items-center flex-wrap gap-2">
                                    {country?.viles.map((item, index) => (
                                        <Link key={index} to={`${match.url}/${item?.libelle}`}>
                                            <span className="badge rounded-pill bg-primary p-2 fs-6 text-uppercase" style={{ minWidth: '9em' }}>
                                                {item?.libelle}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default withTranslation()(ProjetSecteur);