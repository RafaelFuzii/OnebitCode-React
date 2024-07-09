import styles from './style.module.css'

export default function Description({content}){
    return(
        <p className={styles.description}>{content}</p>
    )
}