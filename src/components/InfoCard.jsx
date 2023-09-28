import '../styles/css/InfoCard.css';

const InfoCard = (props) => {
    return (
        <div className='infocard-flexbox'>
            <div className='infocard-left-content'>
                <p className="infocard-title">{props.leftTitle}</p>
                <p className="infocard-text">{props.leftText}</p>
            </div>
            <div className='infocard-right-content'>
                <img className="infocard-image"src={props.rightImage} alt="banner"/>
            </div>
        </div>
    )
}

export default InfoCard;