import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {


    //Usando o UseState para alterar um valore de variável
    // const [valor, setValor] = useState('Samuel')

    const onChange = (event) => {
        // setValor(event.target.value)
        // console.log(valor)
        props.aoAlterado(event.target.value)
    }

    return(
        <div className="item">
        <p>{props.label}</p>
        <input value={props.valor} onChange={onChange} type={props.type} placeholder={props.placeholder}></input>
    </div>
    )
}

export default CampoTexto