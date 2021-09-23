import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";

const LoginForm = () => {
    return (
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
    )
}

export default LoginForm;