import '../styles/css/Product.css';
import Button from './Button';

const Colors = (data) => {
    let styles = {};
    return [...data].map((element)=>{
        // console.log(element)
        styles = {bg: {
            backgroundColor: `${element}`
        }}
        return (
            <div className="square-colors" style={styles.bg}></div>
         )
     })
}

const Product = (props) => {
    return (
        <div className="product-list">
            <img src={props.src} alt={props.alt}/>
            <div className="product-flex-div-colors">
                {Colors(props.colors)}
            </div>
            <div className='product-description-div'>
                <p className='product-price-p'>{props.price}</p>
                <p className='product-name-p'>{props.name}</p>
                <p className='product-description-p'>{props.description}</p>
            </div>
            <div className='product-buttom-addcard'>
                <Button text="Adicionar" bold={true} className="addtocardbuttom"/>
            </div>
        </div>
    )
}

export default Product;