// testando comentario

import Mycomponent from "./MyComponet";

const FirstComponent = () => {

    return(
        <div>
            {/*algum comentario */}
            <h1>Meu Primeiro Componente</h1>
            <p className="test">Meu texto</p>
            <Mycomponent />
        </div>
    )

}

export default FirstComponent;