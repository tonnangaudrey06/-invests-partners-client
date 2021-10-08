import '../../styles/footer.scss'

const Footer = () => {
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
                <h2 className="footer-heading">Invests & Partners</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="d-block">Qui sommes-nous?</a></li>
                  <li><a href="#" className="d-block">Nos services</a></li>
                  <li><a href="#" className="d-block">Nos experts</a></li>
                  <li><a href="#" className="d-block">Nos projets</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Navigations</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="d-block">Projets</a></li>
                  <li><a href="#" className="d-block">Événements</a></li>
                  <li><a href="#" className="d-block">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Ressources</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="d-block">Événements</a></li>
                  <li><a href="#" className="d-block">Newsletter</a></li>
                  <li><a href="#" className="d-block">Politique de confidentialité</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-md-0 mb-4">
            <h2 className="footer-heading">Souscrire</h2>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control rounded-left" placeholder="Entrez l'adresse e-mail" />
                <button type ="submit" class ="form-control submit rounded-right">Souscrire</button>
              </div>
              <span className="subheading">Recevez les mises à jour sur les investissements et les partenaires dans votre boîte aux lettres électronique.</span>
            </form>
          </div>
        </div>
        <div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
            <p className="copyright mb-0">
              Copyright &copy;2021 Tous droits réservés à Invests & Partners 
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><a href="#" title="Twitter"><span className="bi bi-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#" title="Facebook"><span className="bi bi-facebook"></span></a></li>
              <li className="ftco-animate"><a href="#" title="Instagram"><span className="bi bi-instagram"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;