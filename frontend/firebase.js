// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "miko-190ad.firebaseapp.com",
  projectId: "miko-190ad",
  storageBucket: "miko-190ad.firebasestorage.app",
  messagingSenderId: "527821315309",
  appId: "1:527821315309:web:277fde2273ca781e6f00e4"
};
console.log(import.meta.env.VITE_FIREBASE_APIKEY)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}