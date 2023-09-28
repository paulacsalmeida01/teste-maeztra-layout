import SlideImageText from './SlideImageText';
import RectImgTitleSubtitle from './RectImgTitleSubtitle';
import Product from './Product';
import InfoCard from './InfoCard';
import '../styles/css/Main.css';

const Main = () => {
    const prod1 = (
        <Product src="assets/clothes01.png" colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            name="Faux Suede Mini Skirt" price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."/>
    )
    const prod2 = (
        <Product src="assets/clothes02.png" colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            name="Ruched Rose Print Mini Skirt" price="R$ 320,00"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."/>
    )

    return (
        // TODO::criar_um_slider_funcional_com_slideimagetext
			  // src="assets/banner-image.png"
        <>
            { /*-------------------------------------------------------------------*/ }
            <div>
                <SlideImageText  alt="banner"
                    th1="Promoções de Outono"
                    th2="Confiras os melhores looks para combinar com você nesse Outono"
                    th3="Conferir"/>
            </div>
            { /*-------------------------------------------------------------------*/ }
            <div className='main-div-title-reasons'>
                <p className='main-title-reasons'>Por que comprar na Maeztra?</p>
                <div className="five-reasons-rectangles">
                    <RectImgTitleSubtitle src="assets/earth.png" alt="earth" title="Produtos importados" sub="Produto de Alta Qualidade"/>
                    <RectImgTitleSubtitle src="assets/house.png" alt="house" title="Estoque no Brazil"   sub="Produtos mais perto de você!"/>
                    <RectImgTitleSubtitle src="assets/box.png"   alt="box"   title="Trocas Garantidas"   sub="Trocas em até 48 horas, vejas as regras"/>
                    <RectImgTitleSubtitle src="assets/tag.png"   alt="tag"   title="Ganhe 5% off" sub="Pagando à vista no Cartão"/>
                    <RectImgTitleSubtitle src="assets/truck.png" alt="truck" title="Frete Grátis" sub="Em compras acima de R$ 499,00"/>
                </div>
            </div>
            { /*-------------------------------------------------------------------*/ }
            <div className='main-brands'>
                <p className="main-title-brands">Marcas Parceiras</p>
                <div className='main-div-brands'>
                    <img className="main-div-logo" src="assets/marca1.png" alt="X"/> <img className="main-div-logo" src="assets/marca2.png" alt="X"/>
                    <img className="main-div-logo" src="assets/marca3.png" alt="X"/> <img className="main-div-logo" src="assets/marca4.png" alt="X"/>
                    <img className="main-div-logo" src="assets/marca5.png" alt="X"/>
                </div>
            </div>
            { /*-------------------------------------------------------------------*/ }
            <div className='main-amostra'>
                <p className="main-title-brands">As Mais Pedidas</p>
                <div className='main-product-list'>
                    {prod1}{prod2}{prod1}{prod2}{prod1}
                </div>
            </div>
            { /*-------------------------------------------------------------------*/ }
            <InfoCard leftTitle="Lorem ipsum"
            leftText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
            "
            rightImage="assets/colecaooutono.png"
            />
        </>
    )
}

export default Main;
