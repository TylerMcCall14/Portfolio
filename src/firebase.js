import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDO8FCb3yGxQmBzHxvrEFsAwch7V4JkmDg",
    authDomain: "portfoliowebsite-3413f.firebaseapp.com",
    projectId: "portfoliowebsite-3413f",
    storageBucket: "portfoliowebsite-3413f.appspot.com",
    messagingSenderId: "458695743001",
    appId: "1:458695743001:web:0da25a7801128a69407c88",
    measurementId: "G-94RZ3VT8E7"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  
export default db;