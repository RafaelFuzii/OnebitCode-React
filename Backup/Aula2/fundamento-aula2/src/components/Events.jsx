const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou")
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Rendeziando isso!</h1>
        } else {
            return <h1>Posso renderizar isso!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aki</button>
            </div>
            <div>
                <button onClick={() => {console.log("Clicou no funcion inline")}}>Clique Aki tambem</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true){
                        console.log("Isso nao Deveria existir")
                    }
                }}>Clique aki errado</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )


}

export default Events