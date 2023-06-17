import Button from "../Button/Button"
import CampoTexto from "../CampoTexto/CampoTexto"
import Select from "../Select/Select"
import './Form.css'

const Form = () => {

    const times = ['Escola 1','Escola 2','Escola 3']

    const save = (event)=>{
        event.preventDefault()
        console.log(event.target);
    }
    
    return(
        <div className="form_flobal">
            <form onSubmit={save}>
            <CampoTexto label='Nome' placeholder='Seu Nome' type='text'></CampoTexto>
            <CampoTexto label='Email' placeholder='E-mail' type='email'></CampoTexto>
            <CampoTexto label='Mensagem' placeholder='Mensagem' type='text'></CampoTexto>
            <Select itens={times} label='Times'></Select>
            <Button valor='Enviar'></Button>
            </form>
        </div>
    )
}
export default Form