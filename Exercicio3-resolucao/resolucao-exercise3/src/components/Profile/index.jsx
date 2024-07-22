import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfieleSection from "./ProfileSection"
import styles from "./styles.module.css"



export default function Profile(props) {
    //[valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")

    function handleClick(e){
        alert("V0ce agora esta seguindo")
        setFollowText("Following")
    }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>{followText}</button>
      </Title>
      <ProfieleSection>{props.bio}</ProfieleSection>
      <ProfieleSection>{props.phone}</ProfieleSection>
      <ProfieleSection>{props.email}</ProfieleSection>
      <ProfieleSection className={styles.links} id="links-section" data-test="some value" aria-label="social Links">
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfieleSection>
    </div>
  )
} 