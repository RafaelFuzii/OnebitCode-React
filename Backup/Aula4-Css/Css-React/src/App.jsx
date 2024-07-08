import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>{/* Css Global */}
      <h1>React Com CSS</h1>
      {/* Css components */}
      <MyComponents />
      <p>Este paragrafo e do app.js</p>
      <p className="my-comp-paragrafh">Este tb é do componente</p>
    </>
  )
}

export default App
