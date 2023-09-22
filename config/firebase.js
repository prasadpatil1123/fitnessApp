// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbGF6vsut9KCd-ExCwqumZsWY-x9G3Iz4",
  authDomain: "fitnessapp-27b04.firebaseapp.com",
  projectId: "fitnessapp-27b04",
  storageBucket: "fitnessapp-27b04.appspot.com",
  messagingSenderId: "349467626695",
  appId: "1:349467626695:web:2c7db358d0671e715ec2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);