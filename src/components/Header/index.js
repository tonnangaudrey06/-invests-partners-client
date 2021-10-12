import '../../styles/header.scss';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { logout } from '../../core/reducers/auth/actions'
import { AuthService } from '../../core/services';

import logo from '../../assets/img/logoWhite.png';
import flag_uk from '../../assets/img/Flag_uk.png'
import flag_fr from '../../assets/img/Flag_fr.png'
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(logout())
  }
};

const Header = ({ removeUser, auth, headerActive }) => {

  const [color, setColor] = useState(false)
  const [language, setLanguage] = useState("fr")
  const css = {
    padding: 8,
    border: "solid",
    borderWidth: 0.1,
    borderColor: "white",
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 10,
    color: "white",
    backgroundColor: "transparent",
    cursor: 'pointer',
    width: 'max-content',
    textDecoration: "none"
  };

  const changeBackgroundColor = () => {
    if (headerActive) {
      setColor(true)
    } else if (window.scrollY >= 66) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const logoutUser = async () => {
    try {
      await AuthService.logout()
      removeUser()
    } catch (error) {
      console.error(error);
    }
  }

  const location = useLocation();

  useEffect(() => {
    changeBackgroundColor()
    window.addEventListener("scroll", changeBackgroundColor)
  })

  return (
    <nav className={color ? "header-active" : "header"}>
      <div className="nav-left">
        <div className="brand">
          <img src={logo} className="logo" alt="invests & partners"></img>
        </div>
        <div className="nav-left-link">
          <div className={location.pathname === '/' ? "header-link active" : "header-link"}>
            <Link to="/">Accueil</Link>
          </div>
          <div className={location.pathname.includes('/about-us') ? "header-link active" : "header-link"}>
            <Link to="/about-us">Qui sommes nous?</Link>
          </div>
          {auth.user?.role === 4 && (
            <div className={location.pathname.includes('/projets') ? "header-link active" : "header-link"}>
              <Link to="/projets">Projets</Link>
            </div>
          )}
          <div className={location.pathname.includes('/events') ? "header-link active" : "header-link"}>
            <Link to="/events">Événements</Link>
          </div>
          <div className={location.pathname.includes('/contact') ? "header-link active" : "header-link"}>
            <Link to="/contact">Contacts</Link>
          </div>
          <div className="header-link">
            {language === "fr" ? <img className="flag-language" src={flag_fr} alt="fr flag" /> : <img className="flag-language" src={flag_uk} alt="uk flag" />}
            <select onChange={(value) => setLanguage(value.target.value)} className="header-select">
              <option className="select-items" value="fr">Francais</option>
              <option className="select-items" value="en">Anglais</option>
            </select>
          </div>
        </div>
      </div>
      <div className="nav-right">
        {auth.isLoggedIn && (
          <span>
            <span style={css} onClick={logoutUser}>Déconnexion</span>
            {auth.user?.role === 3 && (
              <Link style={css} to="/dashboard">Tableau de board</Link>
            )}
            {auth.user?.role === 4 && (
              <Link style={css} to="/investor">Tableau de board</Link>
            )}
          </span>
        )}
        {!auth.isLoggedIn && (
          <>
            <div><Link style={css} to="/auth">Créer mon compte</Link></div>
            <div><Link style={css} to="/auth">Connexion</Link></div>
          </>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, mapDispatchToProps)(Header);