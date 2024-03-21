import Botao from "./Botao";

const Secao = () => {
    const handleClick = (valor) => {
        console.log("Botão clicado na seção: " + valor)
    }

    return (
        <div>
            <Botao onAcaoDoClick={handleClick} mensagemNoClick="On fire">Btn Secao</Botao>
        </div>
    )
}

export default Secao;