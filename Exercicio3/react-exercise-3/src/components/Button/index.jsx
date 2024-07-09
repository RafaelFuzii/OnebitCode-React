import styles from './style.module.css'

export default function ButtonProfile({url, name}){
    return(
        <button className={styles.buttons}>
            <a className={styles.links} href={url} target='_blank'>{name}</a>
        </button>
    )
}