import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaRegCopyright, FaTwitterSquare } from 'react-icons/fa';
import '../../styles/Footer.css'
import { TiChevronRightOutline } from "react-icons/ti"
import { MdPhoneInTalk } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div style={{flex: 1, color: "white", textAlign: "right"}}>Restez à l'écoute de notre actualité</div>
      <div className="row-2">
        <div className="social-icons">
          <FaFacebookSquare size={50} fill="white" style={{marginRight: 10}} />
          <FaLinkedin size={50} fill="white" style={{marginRight: 10}} />
          <FaTwitterSquare size={50} fill="white" style={{marginRight: 10}} />
          <FaInstagramSquare size={50} fill="white" style={{marginRight: 10}} />
        </div>
          <form className="input-footer" action="">
            <input placeholder="Votre Email" className="text-input" type="text" name="email" id="" />
            <input className="input-button" type="button" value="OK" />
          </form>
      </div>
      <div className="row-3">
        <div>
          <h2>Qui sommes nous?</h2>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
        </div>
        <div>
          <h2>Nos projets</h2>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
        </div>
        <div>
          <h2>Comment lancer son projet</h2>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
          <p><TiChevronRightOutline /> Lorem ipsum</p>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h3>Contact</h3>
          <p><MdPhoneInTalk style={{marginRight: 8}} size={24} />(+237) 698-55-62-14</p>
          <p><MdPhoneInTalk style={{marginRight: 8}} size={24} /> (+237) 655-85-07-14 </p>
          <p><GrMail style={{marginRight: 8}} size={24} /> info@invest--partners.com </p>
          <p><TiChevronRightOutline style={{marginRight: 8}} size={24} /> BP: 07756 Douala, Cameroun </p>
        </div>
      </div>
      <div className="row-4">
        <FaRegCopyright style={{marginRight: 8}} /> By House Innovation SARL
      </div>
    </footer>
   );
}
 
export default Footer;