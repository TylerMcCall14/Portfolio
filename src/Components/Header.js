import React from 'react'

import styles from './Header.module.css'
import logo from '../assets/Logo.png'

import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>
                <Link to ="/">
                <img src={logo}></img>
                </Link>
            </div>
        <div className={styles.link}>
            <Link to="/"> <a>Home</a></Link>
            <Link to="/portfolio"><a>Portfolio</a></Link>
            {// Add Blog in future
            //<Link to="/blog"><a>Blog</a></Link>
            }
            <Link to='/contact'><a>Contact Me</a></Link>
            <Link to="/resume"><a>Resume</a></Link>
        </div>
        <div className={styles.box}></div>
        </div>
    )
}

export default Header
