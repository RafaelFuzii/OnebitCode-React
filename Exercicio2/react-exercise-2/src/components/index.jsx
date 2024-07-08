import styles from "./styles.module.css"

function Card({ title, posterImg }){
    return(
        <div className={styles.container}>
            <img src={posterImg} alt="" className={styles.imageStarWars}/>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.paragraph}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}

export default Card