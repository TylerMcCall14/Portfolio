import React, { useState } from 'react'

import db from '../firebase'
import Header from '../Components/Header.js'
import { doc, setDoc } from "firebase/firestore"; 

import styles from './Contact.module.css'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(){
        if((name || email || message) === ""){
            alert("Please fill out all info");
        }else{

        const infoPackage = {
            'name': name,
            'email': email,
            'message': message
        }

        await setDoc(doc(db, "ContactForm", name),{
            'name': name,
            'email': email,
            'message': message
        });

        setName("");
        setEmail("");
        setMessage("");

    }
    }


    return (
        <div>
            <Header />
            <form className={styles.inputBoxes}>
                <input value={name} className={styles.normalInput} placeholder='First and Last Name' onChange={(e) => {setName(e.target.value)}}></input>
                <input value={email} className={styles.normalInput} placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}></input>
                <textarea value={message} className={styles.messageInput} placeholder='Your Message' onChange={(e) => {setMessage(e.target.value)}}></textarea>
                <div className={styles.submitBtn} onClick={handleSubmit}>Submit</div>
            </form>
        </div>
    )
}

export default Contact
