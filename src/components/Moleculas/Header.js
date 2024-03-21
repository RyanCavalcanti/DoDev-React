import Botao from "../Atomos/Button";
import Span from "../Atomos/Span";

const MoleculasHeader = (props) => {
    return (
        <div>
            <Botao onAcaoDoClick={props.onVoltar}>≤</Botao>
            <Span>{props.texto}</Span>
            <Botao onAcaoDoClick={props.onSeguir}>≥</Botao>
        </div>
    )
}

export default MoleculasHeader;