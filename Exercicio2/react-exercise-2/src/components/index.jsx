import starWars from '/start-wars.jpg'
import styles from "./styles.module.css"

function ImageStar(){
    return(
        <div className={styles.container}>
            <img src={starWars} alt="" className={styles.imageStarWars}/>
            <div className={styles.content}>
                <h2 className={styles.title}>Pôster: Star Wars (1977)</h2>
                <p className={styles.paragraph}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}

export default ImageStar