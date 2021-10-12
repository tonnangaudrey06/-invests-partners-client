import '../../styles/header.scss';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { logout } from '../../core/reducers/auth/actions'
import { AuthService } from '../../core/services';

import logo from '../../assets/img/logoWhite.png';
import flag_uk from '../../assets/img/Flag_uk.png'
import flag_fr from '../../assets/img/Flag_fr.png'
import { connect } from "react-redux";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  MobileIcone,
  Logocontainer,
  FTime,
  NavBtn2
} from './NavbarElements';


const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(logout())
  }
};

const Header = ({ removeUser, auth, headerActive }) => {

  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick= ()=> setClick(!click);
  const [language, setLanguage] = useState("fr");
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
    if (headerActive || click) {
      setColor(true)
    } else if (window.scrollY >= 66) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const logoutUser = () => {
    AuthService.logout();
    removeUser();
    // window.location.reload();
  }

  const location = useLocation();

  useEffect(() => {
    changeBackgroundColor()
    window.addEventListener("scroll", changeBackgroundColor)
  })

  return (
    
    
     <Nav className={color ? "header-active" : "header"}>
     
     <div className="nav-left">
        <div className="brand">
          <img src={logo} className="logo" alt="invests & partners"></img>
        </div>
        <MobileIcone onClick={handleClick}>
          {click? <FTime />: <Bars />}
        </MobileIcone>
        
        
        <NavMenu onClick={handleClick} click={handleClick} className="nav-left-link" style={{left: click?0:'-100%'}}>
        
            <div className={location.pathname === '/' ? "header-link active" : "header-link"}>
            <NavLink to="/accueil" >Accueil</NavLink>
            </div>
            <div className={location.pathname.includes('/about-us') ? "header-link active" : "header-link"}>
              <NavLink to="/about-us">Qui sommes nous?</NavLink>
            </div>
            {auth.user?.role === 4 && (
              <div className={location.pathname.includes('/projets') ? "header-link active" : "header-link"}>
                <NavLink to="/projets">Projets</NavLink>
              </div>
            )}
            <div className={location.pathname.includes('/events') ? "header-link active" : "header-link"}>
              <NavLink to="/events">Événements</NavLink>
            </div>
            <div className={location.pathname.includes('/contact') ? "header-link active" : "header-link"}>
              <NavLink to="/contact">Contacts</NavLink>
            </div>
            <div className="header-link">
              {language === "fr" ? <img className="flag-language" src={flag_fr} alt="fr flag" /> : <img className="flag-language" src={flag_uk} alt="uk flag" />}
              <select onChange={(value) => setLanguage(value.target.value)} className="header-select">
                <option className="select-items" value="fr">Francais</option>
                <option className="select-items" value="en">Anglais</option>
              </select>
            </div>
            <div className="navMenuCache">
                {auth.isLoggedIn && (
                  <NavBtn2>
                  <span>
                    <span style={css} onClick={logoutUser}>Déconnexion</span>
                    {auth.user?.role === 3 && (
                      <NavLink style={css} to="/dashboard">Tableau de board</NavLink>
                    )}
                    {auth.user?.role === 4 && (
                      <NavLink style={css} to="/investor">Tableau de board</NavLink>
                    )}
                  </span>
                  </NavBtn2>
                )}
                {!auth.isLoggedIn && (
                  
                  <NavBtn2>
                    <span>
                    <span><NavLink style={css} to="/auth">Créer mon compte</NavLink></span>
                    <span><NavLink style={css} to="/auth">Connexion</NavLink></span>
                    </span>
                  </NavBtn2>
                )}
          </div>
        </NavMenu>
        </div>
      
      <div className="nav-right">
        {auth.isLoggedIn && (
          <NavBtn>
          <span>
            <span style={css} onClick={logoutUser}>Déconnexion</span>
            {auth.user?.role === 3 && (
              <NavLink style={css} to="/dashboard">Tableau de board</NavLink>
            )}
            {auth.user?.role === 4 && (
              <NavLink style={css} to="/investor">Tableau de board</NavLink>
            )}
          </span>
          </NavBtn>
        )}
        {!auth.isLoggedIn && (
          
          <NavBtn>
            <span>
            <span><NavLink style={css} to="/auth">Créer mon compte</NavLink></span>
            <span><NavLink style={css} to="/auth">Connexion</NavLink></span>
            </span>
          </NavBtn>
          
        )}
      </div>
    
    </Nav>
    
    
  );
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, mapDispatchToProps)(Header);