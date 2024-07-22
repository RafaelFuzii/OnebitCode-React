
import './App.css'
import userCounter from './hooks/useCounter'

// Regra 1: Onde usar os hooks (e como criar seus próprios hooks)
// 1. Com isso chegamos à primeira regra dos hooks: **você só pode chamar um hook em uma função que é um componente React**, você não pode chamar hooks em funções comuns do JavaScript.
// 2. Você pode criar seus próprios hooks seguindo o padrão de nomenclatura e retornar valores. O seu hook será uma função, mas que você também só deverá chamar dentro de um componente React.
// 3. Crie uma pasta “hooks” e dentro dela um arquivo “useCounter.js” com a seguinte função:

// Regra 2: A importância da ordem dos hooks
// 1. O React monitora os hooks através de uma lista, ele não sabe o nome que demos para eles ou onde e como estamos trabalhando com eles. Por isso, a ordem em que usamos os hooks no componente importa (e muito). O que nos leva à segunda regra.
// 2. A segunda regra é que **você só pode chamar um hook no top-level da função**, nunca deverá chamar os hooks dentro de blocos condicionais, repetições ou outros funções criadas dentro do componente.
// 3. Por causa da forma como o React lida com os hooks é necessário que a ordem e a quantidade dos hooks em um componente sejam sempre as mesmas. Se tentarmos colocar o hook dentro de uma condicional veremos que isso causará vários erros:

function App() {

  const counter = userCounter()


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
