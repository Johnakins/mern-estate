// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-af141.firebaseapp.com",
  projectId: "real-estate-af141",
  storageBucket: "real-estate-af141.appspot.com",
  messagingSenderId: "543865322339",
  appId: "1:543865322339:web:948d11af1f6e1a93bd3156",
  measurementId: "G-N7CVYZ48JN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
