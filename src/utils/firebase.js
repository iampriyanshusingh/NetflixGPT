// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-j5Jul8Kg04j1b_ExP9qHJFQ_fdDpK4E",
  authDomain: "netflix-gpt-5f926.firebaseapp.com",
  projectId: "netflix-gpt-5f926",
  storageBucket: "netflix-gpt-5f926.firebasestorage.app",
  messagingSenderId: "846352291784",
  appId: "1:846352291784:web:302781734851eb7cc652fd",
  measurementId: "G-1Q9QR3QE93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
