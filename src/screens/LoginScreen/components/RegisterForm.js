import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { GiShakingHands } from "react-icons/gi";
import { useState } from "react";

const RegisterForm = () => {
  
  const [type, setType] = useState('personal');
  const imprt = [
    'DSF (pdf)',
    'Statut (pdf)',
    'RCCM (pdf)',
    'Carte de contribuable (pdf)',
    'Attestation de domiciliation bancaire (pdf)',
    'ANR (pdf)'
  ]
    return (
      <form className="login-form">
        <div className="log-input"><FaRegUser style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="text"  placeholder="Votre Nom" for="name"></input></div>
        <div className="log-input"><AiOutlineMail style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="email" placeholder="Votre boite Mail" for="email"/> </div>
        <div className="log-input"><RiLock2Line style={{position: "absolute", left: 10, fill:"grey" }} size={25} /><input className="login-box" type="password" placeholder="Mot de Passe" for="password"/></div>
        <div className="log-input" style={{justifyContent: 'space-evenly', fontWeight: 'bold' }}>
          <div style={{display: "flex"}}>
            <input 
              type="radio" 
              name="personal" 
              value=""
              checked={type==='personal'}
              onChange={() => setType('personal')}/>
            <label style={{marginLeft: 10}} for="radio">Personne physique</label>
          </div>
          <div style={{display: "flex"}}>
            <input type="radio" 
              name="entreprise" 
              value=""
              checked={type==='entreprise'}
              onChange={() => setType('entreprise')}/>
            <label style={{marginLeft: 10}} for="radio">Entreprise</label>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start'}}>
          {type === 'entreprise' && <>{imprt.map((item, index) => (
            <div key={index} style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start'}}>
              <p style={{fontWeight:'bold', marginBottom: 6}}>{item}</p>
              <label style={{
                width: 'max-content',
                padding: 8,
                outline: 'none',
                border: 'none',
                backgroundColor: '#c5473b',
                paddingRight: 15,
                paddingLeft: 15,
                borderRadius: 3,
                color: 'white',
                cursor: 'pointer'
              }}>
                  <input type="file" accept="application/pdf" style={{display: 'none'}}/>
                  Importer
              </label>
            </div>
          ))}</>}
          {type ==='personal' && <div style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start'}}>
              <p style={{fontWeight:'bold', marginBottom: 6}}>Scan CNI/Passeport (pdf,png,jpg)</p>
              <label style={{
                width: 'max-content',
                padding: 8,
                outline: 'none',
                border: 'none',
                backgroundColor: '#c5473b',
                paddingRight: 15,
                paddingLeft: 15,
                borderRadius: 3,
                color: 'white',
                cursor: 'pointer'
              }}>
                  <input type="file" accept="application/pdf, image/png, image/jpg" style={{display: 'none'}}/>
                  Importer
              </label>
            </div>}
        </div>
        <div className="form-end">
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start'}}>
          <div style={{display: "flex"}}>
            <input type="checkbox" name="session" value="session"/>
            <label style={{marginLeft: 10}} for="session">Garder ma session active</label>
          </div>
          <div style={{display: "flex"}}>
            <input type="checkbox" name="session" value="session"/>
            <label style={{marginLeft: 10}} for="session">J'ai lu et j'accepte les règles d'adhésion</label>
          </div>
        </div>
        <p style={{paddingTop: 0, cursor: 'pointer'}}>Mot de Passe oublié ?</p>
        </div>
            <input className="but" type="submit"></input>
      </form>
    )
}

export default RegisterForm;