// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABdsFcdOpqLmfSnwkCpP9iZH6KfU3kEQc",
  authDomain: "practice-for-email.firebaseapp.com",
  projectId: "practice-for-email",
  storageBucket: "practice-for-email.appspot.com",
  messagingSenderId: "974715361266",
  appId: "1:974715361266:web:9bd55af13a786249ecbd6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;