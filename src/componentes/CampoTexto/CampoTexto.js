import './CampoTexto.css';

const CampoTexto = (props) => {
    return(
        <div className="item">
        <p>{props.label}</p>
        <input type={props.type} placeholder={props.placeholder}></input>
    </div>
    )
}

export default CampoTexto