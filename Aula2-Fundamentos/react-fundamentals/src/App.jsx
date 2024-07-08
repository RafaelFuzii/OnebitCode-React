
import Title from "./components/Title"
import Subtitle from './components/Subtitle'
import Status from './components/Status'
import styles from "./App.module.css"

function sum(a, b){
  return a + b
}

function App() {


  return (
    <>
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Status />
    </div>
    </>
  )
}

export default App
