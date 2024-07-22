import { useState } from "react";
import Title from "../Title";
import styles from "./styles.module.css"
import Input from "../Input";

export default function Gerador(){

    const [senha, setSenha] = useState('')
    const [copiarTexto, setCopiarTexto] = useState('')
    const [passwordSize, setPasswordSize] = useState(10)
    const [showInput, setShowInput] = useState(false)

    const tamanhoSenha = showInput ? passwordSize : 10
    function gerarSenha(){

        let password = []
        const possibleSenha = "qazwsxedcrfvtgbyhnmjuiokpl!@#$%¨&*()"

        for(let i = 0; i < tamanhoSenha; i++){
            const randomNumber = Math.floor(Math.random() * possibleSenha.length)
            const removedChar = possibleSenha.charAt(randomNumber)
            password.push(removedChar)
        }
        
        const newPassword = password.join('')

        setSenha(newPassword)
    }

    function copiar() {
        window.navigator.clipboard.writeText(senha)
        setCopiarTexto("Copiado!")
      }

    return (
        <div>
            <Title><span>Gerador De Senhas</span></Title>
            <div>
                <label htmlFor="showInput">Customizar tamanho:</label>
                <input type="checkbox" id="showInput" value={showInput} onChange={() => setShowInput(currentState => !currentState)}/>
            </div>
            {showInput ? (
                <div className={styles.container}>
                    <label htmlFor="passwordSize">Tamanho:</label>
                    <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
                </div>
            ): null}

            <div className={styles.container}>
                <button className={styles.buttons} onClick={gerarSenha}>Gerar senha de {tamanhoSenha} caractere!</button>
                <button className={styles.buttons} onClick={copiar}>Copiar</button>
            </div>
            <div className={styles.containerPassword}>
                <p>{senha}</p>
            </div>
        </div>
    )
}