import React, { useState } from 'react'

import Header from '../Components/Header.js'
import PortfolioCard from '../Components/PortfolioCard.js';

import img from '../assets/Logo.png'
import netflix from '../assets/Netflix.PNG'
import amazon from '../assets/Amazon.PNG'
import tiktok from '../assets/Capture.PNG'
import portfolioimg from '../assets/Portfolio.PNG'

import styles from './Portfolio.module.css'


function Portfolio() {

    const [menuChoice, setMenuChoice] = useState(1);

    return (
        <div>
            <Header />
            <div className={styles.body}>
                
                <div className={styles.desc}>
                    <div className={styles.descText}>
                    Here are my previous projects I have worked on in the past using the different technologies listed below.
                    Feel free to look through them, if you have any questions on any of these projects go ahead and shoot me a message!
                    </div>
                </div>
                <div className={styles.selectBtnContainer}>
                    <div className={styles.outBtn}>
                    { menuChoice === 1 ?
                    <div className={styles.selectBtn} onClick={() => {setMenuChoice(1)}} style={{backgroundColor:"#949494", border:"1px solid black"}}>ReactJS</div>
                    :
                    <div className={styles.selectBtn} onClick={() => {setMenuChoice(1)}}>ReactJS</div>
                    }
                    </div>
                    <div className={styles.outBtn3}>
                    { menuChoice === 2 ?
                    <div className={styles.selectBtn3} onClick={() => {setMenuChoice(2)}} style={{backgroundColor:"#949494", border:"1px solid black"}}>Vanilla JavaScript</div>
                    :
                    <div className={styles.selectBtn3} onClick={() => {setMenuChoice(2)}}>Vanilla JavaScript</div>
                    }
                    </div>
                    <div className={styles.outBtn2}>
                    { menuChoice === 3 ?
                    <div className={styles.selectBtn2} onClick={() => {setMenuChoice(3)}} style={{backgroundColor:"#949494", border:"1px solid black"}}>React Native</div>
                    :
                    <div className={styles.selectBtn2} onClick={() => {setMenuChoice(3)}}>React Native</div>
                    }
                    </div>
                </div>
            </div>
            <div>
                { menuChoice === 1 ?
                <div className={styles.content}>
                    <PortfolioCard title="Netflix Clone" desc="This project calls an IMDB API to display top-ranked movies in different categories while futuring a 'Netflix Style' theme." 
                    givenImage={netflix} ReactProj={true} githubStatus={true} LiveLink={"https://stupefied-lamarr-80bae9.netlify.app"} gitHubLink={"https://github.com/TylerMcCall14/ReactProjects/tree/main/netflix-clone"}/>
                    <PortfolioCard title="Amazon Cart" desc="This project mimics the Amazon store front and lets the user add and remove items to cart while updating total price" 
                    givenImage={amazon} ReactProj={true} githubStatus={true} LiveLink={"https://cocky-lovelace-2f9afe.netlify.app"} gitHubLink={"https://github.com/TylerMcCall14/ReactProjects/tree/main/Amazon-cart"}/>
                    <PortfolioCard title="TikTok Clone" desc="This project creates a web-based clone of TikTok, showcasing the snap effect TikTok has on the mobile application" 
                    givenImage={tiktok} ReactProj={true} githubStatus={true} LiveLink={"https://tender-shannon-3012cb.netlify.app"} gitHubLink={"https://github.com/TylerMcCall14/ReactProjects/tree/main/tiktok-clone"}/>
                    <PortfolioCard title="My Personal Website" desc="This website was created completely from scratch, showcasing my previous projects and a way to get connected with me" 
                    givenImage={portfolioimg} ReactProj={true} githubStatus={true} LiveLink={"https://www.mccalltyler.com"} gitHubLink={"https://github.com/TylerMcCall14/Portfolio"}/>
                </div>
                : menuChoice === 2 ?
                <div className={styles.content}>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
                </div>
                :
                <div className={styles.content}>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
                </div>
                }
            </div>
        </div>
    )
}

export default Portfolio
