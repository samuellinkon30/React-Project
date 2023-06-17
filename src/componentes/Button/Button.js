import './Button.css'

const Button = (props) => {
    return(
        <button className="btn">{props.valor}</button>
    )
}

export default Button