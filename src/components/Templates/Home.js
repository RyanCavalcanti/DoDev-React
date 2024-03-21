import Header from "../Organismos/Header.js";
import { useEffect, useState } from 'react';

const Home = () => {
    const [sessao, setSessao] = useState(true)

    useEffect(() => {
        if(!sessao){
            alert('A sessão expirou')
        }
    }, [sessao])

    const handleNavegar = () =>{
        setSessao(false)
    }

    return (
        <Header ultimaPagina='/home' proximaPagina='/perfil' texto='Header' onNavegar={handleNavegar}/>
    )
}

export default Home;