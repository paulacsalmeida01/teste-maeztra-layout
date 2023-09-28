import '../styles/css/RectImgTitleSubtitle.css';

const RectImgTitleSubtitle = (props) => {
    return (
        <div className="rect-main">
            <img src={props.src} alt={props.alt}/>
            <div>
                <p className="rect-main-t1">{props.title}</p>
                <p className="rect-main-t2">{props.sub}</p>
            </div>
        </div>
    )
}

export default RectImgTitleSubtitle;