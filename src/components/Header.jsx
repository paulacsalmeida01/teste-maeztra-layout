import '../styles/css/Header.css'
import Button from './Button'
import SearchBar from './SearchBar'
import IconAndLink from './IconAndLink'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-promocoes'>
                <p><a href="/promotions">Acompanhe as melhores promoções disponíveis aqui na Maeztra.</a></p>
            </div>

            <div className='main-header'>
                <div className='hidden-not-hidden'>
                    <img className="hidden-icon" alt="menu"
                        src="assets/icon-menu.png" />
                    <img className="header-logo-maeztra"
                        src="assets/logo-maeztra-novo.png" alt="logo maeztra"/>
                </div>

                <form className="header-form-search">
                    <SearchBar placeholder="O Que Você Busca?"/>
                    <Button text="Buscar" bold="true"/>
                </form>

                <div className='header-href-links'>
                    <IconAndLink text="Minha Conta" img="assets/user-vector.png" link="/myaccount"/>
                    <IconAndLink text="Minha Lista" img="assets/heart-vector.png" link="/mylist"/>
                    <IconAndLink text="Meu Carrinho" img="assets/card-vector.png" link="/mycard" border="true"/>
                </div>
                <dir className="hidden-not-hidden">
                    <img className="hidden-icon" alt="menu"
                        src="assets/icon-search.png" />
                    <img className="hidden-icon" alt="menu"
                        src="assets/icon-buy.png" />
                </dir>
            </div>

            <nav className="header-nav-sub-topics">
                <ul className="header-nav-ul-sub-topics">
                    <IconAndLink text="Novidades" img="assets/dress-vector.png" link="/new" bold={true}/>
                    <IconAndLink text="Vestidos" link="/dresses" />
                    <IconAndLink text="Roupas" link="/clothes" />
                    <IconAndLink text="Sapatos" link="/shoes" />
                    <IconAndLink text="Lingerie" link="/lingerie" />
                    <IconAndLink text="Acessorios" link="/accessories" />
                    <IconAndLink text="OUTLET" link="/OUTLET" />
                </ul>
            </nav>

        </div>
    )
}

export default Header
