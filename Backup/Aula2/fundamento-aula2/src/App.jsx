import { useState } from 'react'

// Components
import FirstComponent from './components/FirstComponent'
import TeamplateExpressions from './components/TeamPlateExpression'
import Mycomponent from './components/MyComponet'
import Challenge from './components/Challenge'
import Events from './components/Events'

// Styles CSS
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Fundamentos React</h1>
    <FirstComponent />
    <TeamplateExpressions />
    <Mycomponent />
    <Events />
    <Challenge />
    </>
  )
}

export default App
