import '../../styles/header.scss';

import { useEffect, useState, forwardRef, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import { logout } from '../../core/reducers/auth/actions'
import { setLanguage } from '../../core/reducers/app/actions'
import { AuthService } from '../../core/services';

import { Dropdown } from 'react-bootstrap';

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
  FTime,
  NavBtn2
} from './NavbarElements';

import { withNamespaces } from 'react-i18next';

import i18n from '../../core/utils/i18n'


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

  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [language, setLanguage] = useState('fr');

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

  useEffect(() => {
    setLanguage(i18n.language)
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language);
    languageChange(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  return (
    <Nav className={color ? "header-active" : "header"}>
      <div className="nav-left">
        <div className="brand">
          <img src={logo} className="logo" alt="invests & partners"></img>
        </div>
        <MobileIcone onClick={handleClick}>
          {click ? <FTime /> : <Bars />}
        </MobileIcone>

        <NavMenu onClick={handleClick} click={handleClick} className="nav-left-link" style={{ left: click ? 0 : '-100%' }}>

          <div className={location.pathname === '/' ? "header-link active" : "header-link"}>
            <NavLink to="/accueil">{t('header.home')}</NavLink>
          </div>
          <div className={location.pathname.includes('/about-us') ? "header-link active" : "header-link"}>
            <NavLink to="/about-us">{t('header.about')}</NavLink>
          </div>
          {auth.user?.role === 4 && (
            <div className={location.pathname.includes('/projets') ? "header-link active" : "header-link"}>
              <NavLink to="/projets">{t('header.projet')}</NavLink>
            </div>
          )}
          <div className={location.pathname.includes('/events') ? "header-link active" : "header-link"}>
            <NavLink to="/events">{t('header.event')}</NavLink>
          </div>
          <div className={location.pathname.includes('/contact') ? "header-link active" : "header-link"}>
            <NavLink to="/contact">{t('header.contact')}</NavLink>
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

              <Dropdown.Menu as={CustomDropdownMenu} className="bg-primary text-white p-0 overflow-hidden">
                <Dropdown.Item eventKey="fr" active={language === 'fr'}>
                  <img className="flag-language me-1" src={flag_fr} alt="fr flag" />
                  {t('langue.fr')}
                </Dropdown.Item>
                <Dropdown.Item eventKey="en" active={language === 'en'}>
                  <img className="flag-language me-1" src={flag_uk} alt="uk flag" />
                  {t('langue.en')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="navMenuCache">
            {auth.isLoggedIn && (
              <NavBtn2>
                <span>
                  <span style={css} onClick={logoutUser}>{t('header.logout')}</span>
                  {auth.user?.role === 3 && (
                    <NavLink style={css} to="/dashboard">{t('header.board')}</NavLink>
                  )}
                  {auth.user?.role === 4 && (
                    <NavLink style={css} to="/investor">{t('header.board')}</NavLink>
                  )}
                </span>
              </NavBtn2>
            )}
            {!auth.isLoggedIn && (

              <NavBtn2>
                <span>
                  <span><NavLink style={css} to="/auth?page=register">{t('header.signup')}</NavLink></span>
                  <span><NavLink style={css} to="/auth?page=login">{t('header.signin')}</NavLink></span>
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
              <span style={css} onClick={logoutUser}>{t('header.logout')}</span>
              {auth.user?.role === 3 && (
                <NavLink style={css} to="/dashboard">{t('header.board')}</NavLink>
              )}
              {auth.user?.role === 4 && (
                <NavLink style={css} to="/investor">{t('header.board')}</NavLink>
              )}
            </span>
          </NavBtn>
        )}
        {!auth.isLoggedIn && (

          <NavBtn>
            <span>
              <span><NavLink style={css} to="/auth?page=register">{t('header.signup')}</NavLink></span>
              <span><NavLink style={css} to="/auth?page=login">{t('header.signin')}</NavLink></span>
            </span>
          </NavBtn>

        )}
      </div>
    </Nav>


  );
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(Header));