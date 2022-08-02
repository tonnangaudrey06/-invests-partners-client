import '../../styles/header.scss';

import React, { useEffect, useState, forwardRef, Fragment } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { logout } from '../../core/reducers/auth/actions';
import { setLanguage } from '../../core/reducers/app/actions';
import { AuthService } from '../../core/services';

import { Dropdown } from 'react-bootstrap';

import logo from '../../assets/img/logoWhite.png';
import flag_uk from '../../assets/img/Flag_uk.png';
import flag_fr from '../../assets/img/Flag_fr.png';

import {
  Bars,
  MobileIcone,
  FTime
} from './NavbarElements';

import { withNamespaces } from 'react-i18next';

import i18n from '../../core/utils/i18n';

import { connect } from "react-redux";


const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(logout()),
    languageChange: (lang) => dispatch(setLanguage(lang)),
  }
};

const CustomDropdown = forwardRef(({ children, onClick }, ref) => (
  <span
    className="d-flex align-items-center"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="ms-1" style={{ fontSize: 10 }}>
      &#x25bc;
    </span>
  </span>
));

const CustomDropdownMenu = forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled m-0">
          {children}
        </ul>
      </div>
    );
  },
);

const Header = ({ removeUser, languageChange, auth, headerActive, t }) => {

  const changeLanguage = (lng) => {
    setLanguage(lng);
  }

  const history = useHistory();

  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [language, setLanguage] = useState('fr');

  const changeBackgroundColor = () => {
    if (headerActive || click) {
      setColor(true)
    } else if (window.scrollY >= 66) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const logoutUser = async () => {
    try {
      await AuthService.logout();
      history.push(`/`);
      removeUser();
    } catch (error) {
      console.error(error);
    }
  }

  const location = useLocation();

  useEffect(() => {
    changeBackgroundColor()
    window.addEventListener("scroll", changeBackgroundColor)
  })

  useEffect(() => {
    setLanguage(i18n.language)
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language);
    languageChange(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  return (
    <div className={`header ${color ? "header-active shadow" : ""}`}>
      <div className="nav-left">
        <div className="brand">
          <img src={logo} className="logo" alt="invests & partners"></img>
        </div>

        <MobileIcone onClick={handleClick}>
          {click ? <FTime /> : <Bars />}
        </MobileIcone>

        <div onClick={handleClick} className="nav-left-link" style={{ left: click ? 0 : '-100%' }}>
          <div className={location.pathname === '/' ? "header-link active" : "header-link"}>
            <Link to="/accueil">{t('header.home')}</Link>
          </div>

          <div className={location.pathname.includes('/about-us') ? "header-link active" : "header-link"}>
            <Link to="/about-us">{t('header.about')}</Link>
          </div>

          {auth.user?.role === 4 && (
            <div className={location.pathname.includes('/projets') ? "header-link active" : "header-link"}>
              <Link to="/projets">{t('header.projet')}</Link>
            </div>
          )}

          <div className={location.pathname.includes('/events') ? "header-link active" : "header-link"}>
            <Link to="/events">{t('header.event')}</Link>
          </div>

          <div className={location.pathname.includes('/contact') ? "header-link active" : "header-link"}>
            <Link to="/contact">{t('header.contact')}</Link>
          </div>

          <div className="header-link d-flex align-items-center">
            <Dropdown onSelect={(value) => changeLanguage(value)}>
              <Dropdown.Toggle as={CustomDropdown}>
                {language.includes("fr") ?
                  <Fragment>
                    <img className="flag-language me-1" src={flag_fr} alt="fr flag" /> {t('langue.fr')}
                  </Fragment>
                  :
                  <Fragment>
                    <img className="flag-language me-1" src={flag_uk} alt="uk flag" /> {t('langue.en')}
                  </Fragment>
                }
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomDropdownMenu} className="bg-primary text-white p-0 overflow-hidden shadow-lg border-0 lang-select">
                <Dropdown.Item className="lang-select-item" eventKey="fr" active={language === 'fr'}>
                  <img className="flag-language me-1" src={flag_fr} alt="fr flag" />
                  {t('langue.fr')}
                </Dropdown.Item>
                <Dropdown.Item className="lang-select-item" eventKey="en" active={language === 'en'}>
                  <img className="flag-language me-1" src={flag_uk} alt="uk flag" />
                  {t('langue.en')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="nav-left-link-btns">
            {auth.isLoggedIn && (
              <Fragment>
                <button className="btn btn-outline-light rounded-pill" onClick={logoutUser}>{t('header.logout')}</button>
                {auth.user?.role === 3 && (
                  <Link className="btn btn-outline-light rounded-pill" to="/dashboard">{t('header.board')}</Link>
                )}
                {auth.user?.role === 4 && (
                  <Link className="btn btn-outline-light rounded-pill" to="/investor">{t('header.board')}</Link>
                )}
              </Fragment>
            )}
            {!auth.isLoggedIn && (
              <Fragment>
                <Link className="btn btn-outline-light rounded-pill" to="/auth?page=register">{t('header.signup')}</Link>
                <Link className="btn btn-outline-light rounded-pill" to="/auth?page=login">{t('header.signin')}</Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>

      <div className="nav-right">
        {auth.isLoggedIn && (
          <Fragment>
            <button className="btn btn-outline-light" onClick={logoutUser}>{t('header.logout')}</button>
            {auth.user?.role === 3 && (
              <Link className="btn btn-outline-light" to="/dashboard">{t('header.board')}</Link>
            )}
            {auth.user?.role === 4 && (
              <Link className="btn btn-outline-light" to="/investor">{t('header.board')}</Link>
            )}
          </Fragment>
        )}
        {!auth.isLoggedIn && (
          <Fragment>
            <Link className="btn btn-outline-light" to="/auth?page=register">{t('header.signup')}</Link>
            <Link className="btn btn-outline-light" to="/auth?page=login">{t('header.signin')}</Link>
          </Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(Header));