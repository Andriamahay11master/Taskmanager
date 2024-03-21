// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // getAuth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9JyaydenCSmIxHzrUgGy2e0YQcJ11P6Q",
  authDomain: "taskmanager-47441.firebaseapp.com",
  projectId: "taskmanager-47441",
  storageBucket: "taskmanager-47441.appspot.com",
  messagingSenderId: "620612522387",
  appId: "1:620612522387:web:680fc31933eab5e3ee9866",
  measurementId: "G-S4BJ1WK4EP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db  = getFirestore(app);

export { app, auth, db };
