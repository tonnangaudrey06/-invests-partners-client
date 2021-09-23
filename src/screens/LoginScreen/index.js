import { Container } from '../../components';
import '../../styles/Login.css'
import image1 from "../../assets/img/ban.png"
import google from "../../assets/img/google.png"
import facebook from "../../assets/img/facebook.png"
import { useState } from 'react';
import { LoginForm, RegisterForm } from './components';

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
          <div style={{position: 'relative', width:'100%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
            onClick={() => switchFn("login")}>Se Connecter</p>
            </div>
          </div>
         {page === "register" ? (
           <RegisterForm />
         ) : (
            <LoginForm />
          )}
          {page=== 'login' && <><div>
          <div className="login-divider">Ou</div>
          </div>
          <p style={{marginTop: 0}}> Connectez vous via vos réseau sociaux</p>
          <div className="login-img-end">
            <img className="img-end" src={google}></img>
            <img className="img-end" src={facebook}></img>
          </div></>}
        </div>
      </div>
    </Container>
   );
}
 
export default LoginScreen;