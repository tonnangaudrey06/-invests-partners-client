import '../../styles/footer.scss'
import { Link } from 'react-router-dom';
import terms from '../../assets/Terms-and-Conditions.pdf'
import conditions from '../../assets/CONFIDENTIALITY POLICY I&P.pdf'

import { withNamespaces } from "react-i18next";

const Footer = ({ t }) => {
  return (
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
                  <span>BP: 2308 Douala, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Invest & Partners</h2>
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
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control rounded-left" placeholder={t('footer._3.input.placeholder')} />
                <button type="submit" className="form-control submit rounded-right">{t('footer._3.input.btn')}</button>
              </div>
              <span className="subheading">{t('footer._3.help')}</span>
            </form>
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
  );
}

export default withNamespaces()(Footer);