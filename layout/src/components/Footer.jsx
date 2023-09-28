import FooterNewsletter from "./FooterNewsletter";
import FooterLinks from './FooterLinks';
import '../styles/css/Footer.css';
import FooterLogos from "./FooterLogos";

const Footer = () => {
    return (
        <>
            <FooterNewsletter className="newletter" />
            <FooterLinks />
            <FooterLogos />
        </>
    )
}

export default Footer;