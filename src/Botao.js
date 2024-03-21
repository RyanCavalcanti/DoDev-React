import { useState } from "react"

const Botao = () => {
    const [soma, setSoma] = useState(0);
    const [frase, setFrase] = useState('Meu nome é: ');

    console.log('soma', soma)
    console.log('Frase', frase)

    const handle = () => {
        setSoma(soma + 1);
    }

    const handleFrase = () => {
        setFrase(frase + " Ryan");
    }
    return (
        <>
            <button onClick={handle}>Soma</button>
            <h1>.</h1>
            <button onClick={handleFrase}>Muda Frase</button>
        </>
    )
}

export default Botao