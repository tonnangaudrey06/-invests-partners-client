import '../../styles/projet.scss'

import React from 'react';
import { useHistory } from "react-router-dom";

import { Container, SectionTitle } from '../../components';
import CircularProgress from '@mui/material/CircularProgress';
import secteurImg from '../../assets/img/secteur.jpg';

import backgroundTop from '../../assets/img/ban.png';

import * as Redux from 'react-redux';

import { SecteurService } from '../../core/services';

import { setSecteur } from '../../core/reducers/app/actions'

const Projet = (props) => {

  const history = useHistory();

  const [secteurs, setSecteurs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const rs = await SecteurService.getAll();
        setSecteurs(rs.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Container header footer headerActive active="projects">
      <div className="projects-top" style={{ backgroundImage: `url(${backgroundTop})` }}>
        <div className="search-bar-container-home">
          <div className="container">
            <h1 style={{ color: 'white', fontFamily: "building", fontSize: 60 }}>LA MEILLEURE AFFAIRE S'OFFRE A VOUS</h1>
            <div className="search-bar">
              <select className="projects-input-button" type="button" value="OK">
                <option>Catégories</option>
              </select>
              <input placeholder="Rechercher" className="projects-text-input" type="text" />
            </div>
          </div>
        </div>
      </div>
      <section className="container mb-5">
        <SectionTitle title="NOS SECTEURS D'ACTIVITÉES" />
        <div className="secteur-listing row g-3 d-flex justify-content-center mt-3">
          {(secteurs || []).length <= 0 && (
            <div className="col-12 py-5 d-flex justify-content-center align-items-center">
              {loading && (<CircularProgress />)}
              {!loading && (
                <h5 className="fw-bolder text-muted">
                  Aucun secteur trouvé
                </h5>
              )}
            </div>
          )}
          {(secteurs || []).map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="secteur-item shadow-lg" onClick={() => { history.push(`/projets/${item.id}`) }}>
                <div className="secteur-content" data-content={item.libelle} style={{ backgroundImage: item.photo ? `url(${item.photo})` : `url(${secteurImg})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container >
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSecteur: (payload) => dispatch(setSecteur(payload))
  }
};

const mapStateToProps = (state) => ({ app: state.app })

export default Redux.connect(mapStateToProps, mapDispatchToProps)(Projet);