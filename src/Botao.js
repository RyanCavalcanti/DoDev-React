// import { useState } from "react"
// import useLog from "./hooks/useLog";

const Botao = (props) => {
    // const [soma, setSoma] = useState(0);
    // const [frase, setFrase] = useState('Meu nome é: ');

    // const assinado = useLog(soma)

    // console.log("app", assinado)

    // console.log('soma', soma)
    // console.log('Frase', frase)

    // const handle = () => {
    //     setSoma(soma + 1);
    // }

    // const handleFrase = () => {
    //     setFrase(frase + " Ryan");
    // }
    return (
        <>
            <button onClick={() => props.onAcaoDoClick(props.mensagemNoClick)}>{props.children}</button>
            {/* <button onClick={handleFrase}>Muda Frase</button> */}
        </>
    )
}

export default Botao;