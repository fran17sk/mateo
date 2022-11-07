// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzx6mpO2Ido7FNtQO2b1Z-2SgD7DqkD_U",
    authDomain: "mateo-65b52.firebaseapp.com",
    projectId: "mateo-65b52",
    storageBucket: "mateo-65b52.appspot.com",
    messagingSenderId: "329271402173",
    appId: "1:329271402173:web:dcac6c9efb224253b221d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)