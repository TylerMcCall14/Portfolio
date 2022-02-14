import React from "react";

import styles from './PortfolioCard.module.css'

function PortfolioCard( {title, desc, givenImage, githubStatus} ){


    return(
        <div className={styles.card}>
            <img src={givenImage} className={styles.cardImage}></img>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.desc}>{desc}</div>
                <div className={styles.buttons}>
                    <div className={styles.navButton}>Live Project</div>
                    <div className={styles.navButton}>GitHub</div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;