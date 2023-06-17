import CampoTexto from "../CampoTexto/CampoTexto"
import './Form.css'

const Form = () => {
    return(
        <div className="form_flobal">
            <form>
            <CampoTexto label='Nome' placeholder='Seu Nome' type='text'></CampoTexto>
            <CampoTexto label='Email' placeholder='E-mail' type='email'></CampoTexto>
            <CampoTexto label='Mensagem' placeholder='Mensagem' type='text'></CampoTexto>
            <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
export default Form