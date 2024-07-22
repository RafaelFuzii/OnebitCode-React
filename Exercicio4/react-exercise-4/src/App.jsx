import { useState } from 'react'
import Gerador from './components/Gerador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Gerador></Gerador>
    </div>
  )
}

export default App
