const Times = (props) => {

    const css = {backgroundColor:props.cor}
    return(
        <section style={css}>
            <h3>{props.nomeTime}</h3>
        </section>
    )
}

export default Times


