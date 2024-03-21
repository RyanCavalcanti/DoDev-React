import React from 'react';

interface IButtonProps{
    mensagemNoClick?: string ;
    onAcaoDoClick: (message: string) => void;
    children: string | React.ReactElement | React.ReactElement[];
}

const Botao: React.FC<IButtonProps> = (props) => {
    console.log("Props", props)
    return (
        <>
            <button onClick={() => props.onAcaoDoClick(props.mensagemNoClick || '')}>{props.children}</button>
        </>
    )
}

export default Botao;