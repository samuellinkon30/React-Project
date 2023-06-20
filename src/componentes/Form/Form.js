import { useState } from 'react';
import Button from "../Button/Button"
import CampoTexto from "../CampoTexto/CampoTexto"
import Select from "../Select/Select"
import './Form.css'

const Form = (props) => {

    const times = ['Escola 1','Escola 2','Escola 3']

    //Criando um estado para setar as varivareis 
    const [nome, setNome] = useState('');

    const [email, setEmail] = useState('');

    const [mensagem, setMensagem] = useState('');

    const [time, setTime] = useState('');

    const save = (event)=>{
        event.preventDefault()
        props.aoCadastrar({
            nome:nome,
            email:email,
            mensagem:mensagem,
            time:time
        })
    }    

    return(
        <div className="form_flobal" style={{display: props.show}}>
            <form onSubmit={save}>
             {/* Usando as props para enviar o valor das varivaies*/}
            <CampoTexto 
                aoAlterado={valor=>setNome(valor)} 
                valor={nome} 
                label='Nome' 
                placeholder='Seu Nome' 
                type='text'>
            </CampoTexto>

            <CampoTexto aoAlterado={valor=>setEmail(valor)} valor={email} label='Email' placeholder='E-mail' type='email'></CampoTexto>

            <CampoTexto aoAlterado={valor=>setMensagem(valor)} valor={mensagem} label='Mensagem' placeholder='Mensagem' type='text'></CampoTexto>
            
            <Select valor={time} aoAlterado={valor=>setTime(valor)} itens={times} label='Times'></Select>
          
            <Button valor='Enviar'></Button>
            </form>
        </div>
    )
}
export default Form