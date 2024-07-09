import styles from './style.module.css'

export default function ProfileImage({ profileImages }){
    return(
        <img src={profileImages} alt="" className={styles.images}/>
    )
}