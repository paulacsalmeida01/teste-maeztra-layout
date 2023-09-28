import '../styles/css/FooterLogos.css';

const FooterLogos = () => {
    return (
        <div className="footer-logo-div">
            <div className="footer-logo-social">
                <img src="assets/facebook.png" alt="facebook" />
                <img src="assets/linkedin.png"  alt="linkedin" />
                <img src="assets/instagram.png" alt="instagram"/>
                <img src="assets/youtube.png"   alt="youtube"  />
            </div>
            <div className="footer-logo-cards">
                <img src="assets/mastercard.png" alt="mastercard" />
                <img src="assets/visa.png" alt="visa" />
                <img src="assets/mastercard.png" alt="mastercard" />
                <img src="assets/visa.png" alt="visa" />
            </div>
            <div className="footer-logo-main">
                <div className="end">
                    <p>Powered by</p>
                    <img src="assets/footer_vtex-logo00.png" alt="vtex"/>
                </div>
                <div className="end">
                    <p>Developed by</p>
                    <img src="assets/footer_maeztra-logo00.png" alt="maeztra" />
                </div>
            </div>
        </div>
    );
}

export default FooterLogos;