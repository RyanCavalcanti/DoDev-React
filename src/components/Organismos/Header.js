import HeaderMolecula from "../Moleculas/Header.js";

const Secao = (props) => {
    const handleVoltar = () => {
        alert('Voltando para' + props.ultimaPagina)
        props.onNavegar()
    };
    const handleSeguir = () => {
        alert('Seguindo' + props.proximaPagina)
        props.onNavegar()
    };

    return (
        <HeaderMolecula onVoltar={handleVoltar} onSeguir={handleSeguir} texto={props.texto} />
    )
}

export default Secao;