import { useState } from 'react'
import reactLogo from './assets/react.png'


function App() {


  return (
    <>
    <div>
      <img src={reactLogo} alt="" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usúario web e nativas</p>
      <button>Aprenda React</button> <button>Referência da API</button>
      <hr />
    </div>

    <div>
      <h1>Crie interfaces de usúario de componentes</h1>
      <p>React permite que você construa interfaces de usuário a partir de pedaçoes individuais chamados componentes</p>
      <hr />
    </div>

    <div>
      <h1>Escreva Componentes com código e marcação</h1>
      <p>Componentes React são funções Javascript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe Javascript popularizada pelo React</p>
      <hr />
    </div>

    <div>
      <h1>Próximos Passos</h1>
      <ul>
        <li>Uso de Dados dinâmicos no JSX</li>
        <li>Criação de novos Componetes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do Javascript</li>
      </ul>
    </div>
    </>
  )
}

export default App
