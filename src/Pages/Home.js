import React from 'react'

import Header from '../Components/Header.js'
import styles from './Home.module.css'
import picture from '../assets/SelfPortrait.PNG'

import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <div className={styles.body}>
                <h1>Hi, I'm Tyler McCall</h1>
                <div className={styles.subText}>
                <a>I'm a current senior computer engineering student at the University of North Texas with a background in full-stack web development. I mainly focus on ReactJS for the web and React Native for mobile applications. Check out my portfolio to see what I'm currently working on!</a>
                </div>
                <div className={styles.buttons}>
                    <Link to="/portfolio" style={{ textDecoration: 'none'}}>
                    <div className={styles.outBox}>
                        <div className={styles.portBtn}>
                            <a>Go to Portfolio</a>
                        </div>
                    </div>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none'}}>
                    <div className={styles.outBox}>
                        <div className={styles.contactBtn}>
                            <a>Send a Message</a>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className={styles.intro}>
                <div className={styles.quip}>
                <h3>I strive to bring responsive and functional work as quickly as possbile</h3>
                </div>
                <div className={styles.pic}>
                </div>
            </div>
        </div>
    )
}

export default Home
