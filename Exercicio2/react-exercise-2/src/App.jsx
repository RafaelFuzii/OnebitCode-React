import Card from "./components"
import posterImg from "./assets/start-wars.jpg"
import pesbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

function App() {


  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={posterImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={pesbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg}/>
    </>
  )
}

export default App
 