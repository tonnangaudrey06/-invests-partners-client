import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoWhite.png';
import '../../styles/Header.css';
import ButtonRadius from '../ButtonRadius';

const Header = () => {
  return ( 
    <nav className="header">
      <div className="nav-menu">
        <div className="logo">
          <img src={logo} className="img-logo"></img>
        </div>
        <div className="head-menu">
          <Link className="header-link" to="/">Accueil</Link>
          <Link className="header-link" to="/">Qui Sommes Nous?</Link>
          <Link className="header-link" to="/">Projets</Link>
          <Link className="header-link" to="/">Évenements</Link>
          <Link className="header-link" to="/">Contact</Link>
          <Link className="header-link" to="/">Eng</Link>
        </div>
      </div>
      <div className="nav-connect">
        <ButtonRadius title="Lancer mon Projet !" borderColor='#c5473b' />
        <p>Connexion</p>
      </div>
    </nav>
   );
}
 
export default Header;