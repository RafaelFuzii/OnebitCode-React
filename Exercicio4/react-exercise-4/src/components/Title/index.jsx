import styles from "./styles.module.css"

export default function Title(props){
    return(
        <h2 className={styles.text}>{props.children}</h2>
    )
}