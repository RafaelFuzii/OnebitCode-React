import ButtonProfile from '../Button'
import ProfileImage from '../ProfileImage'
import Description from '../Description'
import styles from './style.module.css'

function ProfileCard({profilePhoto, name}){
    return(
        <>
            <div className={styles.container}>
                <ProfileImage profileImages={profilePhoto}/>
                <h1>{name}</h1>
                <hr className={styles.line}/>
                <Description content="Full-stack Javascript developer at Acme Inc."/>
                <hr className={styles.line}/>
                <Description content="+5511987654321"/>
                <hr className={styles.line}/>
                <Description content="john.doe@email.com"/>
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