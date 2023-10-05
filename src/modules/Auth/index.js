import '../../styles/login.scss';

import { Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { Container } from '../../components';

import image1 from "../../assets/img/ban.png";

import logo from '../../assets/img/logoWhite.png'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import React from 'react';

import { withTranslation } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Auth = (props) => {

  const { t, location } = props;
  const [page, setPage] = React.useState('login');
  const [message, setMessge] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('page')) {
      setPage(params.get('page'));
    }
  }, [location])

  const handleSuccessAlertOpen = () => {
    setSuccess(true);
  };

  const handleSuccessAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };

  const switchPage = (page) => {
    setPage(page)
  }

  const sendMessage = (message) => {
    if (message) {
      setMessge(message);
      handleSuccessAlertOpen()
    }
  }

  return (
    <Container>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-img" style={{ backgroundImage: "url('" + image1 + "')" }} alt=""></div>
          <div className="auth-cover">
            <div className="h-100 justify-content-center d-flex flex-column align-items-center auth-present p-5 text-center">
              <div className="d-flex justify-content-xl-center align-items-center mb-1">
                <img src={logo} height="80" alt="IP INVESTMENT S.A." />
              </div>
              <h1> {t('auth.des.title')}</h1>
              <p> {t('auth.des.text')}</p>
              <Link to={'/'} className="btn btn-default btn-outline-light btn-rounded mt-1">{t('auth.des.btn')}</Link>
            </div>
          </div>
        </div>
        <div className="auth-form py-3 px-4">
          <div className="auth-head">
            <div className="auth-nav shadow">
              <div onClick={() => switchPage("register")} className={page === "register" ? "auth-nav-item active" : "auth-nav-item"} >{t('auth.inscription.title')}</div>
              <div onClick={() => switchPage("login")} className={page === "login" ? "auth-nav-item active" : "auth-nav-item"}>{t('auth.connexion.title')}</div>
            </div>
          </div>
          {page === "register" && (
            <Register switchPage={switchPage} sendMessage={sendMessage} translate={t} {...props} />
          )}
          {page === "login" && (
            <Login switchPage={switchPage} translate={t} {...props} />
          )}
          {page === "forgot" && (
            <ForgotPassword switchPage={switchPage} sendMessage={sendMessage} translate={t} {...props} />
          )}
        </div>
      </div>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
        <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
export default withTranslation()(Auth);