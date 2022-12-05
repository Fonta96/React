// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaVhxBkdnudSwnx064koJ8OMH2kfSTNB0",
  authDomain: "react-comision-40275.firebaseapp.com",
  projectId: "react-comision-40275",
  storageBucket: "react-comision-40275.appspot.com",
  messagingSenderId: "956865718880",
  appId: "1:956865718880:web:540e262a47e97724987105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)