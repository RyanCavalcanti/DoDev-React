import React from "react";
import Botao from "../Atomos/Button";
import Span from "../Atomos/Span";

interface IMoleculaHeaderProps {
    onVoltar: () => void;
    texto: string;
    onSeguir: () => void;
}

const MoleculasHeader: React.FC<IMoleculaHeaderProps> = (props) => {
    return (
        <div>
            <Botao onAcaoDoClick={props.onVoltar}>≤</Botao>
            <Span>{props.texto}</Span>
            <Botao onAcaoDoClick={props.onSeguir}>≥</Botao>
        </div>
    )
}

export default MoleculasHeader;