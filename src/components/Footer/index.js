import { Link } from 'react-router-dom';
import terms from '../../assets/Terms-and-Conditions.pdf';
import conditions from '../../assets/CONFIDENTIALITY POLICY I&P.pdf';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { UserService } from '../../core/services';

import { withTranslation } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Footer = ({ t }) => {

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');

  const emailValidation = () => {
    // eslint-disable-next-line no-useless-escape
    const validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(validRegex) ? true : false;
  }

  const handleSubscribe = () => {

    if (!emailValidation(email)) {
      setMessage('l\'email est obligatoire');
      setError(true);
      setSuccess(false);
      return;
    }

    UserService.subscribeNewsletter(email).then(
      (data) => {
        setMessage('Merci de vous inscrire à notre newsletter');
        setError(false);
        setSuccess(true);
        setEmail('');
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setError(true);
        setSuccess(false);
      }
    )
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
    setSuccess(false);
  };

  return (
    <>
      <footer className="footer-10">
        <div className="container">
          <div className="row mb-5 pb-3 no-gutters">
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-1 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="bi bi-phone"></span>
                  </div>
                  <div className="text">
                    <span>(+237) 6 55 45 90 79</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-2 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="bi bi-mailbox"></span>
                  </div>
                  <div className="text">
                    <span>info@invest--partners.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 d-flex">
              <div className="con con-1 w-100 py-5">
                <div className="con-info w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="bi bi-pin"></span>
                  </div>
                  <div className="text">
                    <span>{t('contact_us.text')} 2308 Douala, {t('contact_us.pays')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">IP INVESTMENT S.A.</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/about-us" className="d-block">{t('header.about')}</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">{t('footer._1')}</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/projets" className="d-block">{t('header.projet')}</Link></li>
                    <li><Link to="/contact" className="d-block">{t('header.contact')}</Link></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">{t('footer._2.title')}</h2>
                  <ul className="list-unstyled">
                    <li><Link to="/events" className="d-block">{t('header.event')}</Link></li>
                    <li><a href={terms} target="_blank" rel="noreferrer" className="d-block">{t('footer._2.nav._1')}</a></li>
                    <li><a href={conditions} target="_blank" rel="noreferrer" className="d-block">{t('footer._2.nav._2')}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-md-0 mb-4">
              <h2 className="footer-heading">{t('footer._3.title')}</h2>
              <div className="subscribe-form">
                <div className="form-group d-flex">
                  <input type="text" className="form-control rounded-left" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('footer._3.input.placeholder')} />
                  <button type="submit" className="form-control submit rounded-right" onClick={handleSubscribe}>{t('footer._3.input.btn')}</button>
                </div>
                <span className="subheading">{t('footer._3.help')}</span>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-4 border-top">
            <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
              <p className="copyright mb-0">
                {t('footer.copyright')}
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-right">
              <ul className="ftco-footer-social p-0">
                {/* <li className="ftco-animate"><a href="#" title="Twitter"><span className="bi bi-twitter"></span></a></li> */}
                {/* <li className="ftco-animate"><a href="#" title="Facebook"><span className="bi bi-facebook"></span></a></li> */}
                <li className="ftco-animate"><Link to="#" title="LinkedIn"><span className="bi bi-linkedin"></span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={error} autoHideDuration={10000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
          {message}
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={success} autoHideDuration={10000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default withTranslation()(Footer);