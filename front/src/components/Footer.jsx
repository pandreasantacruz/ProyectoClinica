import { Link } from "react-router-dom";
import {
  footerDiv,
  footerImagesI,
  footerImagesF,
} from "../styles/Footer.module.css";
import imagenInstagram from "../assets/instagram.png";
import imagenFacebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className={footerDiv}>
      <Link to={"/contact"}> Contacto </Link>
      <img src={imagenInstagram} alt="Instagram" className={footerImagesI} />
      <img src={imagenFacebook} alt="Facebook" className={footerImagesF} />
    </div>
  );
};

export default Footer;
