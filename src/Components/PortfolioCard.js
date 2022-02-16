import React from "react";

import styles from './PortfolioCard.module.css'

function PortfolioCard( {title, desc, givenImage, githubStatus, ReactProj, gitHubLink, LiveLink} ){


    return(
        <div className={styles.card}>
            <img src={givenImage} className={styles.cardImage}></img>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.desc}>{desc}</div>
                <div>
                    { (ReactProj && githubStatus) == true ?
                    <div className={styles.buttons}>
                    <div className={styles.navButton}><a href={LiveLink} target="_blank">Live Project</a></div>
                    <div className={styles.navButton} ><a href={gitHubLink} target="_blank">GitHub</a></div>
                    </div>
                    : (ReactProj == true && githubStatus == false) ?
                    <div className={styles.buttons}>
                    <div className={styles.navButton}><a href={LiveLink} target="_blank">Live Project</a></div>
                    </div>
                    :
                    <div className={styles.buttons}>
                    <div className={styles.navButton} ><a href={gitHubLink} target="_blank">GitHub</a></div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;