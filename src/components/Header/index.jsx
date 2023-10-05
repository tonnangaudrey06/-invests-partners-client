import React, { useEffect, useState, forwardRef, Fragment } from "react";
import { Link, useHistory, useLocation, NavLink } from "react-router-dom";

import { logout } from "../../core/reducers/auth/actions";
import { AuthService } from "../../core/services";

import { Dropdown } from "react-bootstrap";

import logo from "../../assets/img/logoWhite.png";

import languages from "./data/languages.json";

import { Bars, MobileIcone, FTime } from "./NavbarElements";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";
import { Button } from "@mui/material";

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(logout()),
  };
};

const mapStateToProps = (state) => ({ auth: state.auth });

const Header = ({ removeUser, auth, headerActive }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  const history = useHistory();

  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const changeBackgroundColor = () => {
    if (headerActive || click) {
      setColor(true);
    } else if (window.scrollY >= 66) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const logoutUser = async () => {
    try {
      await AuthService.logout();
      history.push(`/`);
      removeUser();
    } catch (error) {
      console.error(error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className={`header ${color ? "header-active shadow" : ""}`}>
      <div className="nav-left">
        <div className="brand">
          <img src={logo} className="logo" alt="invests & partners"></img>
        </div>

        <MobileIcone onClick={handleClick}>
          {click ? <FTime /> : <Bars />}
        </MobileIcone>

        <div className="nav-left-link" style={{ left: click ? 0 : "-100%" }}>
          <NavLink to="/accueil" className="header-link" activeClassName="active">
            {t("header.home")}
          </NavLink>

          <NavLink to="/about-us" className="header-link" activeClassName="active">
            {t("header.about")}
          </NavLink>

          <NavLink to="/projets" className="header-link" activeClassName="active">
            {t("header.projet")}
          </NavLink>

          <NavLink to="/events" className="header-link" activeClassName="active">
            {t("header.event")}
          </NavLink>

          <NavLink to="/contact" className="header-link" activeClassName="active">
            {t("header.contact")}
          </NavLink>

          <div className="d-flex align-items-center">
            <div className="language-wrapper">
              <div
                role="button"
                className={i18n.language === "fr" ? "selcted-language" : ""}
                onClick={changeLanguage}
              >
                <span className="language-flag">
                  <img src={languages.fr.icon} alt={languages.fr.name} />
                </span>
              </div>

              <div
                role="button"
                className={i18n.language === "en" ? "selcted-language" : ""}
                onClick={changeLanguage}
              >
                <span className="language-flag">
                  <img src={languages.en.icon} alt={languages.en.name} />
                </span>
              </div>
            </div>
          </div>

          <div className="nav-left-link-btns">
            {auth.isLoggedIn && (
              <Fragment>
                <button
                  className="btn btn-outline-light rounded-pill"
                  onClick={logoutUser}
                >
                  {t("header.logout")}
                </button>
                {auth.user?.role === 3 && (
                  <Link
                    className="btn btn-outline-light rounded-pill"
                    to="/dashboard"
                  >
                    {t("header.board")}
                  </Link>
                )}
                {auth.user?.role === 4 && (
                  <Link
                    className="btn btn-outline-light rounded-pill"
                    to="/investor"
                  >
                    {t("header.board")}
                  </Link>
                )}
              </Fragment>
            )}
            {!auth.isLoggedIn && (
              <Fragment>
                <Link
                  className="btn btn-outline-light rounded-pill"
                  to="/auth?page=register"
                >
                  {t("header.signup")}
                </Link>
                <Link
                  className="btn btn-outline-light rounded-pill"
                  to="/auth?page=login"
                >
                  {t("header.signin")}
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>

      <div className="nav-right">
        {auth.isLoggedIn && (
          <Fragment>
            <button className="btn btn-outline-light" onClick={logoutUser}>
              {t("header.logout")}
            </button>
            {auth.user?.role === 3 && (
              <Link className="btn btn-outline-light" to="/dashboard">
                {t("header.board")}
              </Link>
            )}
            {auth.user?.role === 4 && (
              <Link className="btn btn-outline-light" to="/investor">
                {t("header.board")}
              </Link>
            )}
          </Fragment>
        )}

        {!auth.isLoggedIn && (
          <Fragment>
            <Link className="btn btn-outline-light" to="/auth?page=register">
              {t("header.signup")}
            </Link>
            <Link className="btn btn-outline-light" to="/auth?page=login">
              {t("header.signin")}
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
