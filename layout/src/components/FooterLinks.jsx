import '../styles/css/FooterLinks.css';

const ObjNav = {
    content: [
        {
            "title": "Informações",
            "list_links": [
                { "link": "/whoami", "name": "Quem Somos" },
                { "link": "/deadlines", "name": "Prazos de Envio" },
                { "link": "/devolutions", "name": "Trocas e Devoluções" },
                { "link": "/cupons", "name": "Promoções e Cupons" }
            ]
        },
        {
            "title": "Minha Conta",
            "list_links": [
                { "link": "/myaccount", "name": "Minha Conta" },
                { "link": "/mylist", "name": "Meus Pedidos" },
                { "link": "/signin", "name": "Cadastre-se" }
            ]
        },
        {
            "title": "Onde nos Encontrar",
            "list_links": [
                { "link": "/stores", "name": "Lojas" },
                { "link": "/address", "name": "Endereço" }
            ]
        }
    ]
}

const FooterLinks = () => {
    const link = Object.values(ObjNav.content).map(e=>{
        return (
            <nav><p className="footerlink-title">{e.title}</p>
            <ul className="footerlink-ul">
            {e.list_links.map(e=>{
                return (
                    <li className="footerlink-links">
                        <a href={e.link}>{e.name}</a>
                    </li>
                )
            })}
            </ul></nav>
        )
    })

    // console.log(link)
    return (
        <div className="footer-nav-links">
            {link}
        </div>
    )
}

export default FooterLinks;