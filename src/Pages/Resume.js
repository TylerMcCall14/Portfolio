import React from 'react'

import Header from '../Components/Header.js'
import ResumePic from '../assets/Resume.jpg'

import ResumeDownload from '../assets/Resume.pdf'

import styles from './Resume.module.css'

function Resume() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <a href={ResumeDownload} download="Tyler-McCall-Resume.pdf" className={styles.downloadBtn}>Download Resume</a>
                <img src={ResumePic} className={styles.resumeImg}></img>
            </div>
        </div>
    )
}

export default Resume