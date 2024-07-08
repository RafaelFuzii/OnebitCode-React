import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState("Rafael")

  return (
    <div>
        <div>
            <h1>Isso será Exibido?</h1>
            {x && <p>se X for true, sim!</p>}
            {!x && <p>se X for falso, sim!</p>}
            <h1>If ternario &#8595;</h1>
            {name === "João" ? (
                <div>
                    O nome e João
                </div>
            ) : (
                <div>
                    Nome Nao encontrado
                </div>
            )}
            <button onClick={() => setName("João")}>Clique aqui!</button>
        </div>
    </div>
  )
}

export default ConditionalRender