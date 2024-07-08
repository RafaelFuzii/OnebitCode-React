const Challenge = () =>{

    const num = 2, num2 = 3

    const sum = () => {
        console.log(num + num2)
    }




    return(
        <div>
            <h1>Primeiro Número: {num}</h1>
            <h1>Segundo Número: {num2}</h1>
            <button onClick={sum}>Somar</button>
        </div>
    )
}

export default Challenge