import "../components/Footer.modules.css";
import face from "../images/ico-facebook.png";
import instagram from "../images/ico-instagram.png";
import whatsapp from "../images/ico-whatsapp.png";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

export function Footer() {
  const { tema } = useContext(ContextGlobal);
  return (
    <footer
      className="footer"
      style={{ backgroundColor: tema.footer, color: tema.font }}
    >
      <div className="info-footer">
        <p className="nombre">Dayana Silva - Eugenio Pereira</p>
      </div>
      <div className="images">
      <a className="button-class" href="https://www.whatsapp.com/">
          <img className="wp" src={whatsapp} alt="WhatsApp" />
        </a>
        <a className="button-class" href="https://www.instagram.com/">
          <img className="ig" src={instagram} alt="Instagram" />
        </a>
        <a className="button-class" href="https://www.facebook.com/">
          <img className="face" src={face} alt="Facebook" />
        </a>
 


      </div>
    </footer>
  );
}
//
