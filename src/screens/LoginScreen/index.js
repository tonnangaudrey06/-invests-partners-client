import { Container } from '../../components';
import '../../styles/Login.css'
import image1 from "../../assets/img/ban.png"
import google from "../../assets/img/google.png"
import facebook from "../../assets/img/facebook.png"
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLock2Line } from 'react-icons/ri';
import { GiShakingHands } from 'react-icons/gi';
import { useState } from 'react';

const LoginScreen = () => {
  const [page, setPage] = useState("login")

  const switchFn = (item) => {
    setPage(item)
  }
  return ( 
    <Container>
      <div className="login-contain">
        <div className="login-empty">
          <img className="login-img" src={image1}></img>
          <div className="login-mg"></div>
        </div>
        <div className="log-form">
          <h2>Bienvenue chez Invest and Partners</h2>
          <div className="login-sm-title">
            <p 
              style={{
                borderBottom: page === "register" ? "solid" : "none", 
                borderBottomColor: page === "register" ? "#c5473b" : "white",
                paddingBottom: 5,
                cursor: "pointer"
              }}
              onClick={() => switchFn("register")}>Sinscrire</p> 
            <p 
            style={{
              borderBottom: page === "login" ? "solid" : "none", 
              borderBottomColor: page === "login" ? "#c5473b" : "white",
              paddingBottom: 5,
              cursor: "pointer"
            }}
            onClick={() => switchFn("login")}>Se Connecter</p></div>
         {page === "register" ? (<form className="login-form">
            <div className="log-input"><FaRegUser style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="text"  placeholder="Votre Nom" for="name"></input></div>
            <div className="log-input"><AiOutlineMail style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="email" placeholder="Votre boite Mail" for="email"/> </div>
            <div className="log-input"><RiLock2Line style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="password" placeholder="Mot de Passe" for="password"/></div>
            <div className="log-input"><GiShakingHands style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><select className="login-box" placeholder="sel">
              <option value="h">Homme</option>
              <option value="f">Femme</option>
            </select></div>
            <div className="form-end">
              <div style={{display: "flex", justifyContent: "center"}}>
                <input type="checkbox" name="session" value="session"/>
                <label for="session">Garder ma session active</label>
              </div>
                <p>Mot de Passe oublié ?</p>
            </div>
                <input className="but" type="submit"></input>
          </form>) : (
            <form className="login-form"> 
            <div className="log-input"><AiOutlineMail style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="email" placeholder="Votre boite Mail" for="email"/> </div>
            <div className="log-input"><RiLock2Line style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="password" placeholder="Mot de Passe" for="password"/></div>
            <div className="form-end">
              <div style={{display: "flex", justifyContent: "center"}}>
                <input type="checkbox" name="session" value="session"/>
                <label for="session">Garder ma session active</label>
              </div>
                <p>Mot de Passe oublié ?</p>
            </div>
                <input className="but" type="submit" value="Connexion"></input>
          </form>
          )}
          <div>
          <div className="login-divider">Ou</div>
          </div>
          <p style={{marginTop: 0}}> Connectez vous via vos réseau sociaux</p>
          <div className="login-img-end">
            <img className="img-end" src={google}></img>
            <img className="img-end" src={facebook}></img>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default LoginScreen;