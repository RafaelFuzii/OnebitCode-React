import ButtonProfile from '../Button'
import ProfileImage from '../ProfileImage'
import styles from './style.module.css'

function ProfileCard({profilePhoto, name, about, phone, email}){
    return(
        <>
            <div className={styles.container}>
                <ProfileImage profileImages={profilePhoto}/>
                <h1>{name}</h1>
                <hr className={styles.line}/>
                <p className={styles.description}>{about}</p>
                <hr className={styles.line}/>
                <p className={styles.description}>{phone}</p>
                <hr className={styles.line}/>
                <p className={styles.description}>{email}</p>
                <hr className={styles.line}/>
                <div className={styles.buttonContainer}>
                    <ButtonProfile  url="https://github.com/" name="Github"/>
                    <ButtonProfile  url="https://br.linkedin.com/" name="Linkedin"/>
                    <ButtonProfile  url="https://x.com/?lang=pt-br" name="Twitter"/>
                </div>
            </div>
        </>
    )
}


export default ProfileCard