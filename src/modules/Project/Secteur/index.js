import '../../../styles/projet.scss'

import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../../components';

import backgroundTop from '../../../assets/img/ban.png';

import { SecteurService } from '../../../core/services';

import countryImg from '../../../assets/img/country.jpg';

const ProjetSecteur = (props) => {

    const { match } = props;
    const { params: { section } } = match;

    const [secteur, setSecteur] = React.useState(null);
    const [country, setCountry] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const rs = await SecteurService.getOne(section);
            setSecteur(rs.data.data);
            setCountry(rs.data.data?.pays[0]);
        }
        fetchData();
    }, [section, props]);

    return (
        <Container header footer headerActive active="projets">
            <div className="projects-top" style={{ backgroundImage: `url(${backgroundTop})` }}>
                <div className="container">
                    <h1 className="text-uppercase" style={{ color: 'white', fontFamily: "building", fontSize: 60 }}>{secteur?.libelle}</h1>
                </div>
            </div>
            <div>
                <div className="section-grid-container row">
                    <div className="col-sm-12 col-md-6">
                        <div className="row mt-3">
                            {secteur?.pays.map((item, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="project-item rounded shadow" key={index} onClick={() => setCountry(item)}>
                                        <div className={country?.libelle === item?.libelle ? "project-title active" : "project-title"}>
                                            {item.libelle}
                                        </div>
                                        <div className="project-content" style={{ backgroundImage: `url(${countryImg})` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex col-sm-12 col-md-6">
                        <div className="vr"></div>
                        <div className="p-3 pt-0">
                            <h2 className="text-uppercase fw-bold" style={{ fontSize: '3em', marginTop: 0, fontFamily: 'Building' }} >{country?.libelle}</h2>
                            <p className="lh-base">{country?.libelle}</p>
                            <h4 className="fw-bolder mt-2">Vous pouvez investir dans ces villes</h4>
                            <div className="mt-1 d-flex justify-content-start align-items-center flex-wrap">
                                {country?.viles.map((item, index) => (
                                    <Link key={index} to={`${match.url}/${item?.libelle}`} className="mb-2 mr-2">
                                        <span className="badge rounded-pill bg-primary p-2 fs-6 text-uppercase" style={{ minWidth: '9em' }}>
                                            {item?.libelle}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ProjetSecteur;