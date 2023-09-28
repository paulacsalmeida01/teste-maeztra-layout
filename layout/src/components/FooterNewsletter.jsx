import '../styles/css/FooterNewsletter.css';
import SearchBar from './SearchBar';
import Button from './Button';

const FooterNewsletter = () => {
    return (
        <div className="footernewsletter-div">
            <p className='footernewsletter-receba'>Recebe Nossa Newsletter</p>
            <div className='footernewsletter-input'>
                <SearchBar placeholder="Digite seu e-mail"/>
                <Button text="Enviar"/>
            </div>
        </div>
    )
}

export default FooterNewsletter;