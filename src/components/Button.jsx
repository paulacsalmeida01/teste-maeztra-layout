import '../styles/css/Button.css'

const Button = (props) => {
    let size_w = 400;
    if (props.bold){
        size_w += 300;
    }

    const styles = {
        weigth:{
            'fontWeight': size_w
        }
    }

    return (
        <button className="submit-button" type="submit">
            {props.text}
        </button>
    )
}

export default Button