import React, { useState } from 'react'

import Header from '../Components/Header.js'
import PortfolioCard from '../Components/PortfolioCard.js';

import img from '../assets/Logo.png'

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
                    <div className={styles.selectBtn} onClick={() => {setMenuChoice(1)}} style={{backgroundColor:"#3a3b3c", border:"1px solid black"}}>ReactJS</div>
                    :
                    <div className={styles.selectBtn} onClick={() => {setMenuChoice(1)}}>ReactJS</div>
                    }
                    </div>
                    <div className={styles.outBtn3}>
                    { menuChoice === 2 ?
                    <div className={styles.selectBtn3} onClick={() => {setMenuChoice(2)}} style={{backgroundColor:"#3a3b3c", border:"1px solid black"}}>Vanilla JavaScript</div>
                    :
                    <div className={styles.selectBtn3} onClick={() => {setMenuChoice(2)}}>Vanilla JavaScript</div>
                    }
                    </div>
                    <div className={styles.outBtn2}>
                    { menuChoice === 3 ?
                    <div className={styles.selectBtn2} onClick={() => {setMenuChoice(3)}} style={{backgroundColor:"#3a3b3c", border:"1px solid black"}}>React Native</div>
                    :
                    <div className={styles.selectBtn2} onClick={() => {setMenuChoice(3)}}>React Native</div>
                    }
                    </div>
                </div>
            </div>
            <div>
                { menuChoice === 1 ?
                <div className={styles.content}>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
                    <PortfolioCard title="Test" desc="This is a test description of a project I am doing" givenImage={img}/>
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
