import './Select.css'

const Select = (props) => {
    return(
        <div className="select_global">
            <p>{props.label}</p>
            <select>
            {props.itens.map(
                item => <option value={item} key={item}>{item}</option>
            )}
            </select>
        </div>
    )

}

export default Select