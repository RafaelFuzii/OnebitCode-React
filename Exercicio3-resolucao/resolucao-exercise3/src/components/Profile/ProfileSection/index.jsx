import styles from "./styles.module.css"

export default function ProfieleSection(props){
    return(
        <div {...props} className={`${styles.wrapper} ${props.className}`}>
            {props.children}
        </div>
    )
}