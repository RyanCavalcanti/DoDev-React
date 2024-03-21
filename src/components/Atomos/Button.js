

const Botao = (props) => {
    return (
        <>
            <button onClick={() => props.onAcaoDoClick(props.mensagemNoClick)}>{props.children}</button>
        </>
    )
}

export default Botao;