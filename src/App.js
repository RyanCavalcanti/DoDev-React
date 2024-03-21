import logo from './logo.svg';
import './App.css';
import Botao from './Botao';
import Secao from './Secao';
// import { useState } from 'react';
// import useLog from './hooks/useLog';


function App() {
  // const [nome, setNome] = useState('Ryan')
  // const assinado = useLog(nome)

  // console.log("app", assinado)

  const handleClick = (valor) => {
    alert(valor)
  }

  const handleClickTipoDois = (valor) => {
    alert(valor + '... Att, Rocha')
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Secao/>
          <Botao />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button onClick={() => setNome('Ryan Cavalcanti')}>Sobrenome</button> */}
          <Botao onAcaoDoClick={handleClick} mensagemNoClick="1">Btn 1</Botao>
          <Botao onAcaoDoClick={handleClickTipoDois} mensagemNoClick="2">Btn 2</Botao>
          <Botao onAcaoDoClick={handleClick} mensagemNoClick="3">Btn 3</Botao>
          <Botao onAcaoDoClick={handleClickTipoDois} mensagemNoClick="4">Btn 4</Botao>

        </header>
      </div>
    </>
  );
}

export default App;
