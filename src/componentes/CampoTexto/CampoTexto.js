import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {


    const [valor, setValor] = useState('Samuel')

    const onChange = (event) => {
        setValor(event.target.value)
        console.log(valor)
    }

    return(
        <div className="item">
        <p>{props.label}</p>
        <input value={valor} onChange={onChange} type={props.type} placeholder={props.placeholder}></input>
    </div>
    )
}

export default CampoTexto